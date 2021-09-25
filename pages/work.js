import Image from "next/image";

const Work = () => {
    return (
        <div className="work">
            <h1>This is some of my Work</h1>
            <section className="projects">
                <div className="project p-0 m-2">
                    <img src="/SuperPang.png"/>
                    <div className="bg-black p-1">
                        <p className="text-white m-0">Super Pang</p>
                    </div>
                </div>
                <div className="project p-0-0 m-2">
                    <img src="/JustGame.png"/>
                    <div className="bg-black p-1">
                        <p className="text-white m-0">Just Game</p>
                    </div>
                </div>
                <div className="project p-0 m-2">
                    <img src="/PetPortal.png"/>
                    <div className="bg-black p-1">
                        <p className="text-white m-0">Pet Portal</p>
                    </div>
                </div>
                <div className="project p-0 m-2">
                    <img src="/ThePhoneCave.png"/>
                    <div className="bg-black p-1">
                        <p className="text-white m-0">The Phone Cave</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Work;