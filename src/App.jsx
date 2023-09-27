import Logo from "./components/Logo";

import headshot from "./assets/headshot.png";

export default function App() {
  return (
    <main className="bg-background flex h-screen overflow-hidden w-screen">
      <div className="md:w-1/2 sm:w-full p-8 z-10">
        <Logo className="max-w-[80px] md:max-w-[100px] mb-20 stroke-text-secondary" />
        <h1 className="font-sans font-extrabold mb-4 text-6xl text-text-primary tracking-tight drop-shadow-sm">
          Hello,
          <br />
          I'm Andrew Brice
        </h1>
        <p className="font-sans font-light text-text-primary text-2xl">
          With nearly a decade of experience as a software engineer and mentor,
          I leverage my background in design to build clean, user-friendly, and
          dynamic web interfaces.
        </p>
      </div>
      <img
        className="absolute bottom-0 right-0 sm:opacity-20 md:opacity-100 hidden sm:block max-w-xl drop-shadow-xl"
        alt="Andrew Brice headshot"
        src={headshot}
      />
    </main>
  );
}
