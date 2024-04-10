import Home from "./Home";
import Navbar from "./Navbar";
import SingleCard from "./SingleCard";
import { ThemeProvider } from "./components/ui/themeProvider";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <main className="max-w-6xl mx-auto">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<SingleCard />} />
        </Routes>
      </ThemeProvider>
    </main>
  );
}
