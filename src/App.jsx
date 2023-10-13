import { Envelope, Github, LinkedIn } from "./components/icons";
import Link from "./components/Link";
import Logo from "./components/Logo";

import headshot from "./assets/headshot.jpg";

export default function App() {
  return (
    <main className="w-full bg-bg font-sans text-text flex flex-col lg:flex-row">
      <header className="w-full min-h-screen flex flex-col mx-auto p-16 justify-center items-center">
        <Logo className="max-w-[80px] lg:max-w-[120px] stroke-text stroke-[10px] mb-4 lg:mb-8 animate-draw-line fill-mode-forwards repeat-1" />
        <hgroup className="animate-fade-in-up text-center">
          <h1 className="font-extrabold text-3xl lg:text-7xl">Andrew Brice</h1>
          <h2 className="text-text-alt font-extrabold text-xl lg:text-5xl">
            Software Engineer
          </h2>
        </hgroup>
      </header>
      <article className="w-full bg-white min-h-screen p-16 animate-fade-in-up flex flex-col text-center items-center justify-center">
        <div className="w-48 h-48 rounded-xl overflow-hidden mb-8 mx-auto">
          <img className="w-full" src={headshot} />
        </div>
        <p className="w-full max-w-lg text-text-alt text-lg lg:text-xl lg:leading-[1.4] mb-4 lg:mb-8">
          Hi, I'm Andrew. I've spent the past ten years writing code for the
          web, leveraging my background in design to craft clean, user-friendly
          experiences. Currently, I'm building sales forecasting software for
          the folks over at{" "}
          <Link href="https://www.outreach.io/">Outreach</Link>, where I spend
          my days working in React, TypeScript, and GraphQL.
        </p>
        <p className="max-w-md text-text-alt text-lg lg:text-xl lg:leading-[1.4] mb-8">
          Whether you'd like to discuss an opportunity or simply talk shop, I'd
          love to chat!
        </p>
        <div className="flex gap-2 text-base lg:text-xl">
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
