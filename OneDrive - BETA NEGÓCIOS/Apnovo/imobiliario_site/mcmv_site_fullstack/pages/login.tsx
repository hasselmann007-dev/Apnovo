import dynamic from "next/dynamic";

const LoginClient = dynamic(
  () => import("../components/LoginClient").then((m) => m.default),
  {
    ssr: false,
    loading: () => <div style={{ padding: 24 }}>Carregando…</div>,
  }
);

export default function LoginPage() {
  return <LoginClient />;
}
