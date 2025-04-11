import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ padding: "2rem", textAlign: "center", fontWeight: "bold" }}>
      <h1>Welcome to Dashboard</h1>

      <button onClick={() => router.push("/user")} style={btnStyle}>
        Go to Users
      </button>

      <button onClick={() => router.push("/setting")} style={btnStyle}>
        Go to Settings
      </button>
    </div>
  );
}

const btnStyle = {
  margin: "0.5rem",
  padding: "0.5rem 1rem",
  cursor: "pointer",
};
