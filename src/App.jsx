import { Envelope, Github, LinkedIn } from "./components/icons";
import Link from "./components/Link";
import Logo from "./components/Logo";

import headshot from "./assets/headshot.jpg";

export default function App() {
  return (
    <main className="w-full bg-neutral-900 font-sans text-neutral-100">
      <hgroup className="w-full flex flex-col mx-auto px-8 sm:px-16 pt-8 pb-32 sm:pt-16 justify-center max-w-7xl">
        <Logo className="[width:_clamp(4rem,9vw,6rem)] stroke-neutral-100 stroke-[10px] mb-32 animate-draw-line fill-mode-forwards repeat-1" />
        <h1 className="font-extrabold leading-none [font-size:_clamp(2rem,7vw,5rem)] animate-fade-in-up">
          Andrew Brice
          <span className="font-normal text-neutral-600 block">
            Software Engineer &<br />
            Mentor
          </span>
        </h1>
      </hgroup>
      <section className="w-full max-w-7xl mx-auto px-8 sm:px-16 py-32 animate-fade-in-up">
        <h2 className="font-bold text-label text-xl lg:text-2xl lg:leading-[1.4] mb-4">
          About
        </h2>
        <article className="flex flex-wrap gap-8 lg:gap-12">
          <p className="w-full max-w-md lg:max-w-none lg:flex-1 text-neutral-600 text-xl lg:text-2xl lg:leading-[1.4]">
            Hi, I'm Andrew. I've spent the past ten years writing code for the
            web, leveraging my background in design to craft clean,
            user-friendly experiences. Currently, I'm building sales forecasting
            software for the folks over at{" "}
            <Link href="https://www.outreach.io/">Outreach</Link>, where I spend
            my days working in React, TypeScript, and GraphQL.
          </p>
          <p className="w-full max-w-md lg:max-w-none lg:flex-1 text-neutral-600 text-xl lg:text-2xl lg:leading-[1.4]">
            Originally from the east coast, I now live in Indianapolis with my
            wife, son, and our two dogs. When I'm not writing code (or reading
            about it), I'm either at the gym, at the movies, or at home making
            my son laugh.
          </p>
        </article>
      </section>
      <footer className="w-full max-w-7xl mx-auto px-8 sm:px-16 py-32 animate-fade-in-up">
        <div className="w-full flex flex-wrap gap-8 lg:gap-12">
          <div className=" w-full max-w-md lg:max-w-none lg:flex-1 flex flex-col">
            <h2 className="font-bold text-label text-xl lg:text-2xl lg:leading-[1.4] mb-4">
              Let's chat
            </h2>
            <p className="max-w-md lg:max-w-[80%] text-neutral-600 text-xl lg:text-2xl lg:leading-[1.4] mb-8">
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
          <div className="w-full max-w-md lg:max-w-none lg:flex-1 flex">
            <img className="w-1/2 max-w-xs rounded-xl" src={headshot} />
          </div>
        </div>
      </footer>
    </main>
  );
}
