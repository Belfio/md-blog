import { BlogType } from "../types";
import ArticleLink from "./ArticleLink";

export default function Blogs({ blogs }: { blogs: BlogType[] }) {
  return (
    <div id="blog" style={{ margin: "2rem 0" }}>
      <h1>Blog</h1>
      {blogs.map((blog) => (
        <ArticleLink
          key={blog.id}
          title={blog.title}
          description={blog.description}
          id={blog.id}
          folder="blog"
        />
      ))}
    </div>
  );
}
