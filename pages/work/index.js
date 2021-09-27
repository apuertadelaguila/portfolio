import Link from 'next/link';


const Work = () => {
    return (
        <div className="work">
            <h1>Projects I'm working on</h1>
            <section className="projects">
                <Link href="/work/superpang">
                    <a className="project scale-in-center">
                        <img src="/SuperPang.png" />
                        <div>
                            <p>Super Pang</p>
                        </div>
                    </a>
                </Link>
                <Link href="/work/justgame">
                    <a className="project scale-in-center project2">
                        <img src="/Just_game_logo_SMALL_nt80gs.png" />
                        <div>
                            <p>Just Game</p>
                        </div>
                    </a>
                </Link>
                <Link href="/work/petportal">
                    <a className="project scale-in-center project3">
                        <img src="/pet-portal.png" />
                        <div>
                            <p>Pet Portal</p>
                        </div>
                    </a>
                </Link>
                <Link href="/work/thephonecave">
                    <a className="project scale-in-center project4">
                        <img src="/the-phone-cave.png" />
                        <div>
                            <p>The Phone Cave</p>
                        </div>
                    </a>
                </Link>
            </section>
        </div>
    );
}

export default Work;