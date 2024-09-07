export default function Header({ className }: { className?: string }) {
  return (
    <header>
      <nav
        style={{
          width: "95%",
          maxWidth: "1024px",
          padding: "1rem",
        }}
        className={className}
      >
        <ul
          style={{
            display: "flex",
            gap: "1rem",
            listStyle: "none",
          }}
        >
          <li>
            <a
              href="/#home"
              rel="noreferrer"
              style={{
                color: "#1f2937",
                textDecoration: "none",
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/#projects"
              rel="noreferrer"
              style={{
                color: "#1f2937",
                textDecoration: "none",
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/#blog"
              rel="noreferrer"
              style={{
                color: "#1f2937",
                textDecoration: "none",
              }}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              rel="noreferrer"
              style={{
                color: "#1f2937",
                textDecoration: "none",
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
