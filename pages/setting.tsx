import { useRouter } from "next/router";
import { FullUser, Theme, UserRole } from "../types";

const SettingsPage = () => {
  const router = useRouter();

  const theme: Theme = "light";
  const profile: FullUser = {
    id: "abc123",
    name: "Fatima",
    email: "fatima@example.com",
    role: UserRole.Viewer,
    status: "pending",
    city: "Karachi",
    country: "Pakistan",
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Settings Page</h1>
      <p>Theme: {theme}</p>
      <p>{profile.name} from {profile.city}, {profile.country}</p>

      <button onClick={() => router.push("/")} style={btnStyle}>
        Go to Home
      </button>
      <button onClick={() => router.push("/user")} style={btnStyle}>
        Go to Users
      </button>
    </div>
  );
};

const btnStyle = {
  margin: "0.5rem",
  padding: "0.5rem 1rem",
  cursor: "pointer",
};

export default SettingsPage;
