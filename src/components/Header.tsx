import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        padding: "18px 24px",
        borderBottom: "1px solid #333",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h2 style={{ margin: 0 }}>Where in the world?</h2>

      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 14px",
          borderRadius: 6,
          border: "1px solid #333",
          background: "transparent",
          color: "inherit",
          cursor: "pointer",
        }}
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

