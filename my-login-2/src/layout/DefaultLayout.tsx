import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthProv"; // Importa useAuth

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const { logout } = useAuth(); // Obtiene la función logout del contexto de autenticación

  const handleSignOut = () => {
    logout(); // Llama a la función logout al hacer clic en el enlace "signout"
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/overview">Overview</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/" onClick={handleSignOut}>signout</Link> {/* Llama a handleSignOut al hacer clic */}
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </>
  );
}