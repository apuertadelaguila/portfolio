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
                    <img src="/ThePhoneCave.png" className="project-img"/>
                    <div className="project-description">
                        <div>THE PHONE CAVE</div>
                        <p>Web App for buying smartphones or rating them. Deployed a fully MERN responsive web application from scratch, implementing shopping cart with localstorage, being able to log in with social login and deployed on Heroku in a Docker container.</p>
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
                <div className="project" data-aos="fade">
                    <img src="/PetPortal.png" className="project-img"/>
                    <div className="project-description">
                        <div>PET PORTAL</div>
                        <p>Final bootcamp project. MERN App designed to facilitate the search for care for our pets or to be the caregivers. Added several implementations such as social login or Google Maps and Autocomplete Api and deployed on Heroku in a Docker container. Pair programmed remotely.</p>
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
                    <img src="/JustGame.png" className="project-img"/>
                    <div className="project-description">
                        <div>JUST GAME</div>
                        <p>Second Ironhack project. Web App for video games purchasing and selling. Deployed a fully responsive web application from scratch by using Node JS, Express, MongoDB & Handlebars. Implemented GoogleMaps API for geocoding and Autocomplete, social login with Google and Steam. Pair programmed remotely.</p>
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
                    <img src="/super-pang-arcade.png" className="project-img"/>
                    <div className="project-description">
                        <div>SUPER PANG</div>
                        <p>This is the first project during my Ironhack Web Development Bootcamp! I programed an arcade game Pang style in which I mastered the object oriented programming (OOP) in a JavaScript environment.</p>
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
            </section>
        </div>
    );
}

export default Work;