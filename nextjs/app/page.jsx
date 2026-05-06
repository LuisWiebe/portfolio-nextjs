import Image from "next/image";
import styles from "./page.module.css";
import styles from "../page.module.css";
import Link from "next/link";
import projects from "@/app/data/projects";
// import Navigation from "@/components/header/Navigation";
// import Footer from "@/components/footer/Footer";
import LinkSWS from "@/assets/Link-SWS.webp";
import DemoReel from "@/assets/demo-reel.jpg";
import VampGirls from "@/assets/vampgirls.jpg";
import HowlPhoto from "@/assets/Howl-Photo.jpg";
import Landscape from "@/assets/GDES131_IllustrativeSet_FA25_Landscape_LWiebe.png";
import Collab from "@/assets/collab.jpg";
import Sunlight from "@/assets/Sunlight.jpg";


export default async function Home() {
  return (
    <>
     <header className={styles.nav}>
        {/* <Navigation /> */}
    <nav role="navigation" aria-label="Main Nav">
        <ul>
            <li><a href="index.html" aria-current="page">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <button id="hamburger">
            <div className={styles.hamburger}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div> 
        </button>
        {/* <Footer /> */}
    </nav>
</header>

{/* <!--HERO-- > */}
    <section className={styles.hero}>
        <a href="About-me">
            <Image
            className={styles.profileImage}
            src={LinkSWS.src}
            alt="Luis Wiebe profile image stand in"
            width={500}
            height={500}
            />
        </a>
    <div className={styles.heroText}>
        <h1>Luis Wiebe</h1>
            <p>
                Adobe Illustrator, Photoshop, Lightroom, 
                Clip Studio Paint, Procreate, Premiere Pro
            </p>
        </div>
    </section>

    {/* <!--WORK GRID-- > */}
    <section className={styles.work}>
        <div className={styles.workGrid}>

            <a href="Demo-Reels" className={styles.cardContainer}>
                <Image
                className={styles.cardImage}
                src={DemoReel.src}
                alt="Demo reel image"
                width={500}
                height={500}
                />
                <div className={styles.typography}>Demo Reels</div>
            </a>

            <a href="Concept-Art" className={styles.cardContainer}>
                <Image
                className={styles.cardImage}
                src={VampGirls.src}
                alt="Vampgirl concept art"
                width={500}
                height={500}
                />
                <div className={styles.typography}>Concept Art</div>
            </a>


            <a href="Edited-Photos" className={styles.cardContainer}>
                <Image
                className={styles.cardImage}
                src={HowlPhoto.src}
                alt="Howl's Moving Castle photo"
                width={500}
                height={500}
                />
                <div className={styles.typography}>Edited Photos</div>
            </a>

            <a href="Vector-Graphics" className={styles.cardContainer}>
                <Image
                className={styles.cardImage}
                src={Landscape.src}
                alt="Landscape illustration"
                width={500}
                height={500}
                />
                <div className={styles.typography}>Vector Graphics</div>
            </a>


            <a href="Collaborative-Work" className={styles.cardContainer}>
                <Image
                className={styles.cardImage}
                src={Collab.src}
                alt="Collaborative work image"
                width={500}
                height={500}
                />
                <div className={styles.typography}>Collaborative Work</div>
            </a>

            <a href="Fanart" className={styles.cardContainer}>
                <Image
                className={styles.cardImage}
                src={Sunlight.src}
                alt="Sunlight fanart"
                width={500}
                height={500}
                />
                <div className={styles.typography}>Fanart</div>
            </a>
        </div>
    </section>

{/* <!--ABOUT--> */}
<section className={styles.aboutSection}>
    <h2>ABOUT ME</h2>
    <p className={styles.subtitles}>
        2D Character Artist, Caffiene Junky, Video-Game Enthusiast
    </p>
    <p className={styles.aboutText}>
        My name is Luis Wiebe. I'm a lover of video games, character design, photography, fan-made content, and more.
        I work primarily in Clip Studio Paint, Illustrator, Photoshop, and Lightroom.
    </p>
</section>

{/* <!--CONTACT--> */}
    <section className={styles.contactSection}>
      <div className={styles.contactCard}>
        <div className={styles.skills}>
          <div className={styles.skillsProficient}>
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
          <div className={styles.skillsNovice}>
            <h4>Novice</h4>
            <ul>
              <li>After Effects</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <ul>
            <li>example@gamil.com</li>
            <li>@sketchypadd</li>
            <li>(208)666-7777</li>
            <li>in/luis-wiebe</li>
          </ul>
        </div>
      </div>
      <div className={styles.contactIllustration}></div>
    </section>
    </>
  );
}
