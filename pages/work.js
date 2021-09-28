import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Link from 'next/link';

const Work = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000
        })
      }, [])

    return (
        <div className="work">
            <h1>Projects I'm working on</h1>
            <section className="projects">
                <div className="project" data-aos="fade">
                    <img src="/super-pang-arcade.png" className="project-img"/>
                    <div className="project-description">
                        <div>SUPER PANG</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dolore illo recusandae facere hic voluptatem fugit tempore qui veritatis dolorum!</p>
                        <div className="description-icons">
                            <Link href="https://aguiluxo91.github.io/Super-Pang-IronHack-1st-Project/index.html">
                                <a target="_blank">
                                    <img src="/rocket.svg" alt="rocket" />
                                </a>
                            </Link>
                            <Link href="https://github.com/aguiluxo91/Super-Pang-IronHack-1st-Project">
                                <a  target="_blank">
                                    <img src="/github.svg" alt="github-icon" />
                                </a>
                            </Link>
                        </div>
                        <div className="tech-icons">
                            <span>
                                <img src="/js-icon.svg" alt="javascript-icon" />
                            </span>
                            <span>
                                <img src="/html-icon.svg" alt="html-icon" />
                            </span>
                            <span>
                                <img src="/css-icon.svg" alt="css-icon" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="project" data-aos="fade">
                    <img src="/JustGame.png" className="project-img"/>
                    <div className="project-description">
                        <div>JUST GAME</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nesciunt ea tenetur dignissimos eum corporis aperiam eveniet omnis vel. Vel necessitatibus, fugiat qui ex voluptatibus sed ratione consectetur est et.</p>
                        <div className="description-icons">
                            <Link href="http://just-game.herokuapp.com">
                                <a target="_blank">
                                    <img src="/rocket.svg" alt="rocket" />
                                </a>
                            </Link>
                            <Link href="https://github.com/JustGameIronhack/just-game">
                                <a  target="_blank">
                                    <img src="/github.svg" alt="github-icon" />
                                </a>
                            </Link>
                        </div>
                        <div className="tech-icons">
                            <span>
                                <img src="/js-icon.svg" alt="express-icon" />
                            </span>
                            <span>
                                <img src="/express-icon.svg" alt="javascript-icon" />
                            </span>
                            <span>
                                <img src="/node-icon.svg" alt="html-icon" />
                            </span>
                            <span>
                                <img src="/mongodb-icon.svg" alt="css-icon" />
                            </span>
                            <span>
                                <img src="/hbs-icon.svg" alt="css-icon" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="project" data-aos="fade">
                    <img src="/PetPortal.png" className="project-img"/>
                    <div className="project-description">
                        <div>PET PORTAL</div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum beatae corrupti facere eum aliquid dolorem veritatis, alias, consequuntur nam, possimus animi! Consequatur, ducimus blanditiis dolorem labore amet quam perspiciatis, nisi fugit tenetur voluptate rerum dicta, ab est numquam? Velit, voluptates!</p>
                        <div className="description-icons">
                            <Link href="https://pet-portal-web.herokuapp.com">
                                <a target="_blank">
                                    <img src="/rocket.svg" alt="rocket" />
                                </a>
                            </Link>
                            <Link href="https://github.com/Pet-Portal/PetPortal">
                                <a  target="_blank">
                                    <img src="/github.svg" alt="github-icon" />
                                </a>
                            </Link>
                        </div>
                        <div className="tech-icons">
                            <span>
                                <img src="/js-icon.svg" alt="css-icon" />
                            </span>
                            <span>
                                <img src="/express-icon.svg" alt="javascript-icon" />
                            </span>
                            <span>
                                <img src="/react-icon.svg" alt="express-icon" />
                            </span>
                            <span>
                                <img src="/node-icon.svg" alt="html-icon" />
                            </span>
                            <span>
                                <img src="/mongodb-icon.svg" alt="css-icon" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="project" data-aos="fade">
                    <img src="/ThePhoneCave.png" className="project-img"/>
                    <div className="project-description">
                        <div>THE PHONE CAVE</div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum enim perspiciatis facere at, consequatur expedita atque reprehenderit velit delectus, vitae quae? Possimus assumenda, eligendi error voluptatem aperiam exercitationem ratione nihil?</p>
                        <div className="description-icons">
                            <Link href="https://thephonecave-ih.herokuapp.com">
                                <a target="_blank">
                                    <img src="/rocket.svg" alt="rocket" />
                                </a>
                            </Link>
                            <Link href="https://github.com/aguiluxo91/reto_web">
                                <a  target="_blank">
                                    <img src="/github.svg" alt="github-icon" />
                                </a>
                            </Link>
                        </div>
                        <div className="tech-icons">
                            <span>
                                <img src="/js-icon.svg" alt="css-icon" />
                            </span>
                            <span>
                                <img src="/express-icon.svg" alt="javascript-icon" />
                            </span>
                            <span>
                                <img src="/react-icon.svg" alt="express-icon" />
                            </span>
                            <span>
                                <img src="/node-icon.svg" alt="html-icon" />
                            </span>
                            <span>
                                <img src="/mongodb-icon.svg" alt="css-icon" />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Work;