import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Image from 'next/image';
const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, [])

    return (
        <>
        <div className="about" data-aos="fade-down">
            <h1>Who I am</h1>
            <p><b>Junior Front-end Developer!</b></p>
            <p>My name is Alejandro Puerta and after 8 years working as nurse in Germany I decided to go back to my childhood and continue my passion for computers and technology.</p>
            <p>One day I took a step forward and had no doubts that I wanted to study and turn one of my great hobbies into my professional career. This is why I made the decision to take part of the Ironhack Web Development Bootcamp and thus acquire the skills of a Full-Stack developer.</p>
            <p>In the mentioned Bootcamp, I learned how to develop web applications using Node.js React.js, Express.js, HTML, CSS, Docker, MongoDB as main technologies. And today I am able to develop nice and complex React apps thanks to the effort invested.</p>
            <p>After the Bootcamp I have been continuously doing small projects, learning new technologies and improving my JavaScript programming skills and thus be closer to achieving my goal of working as a Front-end developer.</p>
            <p>I am a person who knows and likes to work in a team, but who also knows how to enjoy working alone and it satisfies and motivates me to meet goals as well as to evolve professionally.</p>
            <p>Regarding my hobbies, I like to play instruments, play sports, play video games and of course learn more about programming which has become one of my main hobbies.</p>
        </div>
        <div className="alexpc">
            <Image src="/alex-pc.png" alt="alex-pc" width="240" height="200"/>
        </div>
        </>
    );
}

export default About;