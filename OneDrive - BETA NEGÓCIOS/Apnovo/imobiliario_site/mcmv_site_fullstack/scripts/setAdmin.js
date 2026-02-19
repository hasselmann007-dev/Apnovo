/**
 * Marca um usuário como admin via custom claims.
 * Uso: npm run set-admin -- <UID>
 */

const admin = require('firebase-admin');

function mustEnv(name) {
  const v = process.env[name];
  if (!v) {
    console.error(`Missing env: ${name}`);
    process.exit(1);
  }
  return v;
}

const uid = process.argv[2];
if (!uid) {
  console.error('Uso: npm run set-admin -- <UID>');
  process.exit(1);
}

const projectId = mustEnv('FIREBASE_ADMIN_PROJECT_ID');
const clientEmail = mustEnv('FIREBASE_ADMIN_CLIENT_EMAIL');
const privateKey = mustEnv('FIREBASE_ADMIN_PRIVATE_KEY').replace(/\\n/g, '\n');

admin.initializeApp({
  credential: admin.credential.cert({
    projectId,
    clientEmail,
    privateKey,
  }),
});

(async () => {
  await admin.auth().setCustomUserClaims(uid, { admin: true });
  console.log(`OK: UID ${uid} agora é admin.`);
  console.log('Faça logout/login no site para atualizar as permissões.');
  process.exit(0);
})();
