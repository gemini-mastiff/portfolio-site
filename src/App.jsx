import "./App.css";

function App() {
  return (
    <>
      <header>
        <p>Jo Webb</p>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </header>
      <section>
        <div>Image</div>
        <div>
          <h1>
            Hey there! I'm Jo - a full-stack developer based in the south of
            England.
          </h1>
          <p>
            I enjoy building robust and feature-rich web applications that are
            both functional and intuitive to use.
          </p>
          <p>
            I began my web dev journey in late 2024 through the Odin Project,
            after becoming interested in building my own apps. I quickly became
            hooked - watching an idea develop into a real, working product is
            incredibly rewarding.
          </p>
          <p>
            Outside of coding, I'm into working out, cooking, spending time with
            friends, and pursuing my latest passion project!
          </p>
        </div>
      </section>
      <section>
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
      </section>
      <section>
        <h2>Featured Projects</h2>
        <div>
          <div>
            <div>Image</div>
            <h3>Heroic Tales App</h3>
            <p>An RPG-suite I built to streamline at-table play.</p>
            <a href="#">Github</a>
            <a href="#">Live Project</a>
          </div>
        </div>
      </section>
      <section>
        <h2>Contact</h2>
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
      </section>
    </>
  );
}

export default App;
