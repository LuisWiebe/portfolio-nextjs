import Image from "next/image";
import styles from "./page.module.css";



export default async function Home() {
  return (
    <>
     <header class="nav">
    <nav role="navigation" aria-label="Main Nav">
        <ul>
            <li><a href="index.html" aria-current="page">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <button id="hamburger">
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div> 
        </button>
        
    </nav>
</header>

{/* <!--HERO-- > */}
    <section class="hero">
        <a href="About-me">
        <div class="image-container">
             <img src="Link-SWS.webp" alt="Luis Wiebe profile image" loading="lazy" width="500" height="500" />  
        </div>
        </a>
    <div class="hero-text">
        <h1>Luis Wiebe</h1>
            <p>
                Adobe Illustrator, Photoshop, Lightroom, 
                Clip Studio Paint, Procreate, Premiere Pro
            </p>
        </div>
    </section>

    {/* <!--WORK GRID-- > */}
    <section class="work">
        <div class="work-grid">

            <a href="Demo-Reels" class="card-container">
                <img src="demo-reel.jpg" />
                <div class="typography">Demo Reels</div>
            </a>

            <a href="Concept-Art" class="card-container">
                <img src="vampgirls.jpg" />
                <div class="typography">Concept Art</div>
            </a>


            <a href="Edited-Photos" class="card-container">
                <img src="Howl-Photo.jpg" />
                <div class="typography">Edited Photos</div>
            </a>

            <a href="Vector-Graphics" class="card-container">
                <img src="GDES131_IllustrativeSet_FA25_Landscape_LWiebe.png" />
                <div class="typography">Vector Graphics</div>
            </a>


            <a href="Collaborative-Work" class="card-container">
                <img src="collab.jpg" />
                <div class="typography">Collaborative Work</div>
            </a>

            <a href="Fanart" class="card-container">
                <img src="Sunlight.jpg" />
                <div class="typography">Fanart</div>
            </a>
        </div>
    </section>

{/* <!--ABOUT--> */}
<section class="about section">
    <h2>ABOUT ME</h2>
    <p class="subtitles">
        2D Character Artist, Caffiene Junky, Video-Game Enthusiast
    </p>
    <p class="about-text">
        My name is Luis Wiebe. I'm a lover of video games, character design, photography, fan-made content, and more.
        I work primarily in Clip Studio Paint, Illustrator, Photoshop, and Lightroom.
    </p>
</section>

{/* <!--CONTACT--> */}
    <section class="contact section">
      <div class="contact-card">
        <div class="skills">
          <div class="skills-proficient">
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
          <div class="skills-novice">
            <h4>Novice</h4>
            <ul>
              <li>After Effects</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
        <div class="contact-info">
          <ul>
            <li>example@gamil.com</li>
            <li>@sketchypadd</li>
            <li>(208)666-6666</li>
            <li>in/luis-wiebe</li>
          </ul>
        </div>
      </div>
      <div class="contact-illustration"></div>
    </section>
    </>
  );
}
