import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { auth } from '../lib/firebaseClient';
import styles from '../styles/admin.module.css';

export default function Login() {
  const router = useRouter();

  async function login() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push('/admin');
  }

  return (
    <Layout title="Login Admin">
      <div className={styles.center}>
        <div className={styles.panel}>
          <h1 className={styles.h1}>Área Admin</h1>
          <p className={styles.p}>Faça login para acessar os leads do quiz.</p>
          <button className={styles.btnPrimary} onClick={login}>Entrar com Google</button>
          <div className={styles.small}>
            Acesso restrito a administradores autorizados.
          </div>
        </div>
      </div>
    </Layout>
  );
}
