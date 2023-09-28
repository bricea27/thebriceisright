import Logo from "./components/Logo";

import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa6";

export default function App() {
  return (
    <main>
      <img className="animate animate-fade-in-up fixed right-0 bottom-0 min-w-full min-h-full max-w-none z-0" src="https://www.retro-synthwave.com/wp-content/uploads/2016/10/retro-synthwave_GIF-00-20.gif" />
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
    </main>
  );
}
