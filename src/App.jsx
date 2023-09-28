import Logo from "./components/Logo";

import headshot from "./assets/headshot.png";

import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa6";

export default function App() {
  return (
    <main>
      <img
        className="fixed right-0 bottom-0 min-w-full min-h-full max-w-none z-0"
        src="https://media0.giphy.com/media/tGrq4uzKIJaLuI3uz7/giphy.gif?cid=ecf05e472z3bm2dqv3uv9kjdxripyexkgwkzj09tasy2ufp3&ep=v1_gifs_search&rid=giphy.gif&ct=g"
      />
      <section className="w-screen h-screen overflow-hidden relative flex flex-col text-center place-content-center">
        <Logo className="animate animate-fade-in-up max-w-[80px] md:max-w-[120px] mt-auto mb-4 mx-auto stroke-background" />
        <h1 className="animate animate-fade-in-right font-sans font-extrabold text-[calc(16px+3vw)] text-background tracking-tight">
          Andrew Brice
        </h1>
        <h2 className="animate animate-fade-in-left font-sans font-normal uppercase text-[calc(16px+0.5vw)] tracking-widest text-background">
          Software Engineer
        </h2>
        <footer className="animate animate-fade-in-up w-full px-8 h-16 mt-auto flex items-center justify-between">
          <a
            className="font-sans font-extrabold text-lg md:text-xl text-background"
            href="#"
          >
            Bio
          </a>
          <div className="flex gap-6 items-center">
            <a
              className="font-sans font-extrabold text-lg md:text-xl text-background"
              href="#"
            >
              <FaGithubAlt />
            </a>
            <a
              className="font-sans font-extrabold text-lg md:text-xl text-background"
              href="#"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </footer>
      </section>

      {/* <section className="flex flex-col place-content-center text-center w-full min-h-screen bg-text-primary">
        <Logo className="animate animate-fade-in-up max-w-[80px] md:max-w-[120px] mb-4 mx-auto mt-auto stroke-text-secondary" />
        <h1 className="animate animate-fade-in-right font-sans font-extrabold text-[calc(16px+3vw)] text-background tracking-tight">
          Andrew Brice
        </h1>
        <h2 className="animate animate-fade-in-left font-sans font-light uppercase text-xs sm:text-[calc(16px+0.25vw)] md:text-[calc(16px+0.8vw)] tracking-widest text-text-secondary">
          Software Engineer
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="animate animate-bounce w-6 h-6 mt-auto mb-4 mx-auto stroke-text-secondary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </section>

      <section className="flex w-full min-h-screen bg-background relative p-12">
        <div className="flex flex-col place-content-center md:w-1/2 sm:w-full z-10 relative">
          <h1 className="font-sans font-extrabold mb-4 text-[calc(16px+3vw)] leading-none text-text-primary tracking-tight">
            Hi 👋, I'm Andrew.
          </h1>
          <p className="font-sans font-light text-text-primary text-2xl text-[calc(16px+1vw)] leading-normal">
            With nearly a decade of experience as a software engineer and
            mentor, I leverage my background in design to build clean,
            user-friendly, and dynamic web interfaces.
          </p>
        </div>
        <img
          className="absolute bottom-0 right-0 hidden md:block max-w-xl drop-shadow-xl"
          alt="Andrew Brice headshot"
          src={headshot}
        />
      </section> */}
    </main>
  );
}
