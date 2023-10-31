// import { Envelope, Github, LinkedIn } from "./components/icons";
// import Link from "./components/Link";
import Logo from "./components/Logo";

// import headshot from "./assets/headshot.jpg";

export default function App() {
  return (
    <div className="w-full min-h-screen p-8 flex flex-col bg-slate-950 font-sans">
      <header className="flex flex-1 flex-col items-center justify-center">
        <hgroup className="w-full flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-transparent to-slate-950 rounded-xl">
          <Logo className="w-[80px] stroke-slate-100 stroke-[10px] animate-draw-line fill-mode-forwards repeat-1 mb-8" />
          <h1 className="font-extrabold leading-none text-5xl animate-fade-in-up text-center">
            Andrew Brice
            <span className="font-normal text-2xl text-slate-500 block">
              Software Engineer & Mentor
            </span>
          </h1>
        </hgroup>
      </header>
      {/* <main className="w-full bg-gradient-to-b from-transparent via-transparent to-slate-950 font-sans text-slate-100">
        <section className="w-full px-8 sm:px-16 py-64">
          <article className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-32 lg:gap-0">
            <div className="flex-1">
              <h2 className="font-bold text-slate-100 text-xl lg:text-3xl mb-4">
                About
              </h2>
              <p className="w-full flex-1 text-slate-500 text-xl lg:text-2xl lg:leading-[1.4]">
                I've spent the past ten years writing code for the web,
                leveraging my design chops to craft clean, user-friendly
                experiences. Currently, I'm building sales forecasting software
                for the folks over at{" "}
                <Link href="https://www.outreach.io/">Outreach</Link>, where I
                spend my days working in React, TypeScript, and GraphQL.
                <br />
                <br />
                Originally from the east coast, I now live in the midwest with
                my wife, son, and our two dogs. When I'm not writing code (or
                reading about it), you can find me at the gym, at the movies, or
                at home making my son laugh.
              </p>
            </div>
            <div className="flex-1">
              <img
                className="lg:mx-auto mt-8 rounded-xl shadow-lg max-w-xs"
                alt="Andrew Brice"
                src={headshot}
              />
            </div>
          </article>
        </section>
        <section className="w-full px-8 sm:px-16 py-64">
          <article className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-32 lg:gap-0">
            <blockquote
              className="flex-1"
              cite="https://keyholesoftware.com/writing-quality-code-practicing-make-it-work-make-it-right-make-it-fast/"
            >
              <p className="font-extrabold leading-none [font-size:_clamp(2rem,7vw,5rem)]">
                Make it work.
                <br />
                <span className="text-slate-400">Make it right.</span>
                <br />
                <span className="text-slate-600">Make it fast.</span>
              </p>
            </blockquote>
            <div className="flex-1">
              <h2 className="font-bold text-slate-100 text-xl lg:text-3xl mb-4">
                Philosophy
              </h2>
              <p className="text-slate-500 text-xl lg:text-2xl lg:leading-[1.4]">
                I've always loved this quote by Kent Beck, and it greatly
                informs how I approach designing and building software. My
                favorite step is "Make it right" - I'm a bit obssessed with
                writing code that is reusable, consumable, and well documented.
              </p>
            </div>
          </article>
        </section>
        <footer className="w-full px-8 sm:px-16 py-32">
          <div className="w-full max-w-7xl mx-auto lg:flex-1 flex flex-col">
            <h2 className="font-bold text-label text-xl lg:text-3xl lg:leading-[1.4] mb-4">
              Contact
            </h2>
            <p className="max-w-md lg:max-w-xl text-slate-600 text-xl lg:text-2xl lg:leading-[1.4] mb-8">
              Whether you'd like to discuss an opportunity or simply talk shop,
              I'd love to connect!
            </p>
            <div className="flex gap-4 sm:gap-8 text-base lg:text-xl">
              <Link href="mailto:bricea27@gmail.com">
                <Envelope />
              </Link>
              <Link href="https://github.com/bricea27">
                <Github />
              </Link>
              <Link href="https://www.linkedin.com/in/briceandrew/">
                <LinkedIn />
              </Link>
            </div>
          </div>
        </footer>
      </main> */}
    </div>
  );
}
