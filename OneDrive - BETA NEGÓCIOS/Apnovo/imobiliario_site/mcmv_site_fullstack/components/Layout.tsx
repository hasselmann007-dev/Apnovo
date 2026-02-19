import Head from 'next/head';
import styles from '../styles/layout.module.css';

export default function Layout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.bg}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.brand}>
              <div className={styles.logo}>K</div>
              <div>
                <div className={styles.brandTop}>King • Especialista MCMV</div>
                <div className={styles.brandSub}>Imóveis Cury em São Paulo</div>
              </div>
            </div>
            <nav className={styles.nav}>
              <a href="/quiz">Simulação</a>
              <a href="/admin">Admin</a>
            </nav>
          </div>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div>© {new Date().getFullYear()} King • Atendimento especializado MCMV</div>
            <div className={styles.small}>
              *Conteúdo informativo. Condições dependem de análise de crédito e regras do programa.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
