// import { Envelope, Github, LinkedIn } from "./components/icons";
// import Link from "./components/Link";
import Logo from "./components/Logo";

// import headshot from "./assets/headshot.jpg";

export default function App() {
  return (
    <>
      <header className="flex min-h-screen font-sans w-full p-8 sm:p-16 bg-gradient-to-b from-transparent via-transparent to-merino-50 items-center place-content-center">
        <Logo className="w-[60px] stroke-merino-900 stroke-[10px] animate-draw-line fill-mode-forwards repeat-1 absolute top-8 left-8" />
        <hgroup className="max-w-sm md:max-w-2xl flex flex-1 flex-col mx-auto text-center animate-fade-in-up my-32">
          <h1 className="font-black text-merino-950 text-4xl sm:text-5xl md:text-7xl leading-none tracking-tight animate-fade-in-up mb-8 mx-auto">
            Andrew Brice
            <span className="block text-merino-700 text-2xl sm:text-3xl md:text-5xl">
              Software Engineer & Mentor
            </span>
          </h1>
          <p className="font-normal text-merino-900 text-lg sm:text-xl md:text-2xl mb-4 mx-auto">
            I've spent the past ten years writing code for the web, leveraging
            my background in design to craft clean, user-friendly experiences.
          </p>
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
    </>
  );
}
