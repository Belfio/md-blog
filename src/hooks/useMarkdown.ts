import { parse } from "marked";

import { BlogType, ProjectType } from "../types";
import { useState, useEffect } from "preact/hooks";

type Module = {
  default: string;
};

export default function useMarkdown(): {
  blogs: BlogType[];
  projects: ProjectType[];
  getProject: (id: string) => ProjectType | undefined;
  getBlog: (id: string) => BlogType | undefined;
} {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setBlogs(await getBlogs());
      setProjects(await getProjects());
    };
    fetchData();
  }, []);

  function getProject(id: string): ProjectType | undefined {
    const project = projects.find((project) => project.id === id);
    return project;
  }
  function getBlog(id: string): BlogType | undefined {
    const blog = blogs.find((blog) => blog.id === id);
    return blog;
  }
  return {
    blogs,
    projects,
    getProject: (id) => getProject(id),
    getBlog: (id) => getBlog(id),
  };
}

async function getBlogs(): Promise<BlogType[]> {
  const modules = import.meta.glob<Module>("../markdown/blogs/*.md", {
    eager: true,
  });
  const fileNames: string[] = Object.values(modules).map(
    (module) => module.default
  );

  const files = await parseFiles(fileNames); // Await the promise here

  const blogs = await Promise.all(
    files.map(async (file, i) => {
      const { html, name, description } = await parseMarkdown(file);
      return {
        title: name,
        description,
        id: fileNames[i].split(".md")[0].split("/").pop() || "error",
        html,
      };
    })
  );

  return blogs;
}

async function getProjects(): Promise<ProjectType[]> {
  const modules = import.meta.glob<Module>("../markdown/projects/*.md", {
    eager: true,
  });
  const fileNames: string[] = Object.values(modules).map(
    (module) => module.default
  );

  const files = await parseFiles(fileNames); // Await the promise here
  const projects = await Promise.all(
    files.map(async (file, i) => {
      const { html, name, description } = await parseMarkdown(file);
      return {
        name: name,
        description,
        id: fileNames[i].split(".md")[0].split("/").pop() || "error",
        html,
      };
    })
  );

  return projects;
}

async function parseFiles(fileNames: string[]): Promise<string[]> {
  const files = await Promise.all(
    fileNames.map(async (file: string) => {
      return fetch(file)
        .then((res) => res.text())
        .catch((err) => {
          console.log("err", err);
          return "";
        });
    })
  );

  return files;
}

async function parseMarkdown(content: string): Promise<{
  html: string;
  name: string;
  description: string;
}> {
  try {
    const html = await parse(content);
    const name = content.split("# ")[1].split("\n")[0];
    const description = content.split("# ")[2].split("\n")[0];
    return { html, name, description };
  } catch {
    return { html: "", name: "", description: "" };
  }
}
