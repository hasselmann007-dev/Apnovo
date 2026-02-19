# King • Landing MCMV + Quiz + Admin (Next.js + Firebase)

## Visão geral
- Home premium com conteúdo (começo/meio/fim) + CTA para quiz + CTA WhatsApp
- Quiz em 5 etapas grava respostas no Firestore (collection: `leads`)
- Admin protegido (Google Login) + leitura somente para ADMs via custom claim `admin=true`

## Pré-requisitos
- Node.js 18+
- Um projeto no Firebase com:
  - Authentication (Google)
  - Firestore

## Configuração
1) Copie `.env.example` para `.env.local` e preencha as variáveis do Firebase Web App.

2) Rode:
```bash
npm install
npm run dev
```

## Regras do Firestore
Cole o conteúdo de `firestore.rules` em Firebase Console → Firestore → Rules.

## Tornar um usuário Admin
1) Acesse `/admin` e faça login com Google.
2) Copie o UID em Firebase Console → Authentication → Users.
3) Preencha as variáveis de Admin SDK no `.env.local`:
- `FIREBASE_ADMIN_PROJECT_ID`
- `FIREBASE_ADMIN_CLIENT_EMAIL`
- `FIREBASE_ADMIN_PRIVATE_KEY` (com \n)

4) Execute:
```bash
npm run set-admin -- <UID>
```
5) Faça logout/login no site.

## Deploy
- Frontend: Vercel (recomendado)
- Firebase: Firestore/Rules

> Dica: adicione reCAPTCHA para reduzir spam em campanhas.
