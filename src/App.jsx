import { Envelope, Github, LinkedIn } from "./components/icons";
import Link from "./components/Link";
import Logo from "./components/Logo";

import headshot from "./assets/headshot.jpg";

export default function App() {
  return (
    <main className="w-full bg-bg font-sans text-text">
      <section className="w-full max-w-7xl flex flex-col mx-auto px-8 sm:px-16 xl:px-32 py-8 sm:py-16 xl:py-32 justify-center">
        <Logo className="w-16 sm:w-32 stroke-text stroke-[10px] mb-32 animate-draw-line fill-mode-forwards repeat-1" />
        <h1 className="font-black leading-none [font-size:_clamp(2rem,9vw,6rem)] animate-fade-in-up">
          Andrew Brice
          <br />
          <span className="text-text-alt">
            Software Engineer
            <br />& Mentor
          </span>
        </h1>
      </section>
      <article className="w-full max-w-7xl mx-auto px-8 sm:px-16 xl:px-32 py-32 animate-fade-in-up">
        <h2 className="font-bold text-label text-xl lg:text-3xl mb-4">About</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <p className="max-w-md lg:max-w-[50%] text-text-alt text-xl lg:text-3xl">
            Hi, I'm Andrew - a UI focused software engineer with ten years of
            experience writing code for the web. I leverage my background in
            design to craft clean, user-friendly applications.
          </p>
          <p className="max-w-md lg:max-w-[50%] text-text-alt text-xl lg:text-3xl">
            I currently live in Indianapolis with my wife, son, and our two
            dogs. As a midwest transplant, my New Jersey accent has diminished,
            but my high pizza standards remain resolute.
          </p>
        </div>
      </article>
      <footer className="w-full max-w-7xl mx-auto px-8 sm:px-16 xl:px-32 py-32 animate-fade-in-up">
        <div className="w-full flex items-start justify-between flex-col-reverse lg:flex-row gap-8">
          <div className="flex flex-col flex-1">
            <h2 className="font-bold text-label text-xl lg:text-3xl mb-4">
              Contact
            </h2>
            <p className="max-w-md lg:max-w-[80%] text-text-alt text-xl lg:text-3xl mb-4">
              Whether you'd like to discuss an opportunity or simply talk shop,
              I'd love to connect!
            </p>
            <div className="flex flex-col gap-2 text-base lg:text-xl">
              <Link href="mailto:bricea27@gmail.com">
                <Envelope />
                bricea27@gmail.com
              </Link>
              <Link href="https://github.com/bricea27">
                <Github />
                <span>Github</span>
              </Link>
              <Link href="https://www.linkedin.com/in/briceandrew/">
                <LinkedIn />
                LinkedIn
              </Link>
            </div>
          </div>
          <div className="flex flex-1">
            <img className="w-1/2 max-w-xs rounded-xl" src={headshot} />
          </div>
        </div>
      </footer>
    </main>
  );
}
