import { ProjectType } from "../types";
import ArticleLink from "./ArticleLink";

export default function Projects({ projects }: { projects: ProjectType[] }) {
  return (
    <div id="projects" style={{ margin: "2rem 0" }}>
      <h1>Projects</h1>
      {projects.map((project) => (
        <ArticleLink
          key={project.id}
          title={project.name}
          description={project.description}
          id={project.id}
          folder="project"
        />
      ))}
    </div>
  );
}
