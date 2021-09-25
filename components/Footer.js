import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer>
            <div className="footer-name">
                <p>© Alejandro Puerta 2021</p>
                <p>Built with Next.js</p>
            </div>
            <div className="footer-icons">
                <Link href="mailto:apuertadelaguila@gmail.com">
                    <a className="icon">
                        <Image src="/mail.svg" alt="mail" width="25" height="25" />
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/alejandro-puerta-17b404201" >
                    <a className="icon" target="_blank">
                        <Image src="/linkedin.svg" alt="linkedin" width="25" height="25" />
                    </a>
                </Link>
                <Link href="https://github.com/aguiluxo91">
                    <a className="icon" target="_blank">
                        <Image src="/github.svg" alt="linkedin" width="25" height="25" />
                    </a>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;