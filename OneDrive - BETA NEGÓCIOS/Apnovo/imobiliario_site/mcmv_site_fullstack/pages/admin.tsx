import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';
import Layout from '../components/Layout';
import { auth, db } from '../lib/firebaseClient';
import styles from '../styles/admin.module.css';
import { useRouter } from 'next/router';

type Lead = {
  id: string;
  region: string;
  renting: string;
  income: string;
  wantsMcmv: string;
  name: string;
  phone: string;
  createdAtClient?: string;
  createdAt?: any;
};

export default function Admin() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.replace('/login');
        return;
      }
      setUserEmail(user.email);
      const token = await user.getIdTokenResult(true);
      setIsAdmin(!!token.claims.admin);
    });
    return () => unsub();
  }, [router]);

  useEffect(() => {
    if (isAdmin !== true) return;

    const q = query(collection(db, 'leads'), orderBy('createdAtClient', 'desc'));
    const unsub = onSnapshot(
      q,
      (snap) => {
        const rows = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
        setLeads(rows);
      },
      (err) => {
        console.error(err);
      }
    );
    return () => unsub();
  }, [isAdmin]);

  const total = useMemo(() => leads.length, [leads]);

  async function logout() {
    await signOut(auth);
    router.replace('/login');
  }

  return (
    <Layout title="Admin • Leads">
      <div className={styles.topbar}>
        <div>
          <div className={styles.h1}>Leads do Quiz</div>
          <div className={styles.small}>Logado como: {userEmail || '...'}</div>
        </div>
        <div className={styles.actions}>
          <button className={styles.btnGhost} onClick={logout}>Sair</button>
        </div>
      </div>

      {isAdmin === false && (
        <div className={styles.panel}>
          <div className={styles.h2}>Acesso negado</div>
          <p className={styles.p}>Seu usuário não está marcado como administrador.</p>
          <div className={styles.small}>
            Dica: rode <code>npm run set-admin -- &lt;UID&gt;</code> para dar permissão.
          </div>
        </div>
      )}

      {isAdmin === null && (
        <div className={styles.panel}><div className={styles.p}>Verificando permissão…</div></div>
      )}

      {isAdmin === true && (
        <>
          <div className={styles.metrics}>
            <div className={styles.metricCard}>
              <div className={styles.metricLabel}>Total de leads</div>
              <div className={styles.metricValue}>{total}</div>
            </div>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Data/Hora</th>
                  <th>Nome</th>
                  <th>Telefone</th>
                  <th>Região</th>
                  <th>Aluguel</th>
                  <th>Renda</th>
                  <th>MCMV</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.id}>
                    <td>{l.createdAtClient ? new Date(l.createdAtClient).toLocaleString('pt-BR') : '-'}</td>
                    <td>{l.name}</td>
                    <td>{l.phone}</td>
                    <td>{l.region}</td>
                    <td>{l.renting}</td>
                    <td>{l.income}</td>
                    <td>{l.wantsMcmv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </Layout>
  );
}
