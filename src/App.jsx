import "./App.css";
import WidthContainer from "./components/WidthContainer";
import SectionHeader from "./components/SectionHeader";
import Section from "./components/Section";
import Break from "./components/Break";

import ProfileImg from "./assets/pic-01.jpg"

// BF - bg-stone-50

function App() {
  return (
    <div className="bg-stone-50 font-inter">
      <header className="bg-amber-500 text-stone-50">
        <WidthContainer>
          <div className="flex justify-between py-4">
            <p>Jo Webb</p>
            <ul className="flex gap-2">
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </WidthContainer>
      </header>
      <Section>
        <div><img src={ProfileImg} alt=""/></div>
        <div>
          <h1 className="text-xl my-2">
            Hey there! I'm Jo - a full-stack developer based in the south of
            England.
          </h1>
          <p className="my-2">
            I enjoy building robust and feature-rich web applications that are
            both functional and intuitive to use.
          </p>
          <p className="my-2">
            I began my web dev journey in late 2024 through the Odin Project,
            after becoming interested in building my own apps. I quickly became
            hooked - watching an idea develop into a real, working product is
            incredibly rewarding.
          </p>
          <p className="my-2">
            Outside of coding, I'm into working out, cooking, spending time with
            friends, or pursuing my latest passion project!
          </p>
        </div>
      </Section>
      <Break />
      <Section>
        <SectionHeader>Tech Stacks</SectionHeader>
        <div>
          <div>Frontend</div>
          <ul>
            <li>React</li>
            <li>HTML5, CSS3, JS (ES6+)</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div>
          <div>Backend</div>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </Section>
      <Break />
      <Section>
        <SectionHeader>Featured Projects</SectionHeader>
        <div>
          <div>
            <div>Image</div>
            <h3>Heroic Tales App</h3>
            <p>An RPG-suite I built to streamline at-table play.</p>
            <a href="#">Github</a>
            <a href="#">Live Project</a>
          </div>
        </div>
      </Section>
      <Break />
      <Section>
        <SectionHeader>Contact</SectionHeader>
        <div>
          <p>You can find me on my socials...</p>
          <ul>
            <li>Github</li>
            <li>Linkedin</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <p>...Or feel free to message me through this form!</p>
          <div>FORM</div>
        </div>
      </Section>
    </div>
  );
}

export default App;
