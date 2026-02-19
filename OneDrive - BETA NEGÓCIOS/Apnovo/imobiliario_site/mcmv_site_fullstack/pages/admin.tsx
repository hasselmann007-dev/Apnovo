import dynamic from "next/dynamic";

const AdminClient = dynamic(() => import("../components/AdminClient").then((m) => m.default), {
  ssr: false,
  loading: () => <div style={{ padding: 24 }}>Carregando painel…</div>,
});

export default function AdminPage() {
  return <AdminClient />;
}
