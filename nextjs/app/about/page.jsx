import Link from "next/link";
import styles from "../page.module.css";

export default function About() {
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
            <h1>Nice to Meet You!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
            </p>

            <h2>Primary Workspaces</h2>
            <div className={styles.workspaceGrid}>
              <div className={styles.workspaceItem}>Ps</div>
              <div className={styles.workspaceItem}>Ai</div>
              <div className={styles.workspaceItem}>Lr</div>
              <div className={styles.workspaceItem}>Clip Studio Paint</div>
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