import { Envelope, Github, LinkedIn } from "./components/icons";
import Link from "./components/Link";
import Logo from "./components/Logo";

import headshot from "./assets/headshot.jpg";

export default function App() {
  return (
    <>
      <header className="flex font-sans w-full bg-gradient-to-b from-transparent to-slate-950 px-8 sm:px-16 pt-8 sm:pt-16">
        <hgroup className="max-w-7xl flex flex-1 flex-col justify-between mx-auto">
          <Logo className="[width:_clamp(3rem,7vw,5rem)] stroke-slate-100 stroke-[10px] animate-draw-line fill-mode-forwards repeat-1" />
          <h1 className="flex flex-1 flex-col justify-center font-extrabold leading-none [font-size:_clamp(2rem,7vw,5rem)] animate-fade-in-up my-32">
            Andrew Brice
            <span className="font-normal text-slate-500 block">
              Software Engineer <br />& Mentor
            </span>
          </h1>
        </hgroup>
      </header>
      <main className="w-full bg-slate-950 font-sans text-slate-100">
        <section className="w-full px-8 sm:px-16 py-32">
          <article className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
            <div className="max-w-lg">
              <h2 className="font-bold text-slate-100 text-xl lg:text-3xl mb-4">
                About
              </h2>
              <p className="text-slate-500 text-xl lg:text-2xl lg:leading-[1.4]">
                Hi, I'm Andrew. I've spent the past ten years writing code for
                the web, leveraging my background in design to craft clean,
                user-friendly experiences. Currently, I'm building sales
                forecasting software for the folks over at{" "}
                <Link href="https://www.outreach.io/">Outreach</Link>, where I
                spend my days working in React, TypeScript, and GraphQL.
                <br />
                <br />
                Originally from the east coast, I now live in the midwest with
                my wife, son, and our two dogs. When I'm not writing code (or
                reading about it), I'm either at the gym, at the movies, or at
                home making my son laugh.
              </p>
            </div>
            <div className="max-w-lg h-full max-h-[520px] overflow-hidden flex-1 rounded-xl shadow-lg">
              <img alt="Andrew Brice" src={headshot} />
            </div>
          </article>
        </section>
        <section className="w-full px-8 sm:px-16 py-64">
          <article className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
            <blockquote cite="https://keyholesoftware.com/writing-quality-code-practicing-make-it-work-make-it-right-make-it-fast/">
              <p className="font-extrabold leading-none [font-size:_clamp(2rem,7vw,5rem)] flex-1 mb-4">
                Make it work.
                <br />
                <span className="text-slate-400">Make it right.</span>
                <br />
                <span className="text-slate-600">Make it fast.</span>
              </p>
              <footer className="text-xl font-normal text-slate-600 block">
                - Kent Beck
              </footer>
            </blockquote>
            <div>
              <h2 className="font-bold text-slate-100 text-xl lg:text-3xl mb-4">
                Philosophy
              </h2>
              <p className="w-full max-w-lg text-slate-500 text-xl lg:text-2xl lg:leading-[1.4]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                atque blanditiis assumenda natus aliquid sunt aperiam labore
                ullam enim quisquam, voluptatem nesciunt facilis, alias ut
                magnam vitae distinctio? Ipsam, a!
              </p>
            </div>
          </article>
        </section>
        <footer className="w-full px-8 sm:px-16 py-32">
          <div className="w-full max-w-7xl mx-auto lg:flex-1 flex flex-col">
            <h2 className="font-bold text-label text-xl lg:text-2xl lg:leading-[1.4] mb-4">
              Let's chat
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
      </main>
    </>
  );
}
