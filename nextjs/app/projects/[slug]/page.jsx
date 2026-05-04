import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import {projects} from "@/app/data/projects";
// import Navigation from "@/components/header/Navigation";
// import Footer from "@/components/footer/Footer";
import LinkSWS from "@/assets/Link-SWS.webp";
import DemoReel from "@/assets/demo-reel.jpg";
import VampGirls from "@/assets/vampgirls.jpg";
import HowlPhoto from "@/assets/Howl-Photo.jpg";
import Landscape from "@/assets/GDES131_IllustrativeSet_FA25_Landscape_LWiebe.png";
import Collab from "@/assets/collab.jpg";
import Sunlight from "@/assets/Sunlight.jpg";


export default function ProjectPage ({ params }) {
  const project = projects.find((project) => project.slug === params.slug);
  if (!project) {
    return <h1>Project not found</h1>
  }
  return (
    <main>
        <h1>{project.title}</h1>
        <p> {project.description}</p>
    </main>
  )
}
