import { useRouter } from "next/router";
import { User, UserRole, getFirstItem, skills } from "../types";

const users: User[] = [
  {
    id: 1,
    name: "Fatima",
    email: "fatima@example.com",
    role: UserRole.Admin,
    status: "active",
  },
];

export default function UsersPage() {
  const router = useRouter();
  const firstSkill = getFirstItem(skills);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Users Page</h1>
      <p>First Skill: {firstSkill}</p>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name} - {user.role}</h2>
          <p>{user.email}</p>
        </div>
      ))}

      <button onClick={() => router.push("/")} style={btnStyle}>
        Go to Home
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
