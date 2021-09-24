import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Home() {

  useEffect(() => {
    AOS.init({
        duration: 1000
    })
}, [])

  return (
    <div className="welcome" data-aos="slide-left">
      <Image src="/Alex.png" width="180" height="200"/>
      <h1>Alejandro Puerta</h1>
      <h2>Front-end Developer</h2>
      <p>Welcome to my Portfolio</p>
    </div>
  );
}
