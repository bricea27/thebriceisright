import { Envelope, Github, LinkedIn } from "./components/icons";
import Link from "./components/Link";
import Logo from "./components/Logo";

import headshot from "./assets/headshot.jpg";

export default function App() {
  return (
    <main className="w-full font-sans text-slate-950 flex flex-col lg:flex-row">
      <header className="w-full min-h-screen flex flex-col mx-auto p-16 justify-center items-center shadow-">
        <Logo className="max-w-[80px] lg:max-w-[120px] stroke-slate-100 stroke-[10px] mb-4 lg:mb-8 animate-draw-line fill-mode-forwards repeat-1" />
        <hgroup className="animate-fade-in-up text-center">
          <h1 className="text-slate-100 font-extrabold text-3xl lg:text-6xl lg:mb-2">
            Andrew Brice
          </h1>
          <h2 className="text-slate-700 font-extrabold text-xl lg:text-4xl">
            Software Engineer
          </h2>
        </hgroup>
      </header>
      <article className="w-full bg-slate-950 min-h-screen p-16 flex flex-col text-center items-center justify-center shadow-inner">
        <div className="w-48 h-48 rounded-xl shadow-xl overflow-hidden mb-8 mx-auto animate-fade-in-up ">
          <img className="w-full" src={headshot} />
        </div>
        <p className="w-full max-w-md text-slate-700 text-base lg:text-lg lg:leading-[1.4] mb-4 lg:mb-8 animate-fade-in-up ">
          Hi, I'm Andrew. I've spent the past ten years writing code for the
          web, leveraging my background in design to craft clean, user-friendly
          experiences. Currently, I'm building sales forecasting software for
          the folks over at{" "}
          <Link href="https://www.outreach.io/">Outreach</Link>, where I spend
          my days working in React, TypeScript, and GraphQL.
        </p>
        <p className="max-w-md text-slate-700 text-base lg:text-lg lg:leading-[1.4] mb-8 animate-fade-in-up">
          Whether you'd like to discuss an opportunity or simply talk shop, I'd
          love to chat!
        </p>
        <div className="flex gap-4 text-base lg:text-xl animate-fade-in-up ">
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
      </article>
    </main>
  );
}
