import { h } from "preact";
import HeroImage from "../assets/hero.jpg";
import { useTheme } from "../core/theme";
import AppHeader from "./AppHeader";

export function Hero() {
  const theme = useTheme((t) => t.value);
  return (
    <div id="home" className="w-full overflow-hidden relative ">
      <img
        src={HeroImage}
        style={{
          height: "70vh",
          objectFit: "cover",
          verticalAlign: "middle",
          filter: "blur(9px)",
          transform: "scale(1.1)",
        }}
        className="w-full"
        alt="source code"
        srcSet=""
      />
      <AppHeader />
      <div
        className="absolute text-white inset-0 center text-5xl md:text-6xl p-12"
        style={{
          zIndex: 3,
          backgroundColor: theme === "dark" ? "rgba(0,0,0,0.5)" : "rgba(0,0,0, 0.1)",
        }}
      >
        <h1
          className="border-4 p-4 lg:p-8"
          style={{
            borderRadius: "0.75rem",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          Aleksandar Stanišić
        </h1>
      </div>
    </div>
  );
}
