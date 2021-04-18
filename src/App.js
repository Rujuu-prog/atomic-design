import { Router } from "../src/router/Router";
import { UserProvider } from "./components/providers/UserProvider";
import "./styles.css";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
