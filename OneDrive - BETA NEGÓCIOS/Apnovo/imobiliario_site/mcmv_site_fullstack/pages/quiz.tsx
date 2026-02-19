import { useMemo, useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/quiz.module.css';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebaseClient';

const WHATSAPP = '5511983010155';

type QuizData = {
  region: string;
  renting: 'Sim' | 'Não' | '';
  income: '1500-2550' | '2550-5000' | '5000-7200' | '';
  wantsMcmv: 'Sim' | 'Não' | '';
  name: string;
  phone: string;
};

export default function Quiz() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<QuizData>({
    region: '',
    renting: '',
    income: '',
    wantsMcmv: '',
    name: '',
    phone: '',
  });

  const progress = useMemo(() => Math.round((step / 5) * 100), [step]);

  function next() {
    setStep((s) => Math.min(5, s + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function prev() {
    setStep((s) => Math.max(1, s - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function submit() {
    setLoading(true);
    try {
      const payload = {
        ...data,
        createdAt: serverTimestamp(),
        createdAtClient: new Date().toISOString(),
        source: 'landing',
      };
      await addDoc(collection(db, 'leads'), payload);

      const msg = `Olá King! Fiz a simulação MCMV.\n\nRegião: ${data.region}\nMora de aluguel: ${data.renting}\nRenda: ${data.income}\nQuer participar do MCMV: ${data.wantsMcmv}\n\nNome: ${data.name}\nTelefone: ${data.phone}`;
      const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
      window.location.href = wa;
    } catch (e) {
      alert('Não foi possível enviar agora. Tente novamente.');
      setLoading(false);
    }
  }

  const canNext = useMemo(() => {
    if (step === 1) return data.region.trim().length >= 2;
    if (step === 2) return data.renting !== '';
    if (step === 3) return data.income !== '';
    if (step === 4) return data.wantsMcmv !== '';
    if (step === 5) return data.name.trim().length >= 3 && data.phone.trim().length >= 8;
    return false;
  }, [step, data]);

  return (
    <Layout title="Simulação • Quiz MCMV">
      <section className={styles.wrap}>
        <div className={styles.header}>
          <div className={styles.title}>Simulação rápida</div>
          <div className={styles.subtitle}>Responda em menos de 1 minuto e receba no WhatsApp.</div>
          <div className={styles.progressOuter}>
            <div className={styles.progressInner} style={{ width: `${progress}%` }} />
          </div>
          <div className={styles.progressText}>{progress}% concluído</div>
        </div>

        <div className={styles.card}>
          {step === 1 && (
            <>
              <h2 className={styles.q}>1) Em que região de São Paulo você mora?</h2>
              <p className={styles.hint}>Ex.: Zona Leste, Zona Sul, Centro, Lapa, Carrão…</p>
              <input
                className={styles.input}
                value={data.region}
                onChange={(e) => setData({ ...data, region: e.target.value })}
                placeholder="Digite sua região"
              />
            </>
          )}

          {step === 2 && (
            <>
              <h2 className={styles.q}>2) Você mora de aluguel?</h2>
              <div className={styles.choices}>
                <button
                  type="button"
                  className={`${styles.choice} ${data.renting === 'Sim' ? styles.choiceOn : ''}`}
                  onClick={() => setData({ ...data, renting: 'Sim' })}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={`${styles.choice} ${data.renting === 'Não' ? styles.choiceOn : ''}`}
                  onClick={() => setData({ ...data, renting: 'Não' })}
                >
                  Não
                </button>
              </div>
              <div className={styles.microcopy}>Se você paga aluguel, a meta é transformar esse valor em parcela do que é seu.</div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className={styles.q}>3) Para simular, qual é sua renda média hoje?</h2>
              <div className={styles.choicesCol}>
                <button
                  type="button"
                  className={`${styles.choice} ${data.income === '1500-2550' ? styles.choiceOn : ''}`}
                  onClick={() => setData({ ...data, income: '1500-2550' })}
                >
                  De R$ 1.500 até R$ 2.550
                </button>
                <button
                  type="button"
                  className={`${styles.choice} ${data.income === '2550-5000' ? styles.choiceOn : ''}`}
                  onClick={() => setData({ ...data, income: '2550-5000' })}
                >
                  De R$ 2.550 até R$ 5.000
                </button>
                <button
                  type="button"
                  className={`${styles.choice} ${data.income === '5000-7200' ? styles.choiceOn : ''}`}
                  onClick={() => setData({ ...data, income: '5000-7200' })}
                >
                  De R$ 5.000 até R$ 7.200
                </button>
              </div>
              <div className={styles.microcopy}>Essa informação ajuda a estimar condições e direcionar o melhor caminho.</div>
            </>
          )}

          {step === 4 && (
            <>
              <h2 className={styles.q}>4) O MCMV pode oferecer subsídio para o primeiro imóvel. Você gostaria de participar?</h2>
              <p className={styles.hint}>Vamos checar seu perfil e te orientar do jeito mais simples possível.</p>
              <div className={styles.choices}>
                <button
                  type="button"
                  className={`${styles.choice} ${data.wantsMcmv === 'Sim' ? styles.choiceOn : ''}`}
                  onClick={() => setData({ ...data, wantsMcmv: 'Sim' })}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={`${styles.choice} ${data.wantsMcmv === 'Não' ? styles.choiceOn : ''}`}
                  onClick={() => setData({ ...data, wantsMcmv: 'Não' })}
                >
                  Não
                </button>
              </div>
            </>
          )}

          {step === 5 && (
            <>
              <h2 className={styles.q}>5) Informe seu telefone e nome completo para receber a simulação no WhatsApp</h2>
              <div className={styles.formRow}>
                <label className={styles.label}>
                  Nome completo
                  <input
                    className={styles.input}
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    placeholder="Ex.: Maria da Silva"
                  />
                </label>
                <label className={styles.label}>
                  Telefone/WhatsApp
                  <input
                    className={styles.input}
                    value={data.phone}
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                    placeholder="Ex.: (11) 9xxxx-xxxx"
                  />
                </label>
              </div>
              <div className={styles.microcopy}>
                Ao enviar, você será direcionado ao WhatsApp do King com sua simulação.
              </div>
            </>
          )}

          <div className={styles.navRow}>
            <button type="button" className={styles.navBtn} onClick={prev} disabled={step === 1 || loading}>
              Voltar
            </button>

            {step < 5 ? (
              <button type="button" className={styles.navBtnPrimary} onClick={next} disabled={!canNext || loading}>
                Continuar
              </button>
            ) : (
              <button type="button" className={styles.navBtnPrimary} onClick={submit} disabled={!canNext || loading}>
                {loading ? 'Enviando…' : 'Receber no WhatsApp'}
              </button>
            )}
          </div>
        </div>

        <div className={styles.privacy}>
          Seus dados são usados apenas para contato e simulação. Você pode pedir remoção a qualquer momento.
        </div>
      </section>
    </Layout>
  );
}
