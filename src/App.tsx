import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import "./App.css";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
