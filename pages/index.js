import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])

  return (
    <div className="welcome" data-aos="flip-left">
      <div className="alex">
        <Image src="/alex.png" width="280" height="300" alt="alex"/>
      </div>
      <h1>Alejandro Puerta</h1>
      <h2>Front-end Developer</h2>
      <p>Welcome to my Portfolio</p>
    </div>
  );
}
