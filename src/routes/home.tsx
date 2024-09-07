import About from "../components/About";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";

import Projects from "../components/Projects";
import useMarkdown from "../hooks/useMarkdown";

export default function Home() {
  const { blogs, projects } = useMarkdown();
  return (
    <div className="m-auto w-[95%] sm:max-w-[1024px] py-8 px-4">
      <About />
      <Projects projects={projects} />
      <Blogs blogs={blogs} />
      <Contact />
    </div>
  );
}
