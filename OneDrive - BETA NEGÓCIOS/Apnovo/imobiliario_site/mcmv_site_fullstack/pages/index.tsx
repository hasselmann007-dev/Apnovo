import Layout from '../components/Layout';
import styles from '../styles/home.module.css';

const WHATSAPP = '5511983010155';

export default function Home() {
  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá King! Quero entender se consigo comprar um apê Cury pelo Minha Casa Minha Vida em São Paulo.')}`;

  return (
    <Layout title="Minha Casa Minha Vida em SP • King + Cury">
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.kicker}>Minha Casa, Minha Vida • São Paulo</div>
          <h1 className={styles.h1}>
            Seu apê Cury em SP: saia do aluguel e conquiste estabilidade para sua família
          </h1>
          <p className={styles.lead}>
            Entenda como o MCMV pode reduzir o custo do financiamento e descubra em poucos passos se você tem perfil.
          </p>
          <div className={styles.heroCtas}>
            <a className={styles.ctaPrimary} href="/quiz">Simule seu financiamento aqui</a>
            <a className={styles.ctaGhost} href={wa} target="_blank" rel="noreferrer">Falar com o King no WhatsApp</a>
          </div>
          <div className={styles.trustRow}>
            <div className={styles.trustItem}>✔ Atendimento humano</div>
            <div className={styles.trustItem}>✔ Especialista MCMV</div>
            <div className={styles.trustItem}>✔ Empreendimentos Cury</div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroCard}>
            <div className={styles.heroImg} aria-label="Foto de família em apartamento" />
            <div className={styles.heroCardText}>
              <div className={styles.heroCardTitle}>A sensação de abrir a porta do que é seu</div>
              <div className={styles.heroCardSub}>
                Troque o “todo mês o aluguel vence” por “todo mês eu construo meu patrimônio”.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOR vs SONHO */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionDarkInner}>
          <h2 className={styles.h2}>Cansado de pagar aluguel e ver seu dinheiro ir embora?</h2>
          <p className={styles.p}>
            O aluguel traz incerteza: reajuste, mudança, pouco controle sobre o seu espaço. O sonho da casa própria é mais do que um imóvel — é
            <strong> segurança, estabilidade</strong> e um futuro mais leve para a família.
          </p>
          <div className={styles.bullets}>
            <div className={styles.bullet}>• Mais previsibilidade no orçamento</div>
            <div className={styles.bullet}>• Um lar para construir memórias</div>
            <div className={styles.bullet}>• Patrimônio e valorização</div>
          </div>

          {/* CTA NO MEIO */}
          <div className={styles.midCtaWrap}>
            <div className={styles.midCtaBox}>
              <div>
                <div className={styles.midCtaTitle}>Simule agora e descubra se você pode financiar</div>
                <div className={styles.midCtaSub}>Leva menos de 1 minuto • Resultado enviado no seu WhatsApp</div>
              </div>
              <a className={styles.ctaPrimary} href="/quiz">Simule seu financiamento aqui</a>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Por que o Minha Casa, Minha Vida é tão buscado?</h2>
        <p className={styles.p}>
          Em geral, o programa atende famílias com renda mensal bruta de até <strong>R$ 8.600</strong> na modalidade urbana.
          Isso pode significar condições facilitadas e uso do FGTS para ajudar na compra.
        </p>
        <div className={styles.grid3}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>💰</div>
            <div className={styles.cardTitle}>Entrada mais acessível</div>
            <div className={styles.cardText}>Em muitos casos, o subsídio e o FGTS ajudam a reduzir a necessidade de entrada.</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🧾</div>
            <div className={styles.cardTitle}>FGTS pode ajudar</div>
            <div className={styles.cardText}>Você pode usar o FGTS como entrada e também em abatimentos conforme regras.</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🧘</div>
            <div className={styles.cardTitle}>Parcelas que cabem</div>
            <div className={styles.cardText}>Condições do programa podem tornar a parcela mais próxima do valor do aluguel.</div>
          </div>
        </div>
      </section>

      {/* POR QUE CURY + KING */}
      <section className={styles.section}>
        <div className={styles.split}>
          <div>
            <h2 className={styles.h2}>Por que escolher um Cury com a ajuda do King?</h2>
            <p className={styles.p}>
              A Cury atua no segmento de habitação econômica e tem história em São Paulo desde a década de 1960.
              O King entra para simplificar: ele te orienta do primeiro passo à escolha do empreendimento.
            </p>
            <div className={styles.badges}>
              <span className={styles.badge}>Construtora com trajetória</span>
              <span className={styles.badge}>Foco em MCMV</span>
              <span className={styles.badge}>Atendimento individual</span>
            </div>
          </div>
          <div className={styles.quoteCard}>
            <div className={styles.quote}>
              “Achei que seria impossível… mas com a simulação e a orientação certa, eu consegui sair do aluguel.”
            </div>
            <div className={styles.quoteMeta}>— Depoimento ilustrativo (substitua por cliente real)</div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Seu caminho para o apê Cury em 3 passos simples</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNum}>1</div>
            <div>
              <div className={styles.stepTitle}>Faça a simulação</div>
              <div className={styles.stepText}>Responda o quiz (leva menos de 1 minuto) e receba o resultado no WhatsApp.</div>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>2</div>
            <div>
              <div className={styles.stepTitle}>Entenda seu cenário</div>
              <div className={styles.stepText}>O King analisa sua situação e indica o melhor caminho dentro do programa.</div>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>3</div>
            <div>
              <div className={styles.stepTitle}>Escolha e conquiste</div>
              <div className={styles.stepText}>Você escolhe o empreendimento ideal e segue com o processo com tranquilidade.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Perguntas frequentes</h2>
        <div className={styles.faq}>
          <details className={styles.details}>
            <summary>Quem pode participar do MCMV?</summary>
            <div>Em geral, na modalidade urbana, famílias com renda mensal bruta até R$ 8.600 podem se enquadrar. A elegibilidade depende de regras e análise.</div>
          </details>
          <details className={styles.details}>
            <summary>Posso usar FGTS?</summary>
            <div>Em muitos casos, sim — o FGTS pode ser usado como entrada e para abatimentos, conforme regras vigentes.</div>
          </details>
          <details className={styles.details}>
            <summary>Quanto tempo leva?</summary>
            <div>Varia conforme documentos e análise de crédito. O King orienta para agilizar o que estiver ao seu alcance.</div>
          </details>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.finalCta}>
        <h2 className={styles.h2}>Não deixe seu sonho esperar</h2>
        <p className={styles.p}>Clique abaixo e fale direto com o King para entender as melhores opções para você em São Paulo.</p>
        <div className={styles.finalCtas}>
          <a className={styles.ctaPrimary} href="/quiz">Quero fazer a simulação</a>
          <a className={styles.ctaWhatsapp} href={wa} target="_blank" rel="noreferrer">Falar agora no WhatsApp</a>
        </div>
      </section>
    </Layout>
  );
}
