import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {

    const router = useRouter();

    return (
      <nav className="row g-0">
        <div className="col-md-8">
          <Link href="/">
            Alejandro Puerta del Águila
          </Link>
        </div>
        <ul className="col-md-4">
          <li className={router.pathname == "/" ? "border border-white" : ""}>
            <Link href="/">
              Home
            </Link>
          </li>
          <li className={router.pathname == "/work" ? "border border-white" : ""}>
            <Link href="/work">
              Work
            </Link>
          </li>
          <li className={router.pathname == "/about" ? "border border-white" : ""}>
            <Link href="/about">
              About
            </Link>
          </li>
          <li className={router.pathname == "/contact" ? "border border-white" : ""}>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
}
 
export default Navbar;