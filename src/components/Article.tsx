export default function Article({ html }: { html: string }) {
  return (
    <div
      style={{
        margin: "2rem auto",
        width: "95%",
        maxWidth: "1024px",
        padding: "2rem 1rem",
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
