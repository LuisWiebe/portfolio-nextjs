import Link from "next/link";
import styles from "../page.module.css";

export default function Contact() {
  return (
    <>
      <header className={styles.nav}>
        <nav aria-label="Main navigation">
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.aboutSection}>
        <section className={styles.hero}>
          <article className={styles.heroText}>
            <h1>Get In Touch</h1>
            <p>
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out!
            </p>

            <h2>Contact Information</h2>
            <div className={styles.contactInfo}>
              <ul>
                <li>Email: example@email.com</li>
                <li>LinkedIn: linkedin.com/in/luis-wiebe</li>
                <li>Instagram: @sketchypadd</li>
                <li>Phone: (208) 666-6666</li>
              </ul>
            </div>
          </article>

          <aside className={styles.heroPanel}>
            <div className={styles.imageContainer}></div>
          </aside>
        </section>
      </main>
    </>
  );
}