import { JSX } from "preact";

export default function ArticleLink({
  title,
  description,
  id,
  folder,
}: {
  title: string;
  description: string;
  id: string;
  folder: "blog" | "project";
}): JSX.Element {
  return (
    <div style={{ margin: "1rem 0" }} key={id}>
      <a
        href={`/${folder}/${id}`}
        style={{
          margin: "1rem 0",
          color: "#1f2937",
          textDecoration: "none",
        }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}
