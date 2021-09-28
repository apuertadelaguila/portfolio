import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

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
                    <img src="/super-pang-arcade.png" />
                    <div>
                        <p>Super Pang</p>
                    </div>
                </div>
                <div className="project" data-aos="fade">
                    <img src="/JustGame.png" />
                    <div>
                        <p>Just Game</p>
                    </div>
                </div>
                <div className="project" data-aos="fade">
                    <img src="/PetPortal.png" />
                    <div>
                        <p>Pet Portal</p>
                    </div>
                </div>
                <div className="project" data-aos="fade">
                    <img src="/ThePhoneCave.png" />
                    <div>
                        <p>The Phone Cave</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Work;