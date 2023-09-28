import Logo from "./components/Logo";

import headshot from "./assets/headshot.png";

export default function App() {
  return (
    <main>
      <section className="flex flex-col w-full min-h-screen bg-background relative p-12">
        <Logo className="animate animate-fade-in-up max-w-[80px] mb-4 stroke-text-secondary" />
        <div className="animate animate-fade-in-up flex flex-col flex-1 justify-center md:w-1/2 sm:w-full">
          <h1 className="font-sans font-extrabold mb-2 text-[calc(16px+3vw)] leading-none text-text-primary tracking-tight">
            Andrew Brice
          </h1>
          <p className="font-sans font-light text-text-primary text-2xl text-[calc(16px+1vw)] leading-normal">
            has nearly a decade of experience as a software engineer and mentor,
            leveraging his background in design to build clean, user-friendly,
            and dynamic web interfaces.
          </p>
        </div>
      </section>
      <section className="w-full min-h-screen bg-white relative p-12">
        <img
          className="absolute bottom-0 right-0 hidden md:block max-w-xl drop-shadow-xl"
          alt="Andrew Brice headshot"
          src={headshot}
        />
      </section>
    </main>
  );
}
