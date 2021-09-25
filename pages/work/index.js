import Link from 'next/link';


const Work = () => {
    return (
        <div className="work">
            <h1>Projects I'm working on</h1>
            <section className="projects">
                <Link href="/work/superpang">
                    <a className="project">
                        <img src="/SuperPang.png" />
                        <div>
                            <p>Super Pang</p>
                        </div>
                    </a>
                </Link>
                <Link href="/work/justgame">
                    <a className="project">
                        <img src="/JustGame.png" />
                        <div>
                            <p>Just Game</p>
                        </div>
                    </a>
                </Link>
                <Link href="/work/petportal">
                    <a className="project">
                        <img src="/PetPortal.png" />
                        <div>
                            <p>Pet Portal</p>
                        </div>
                    </a>
                </Link>
                <Link href="/work/thephonecave">
                    <a className="project">
                        <img src="/ThePhoneCave.png" />
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