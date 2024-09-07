import { useState, useEffect } from "preact/hooks";
import Article from "../components/Article";

import useMarkdown from "../hooks/useMarkdown";
import { useLocation } from "preact-iso";
import { ProjectType } from "../types";

export default function Projects() {
  const [project, setProject] = useState<ProjectType | undefined>(undefined);
  const { url } = useLocation();
  const id = url.split("/").pop();
  console.log(id);
  const { getProject } = useMarkdown();
  useEffect(() => {
    const project = getProject(id || "");
    setProject(project);
  }, [id, getProject]);
  return <div className="">{project && <Article html={project?.html} />}</div>;
}
