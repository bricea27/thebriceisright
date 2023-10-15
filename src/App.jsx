import Logo from "./components/Logo";

export default function App() {
  return (
    <main className="w-full min-h-screen bg-neutral-950 font-sans text-neutral-50 flex flex-col items-center justify-center">
      {/* <Logo className="[width:_clamp(4rem,12vw,15rem)] stroke-neutral-50 stroke-[10px] animate-draw-line fill-mode-forwards repeat-" /> */}
      <hgroup>
        <h1 className="font-extrabold [font-size:_clamp(2rem,7vw,7rem)] leading-none">
          Andrew Brice
        </h1>
        <h2 className="[font-size:_clamp(1rem,3vw,3rem)]">
          Software Engineer & Mentor
        </h2>
      </hgroup>
    </main>
  );
}
