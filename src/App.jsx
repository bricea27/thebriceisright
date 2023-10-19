import { Envelope, Github, LinkedIn } from "./components/icons";
import Link from "./components/Link";
import Logo from "./components/Logo";

import headshot from "./assets/headshot.jpg";

export default function App() {
  return (
    <main className="w-full font-sans text-slate-100">
      <hgroup className="w-full min-h-screen flex flex-col mx-auto px-8 sm:px-16 pt-8 pb-32 sm:pt-16 justify-center max-w-7xl">
        <Logo className="[width:_clamp(4rem,9vw,6rem)] stroke-slate-100 stroke-[10px] mb-32 animate-draw-line fill-mode-forwards repeat-1" />
        <h1 className="font-extrabold leading-none [font-size:_clamp(2rem,7vw,5rem)] animate-fade-in-up">
          Andrew Brice
          <span className="font-normal text-slate-500 block">
            Software Engineer <br />& Mentor
          </span>
        </h1>
      </hgroup>
      <section className="w-full max-w-7xl mx-auto px-8 sm:px-16 py-32 animate-fade-in-up flex flex-wrap-reverse gap-12 justify-between items-center">
        <article>
          <h2 className="font-bold text-slate-100 text-xl lg:text-3xl mb-4">
            About
          </h2>
          <p className="w-full max-w-lg text-slate-500 text-xl lg:text-2xl lg:leading-[1.4]">
            Hi, I'm Andrew. I've spent the past ten years writing code for the
            web, leveraging my background in design to craft clean,
            user-friendly experiences. I currently live in Indianapolis with my
            wife, son, and our two dogs. When I'm not writing code (or reading
            about it), I'm either at the gym, at the movies, or at home making
            my son laugh.
          </p>
        </article>
        <div className="w-full max-w-md lg:max-w-lg lg:flex-1 mt-10">
          <img className="max-w-[200px] lg:max-w-xs rounded-xl shadow-lg" src={headshot} />
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto px-8 sm:px-16 py-32 animate-fade-in-up flex flex-wrap gap-12 justify-between items-center">
        <blockquote className="mt-8" cite="https://keyholesoftware.com/writing-quality-code-practicing-make-it-work-make-it-right-make-it-fast/">
          <p className="font-extrabold leading-none [font-size:_clamp(2rem,7vw,5rem)] animate-fade-in-up flex-1 mb-4">
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
        <article>
          <h2 className="font-bold text-slate-100 text-xl lg:text-3xl mb-4">
            Philosophy
          </h2>
          <p className="w-full max-w-lg text-slate-500 text-xl lg:text-2xl lg:leading-[1.4]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum atque
            blanditiis assumenda natus aliquid sunt aperiam labore ullam enim
            quisquam, voluptatem nesciunt facilis, alias ut magnam vitae
            distinctio? Ipsam, a!
          </p>
        </article>
      </section>
      <footer className="w-full max-w-7xl mx-auto px-8 sm:px-16 py-32 animate-fade-in-up">
        <div className="w-full flex flex-wrap gap-8 lg:gap-12">
          <div className=" w-full max-w-md lg:max-w-none lg:flex-1 flex flex-col">
            <h2 className="font-bold text-label text-xl lg:text-2xl lg:leading-[1.4] mb-4">
              Let's chat
            </h2>
            <p className="max-w-md lg:max-w-xl text-slate-600 text-xl lg:text-2xl lg:leading-[1.4] mb-8">
              Whether you'd like to discuss an opportunity or simply talk shop,
              I'd love to connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-base lg:text-xl">
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
        </div>
      </footer>
    </main>
  );
}
