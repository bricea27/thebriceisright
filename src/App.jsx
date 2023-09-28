import Link from "./components/Link";
import Logo from "./components/Logo";

import headshot from "./assets/headshot.png";

export default function App() {
  return (
    <main className="w-screen h-screen p-6 md:p-8">
      <section className="flex flex-col w-full h-full bg-background relative p-6 md:p-8 rounded-lg overflow-hidden">
        <Logo className="animate animate-fade-in-up max-w-[80px] md:max-w-[90px] mb-4 stroke-text-secondary" />
        <div className="animate animate-fade-in-up flex flex-col flex-1 justify-center md:w-1/2 sm:w-full z-10">
          <h1 className="font-sans font-extrabold mb-2 text-[calc(16px+3vw)] leading-none text-text-primary tracking-tight">
            Andrew Brice
          </h1>
          <p className="font-sans font-light text-text-primary text-2xl text-[calc(16px+1vw)] leading-normal">
            has nearly a decade of experience as a software engineer and mentor,
            leveraging his background in design to build clean, user-friendly,
            and dynamic web interfaces.
          </p>
        </div>
        <div className="animate animate-fade-in-up font-sans font-extrabold flex gap-4 text-sm md:text-base">
          <Link href="mailto:bricea27@gmail.com">Email</Link>
          <Link href="https://github.com/bricea27">Github</Link>
          <Link href="https://www.linkedin.com/in/briceandrew/">Linkedin</Link>
        </div>
        <img
          className="animate animate-fade-in-up absolute bottom-0 right-0 hidden md:block w-auto h-[80vh] drop-shadow-xl"
          alt="Andrew Brice headshot"
          src={headshot}
        />
      </section>
    </main>
  );
}
