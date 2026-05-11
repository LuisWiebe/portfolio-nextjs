import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { projects } from "@/app/data/projects";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <main>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <Image src={project.image} alt={project.title} width={600} height={400} />
      <Link href="/projects">Back to Projects</Link>
    </main>
  );
}