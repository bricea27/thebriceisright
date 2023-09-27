import Logo from "./components/Logo";

import headshot from "./assets/headshot.png";

export default function App() {
  return (
    <main className="bg-background flex h-screen overflow-hidden w-screen">
      <div className="w-1/2 h-screen p-8">
        <Logo className="max-w-[100px] mb-20 stroke-text-secondary" />
        <h1 className="font-sans font-extrabold mb-4 text-6xl text-text-primary">
          Hello,
          <br />
          I'm Andrew Brice
        </h1>
        <p className="font-sans font-light text-text-secondary text-2xl">
          With nearly a decade of experience as a software engineer and mentor,
          I leverage my background in design to build clean, user-friendly, and
          dynamic web interfaces.
        </p>
      </div>
      <img
        className="absolute right-0 top-12 w-1/2 max-w-3xl"
        alt="Andrew Brice headshot"
        src={headshot}
      />
    </main>
  );
}
