import Link from 'next/link';

const Navbar = () => {
    return (
      <nav className="row">
        <div className="col-md-8">
          <Link href="/">
            <a>Alejandro Puerta del Águila</a>
          </Link>
        </div>
        <ul className="col-md-4">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a>Work</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    );
}
 
export default Navbar;