import Link from 'next/link';
import { useRouter } from 'next/router';


const Navbar = () => {

  const router = useRouter();

  return (
    <nav>
      <div>
        <Link href="/">
          Alejandro Puerta del Águila
        </Link>
      </div>
      <ul>
        <li className={router.pathname == "/" ? "li-borders" : ""}>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className={router.pathname == "/work" ? "li-borders" : ""}>
          <Link href="/work">
            Work
          </Link>
        </li>
        <li className={router.pathname == "/about" ? "li-borders" : ""}>
          <Link href="/about">
            About
          </Link>
        </li>
        <li className={router.pathname == "/contact" ? "li-borders" : ""}>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;