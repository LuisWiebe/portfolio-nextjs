import Image from "next/image";
import styles from "./page.module.css";



export default async function About() {}
  return (
        
        <head >
            <body>
                <header className="site-header">
                    <nav className="main-nav" aria-label="Main navigation">
                        <a className="nav-link" href="index.html">Home</a>
                        <a className="nav-link active" href="about.html">About</a>
                        <a className="nav-link" href="contact.html">Contact</a>
                    </nav>
                </header>

                <main className="page-wrap">
                    <section className="hero">
                        <article className="hero-text">
                            <h1>Nice to Meet You!</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                            </p>

                            <h2>Primary Workspaces</h2>
                            <div className="workspace-grid">
                                <div className="workspace-item">Ps</div>
                                <div className="workspace-item">Ai</div>
                                <div className="workspace-item">Lr</div>
                                <div className="workspace-item">Clip Studio Paint</div>
                            </div>
                        </article>

                        <aside className="hero-panel">
                            <div className="image-container"></div>
                        </aside>
                    </section>
                </main>
            </body>
</head>);