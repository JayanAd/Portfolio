import PageEffects from "./components/PageEffects";
import Divider from "./components/Divider";

import Nav, { SocialSidebar, EmailSidebar } from "./components/Nav";
import Hero from "./components/Hero";

import { About, Experience, Projects } from "./components/Sections1";

import {
  Skills,
  Research,
  Education,
  Awards,
  // Writing,
  Contact,
} from "./components/Sections2";

import "./index.css";

function App() {
  return (
    <>
      <PageEffects />

      <Nav />
      <SocialSidebar />
      <EmailSidebar />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Education />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Research />
        <Divider />
        <Awards />
        {/* <Divider />
        <Writing /> */}
        <Divider />
        <Contact />

        {console.log("COMPONENT TYPES", {
  Nav: typeof Nav,
  SocialSidebar: typeof SocialSidebar,
  EmailSidebar: typeof EmailSidebar,
  Hero: typeof Hero,
  About: typeof About,
  Experience: typeof Experience,
  Education: typeof Education,
  Projects: typeof Projects,
  Skills: typeof Skills,
  Research: typeof Research,
  Awards: typeof Awards,
  Contact: typeof Contact,
})}
      </main>
    </>
  );
}

export default App;