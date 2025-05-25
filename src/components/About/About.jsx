import "./About.scss";
import profileImage from "../../images/profile.jpg";

const About = () => {
    return (
        <>
            <section className="about container py-5">
                <div className="row align-items-start">
                    <div className="about__left col-12 col-md-6 mt-3 text-md-start">
                        <h1>
                            Hello, I'm <br /> Ismat Seyidzade
                        </h1>
                        <p>
                            I'm a Freelance Frontend Developer based in Ganja,
                            Azerbaijan. I strives to build immersive and
                            beatiful web site through carefully crafred code and
                            user-centric design.
                        </p>
                        <div className="btn-wrapper">
                            <a href="#" className="btn say-btn mb-4">
                                Say Hello!
                            </a>
                        </div>
                        <div className="exp__side d-flex mt-5">
                            <div className="col-12 col-md-4 mb-4 mb-md-0 text-center">
                                <h2 className="fw-bold">1 Y.</h2>
                                <p className="text-muted">Experience</p>
                            </div>
                            <div className="col-6 col-md-4 mb-4 mb-md-0 text-center">
                                <h2 className="fw-bold">250+</h2>
                                <p className="text-muted">Project Completed</p>
                            </div>
                            <div className="col-6 col-md-4 mb-4 mb-md-0 text-center">
                                <h2 className="fw-bold">58</h2>
                                <p className="text-muted">Happy Client</p>
                            </div>
                        </div>
                    </div>
                    <div className="about__right col-12 col-md-6 text-center">
                        <img src={profileImage} alt="img avatar" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
