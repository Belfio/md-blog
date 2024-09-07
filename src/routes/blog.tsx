import { useLocation } from "preact-iso";
import { useState, useEffect } from "preact/hooks";
import Article from "../components/Article";

import useMarkdown from "../hooks/useMarkdown";
import { BlogType } from "../types";

export default function BlogPage() {
  const { url } = useLocation();
  const id = url.split("/").pop();
  const [blog, setBlog] = useState<BlogType | undefined>(undefined);
  const { getBlog } = useMarkdown();

  useEffect(() => {
    const blog = getBlog(id || "");

    setBlog(blog);
  }, [id, getBlog]);

  return <div className="">{blog && <Article html={blog?.html} />}</div>;
}
