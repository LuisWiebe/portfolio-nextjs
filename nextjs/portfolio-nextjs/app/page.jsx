import Image from "next/image";
import styles from "./page.module.css";



export default async function Home() {
  return (
    <>
     <header className="nav">
    <nav role="navigation" aria-label="Main Nav">
        <ul>
            <li><a href="index.html" aria-current="page">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <button id="hamburger">
            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div> 
        </button>
        
    </nav>
</header>

{/* <!--HERO-- > */}
    <section className="hero">
        <a href="About-me">
            <Image
            
            className={"profile-image"}
            src={"Link-SWS.webp"}
            alt="Luis Wiebe profile image stand in"
            width={500}
            height={500}
            />
        </a>
    <div className="hero-text">
        <h1>Luis Wiebe</h1>
            <p>
                Adobe Illustrator, Photoshop, Lightroom, 
                Clip Studio Paint, Procreate, Premiere Pro
            </p>
        </div>
    </section>

    {/* <!--WORK GRID-- > */}
    <section className="work">
        <div className="work-grid">

            <a href="Demo-Reels" className="card-container">
                <Image
                className={"card-image"}
                src={"demo-reel.jpg"}
                alt="Demo reel image"
                width={500}
                height={500}
                />
                <div className="typography">Demo Reels</div>
            </a>

            <a href="Concept-Art" className="card-container">
                <Image
                className={"card-image"}
                src={"vampgirls.jpg"}
                alt="Vampgirl concept art"
                width={500}
                height={500}
                />
                <div className="typography">Concept Art</div>
            </a>


            <a href="Edited-Photos" className  ="card-container">
                <Image
                className={"card-image"}
                src={"Howl-Photo.jpg"}
                alt="Howl's Moving Castle photo"
                width={500}
                height={500}
                />
                <div className="typography">Edited Photos</div>
            </a>

            <a href="Vector-Graphics" className="card-container">
                <Image
                className={"card-image"}
                src={"GDES131_IllustrativeSet_FA25_Landscape_LWiebe.png"}
                alt="Landscape illustration"
                width={500}
                height={500}
                />
                <div className="typography">Vector Graphics</div>
            </a>


            <a href="Collaborative-Work" className="card-container">
                <Image
                className={"card-image"}
                src={"collab.jpg"}
                alt="Collaborative work image"
                width={500}
                height={500}
                />
                <div className="typography">Collaborative Work</div>
            </a>

            <a href="Fanart" className="card-container">
                <Image
                className={"card-image"}
                src={"Sunlight.jpg"}
                alt="Sunlight fanart"
                width={500}
                height={500}
                />
                <div className="typography">Fanart</div>
            </a>
        </div>
    </section>

{/* <!--ABOUT--> */}
<section className="about section">
    <h2>ABOUT ME</h2>
    <p className="subtitles">
        2D Character Artist, Caffiene Junky, Video-Game Enthusiast
    </p>
    <p className="about-text">
        My name is Luis Wiebe. I'm a lover of video games, character design, photography, fan-made content, and more.
        I work primarily in Clip Studio Paint, Illustrator, Photoshop, and Lightroom.
    </p>
</section>

{/* <!--CONTACT--> */}
    <section className="contact section">
      <div className="contact-card">
        <div className="skills">
          <div className="skills-proficient">
            <h4>Proficient</h4>
            <ul>
              <li>Clip Studio</li>
              <li>Procreate</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Lightroom</li>
              <li>Premiere Pro</li>
            </ul>
          </div>
          <div className="skills-novice">
            <h4>Novice</h4>
            <ul>
              <li>After Effects</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
        <div className="contact-info">
          <ul>
            <li>example@gamil.com</li>
            <li>@sketchypadd</li>
            <li>(208)666-6666</li>
            <li>in/luis-wiebe</li>
          </ul>
        </div>
      </div>
      <div className="contact-illustration"></div>
    </section>
    </>
  );
}
