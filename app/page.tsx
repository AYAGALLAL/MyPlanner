import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
 
export default function Home() {
  return (
    <div>
      <Header />
        <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

