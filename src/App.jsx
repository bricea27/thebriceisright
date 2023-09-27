import Logo from "./components/Logo";

import headshot from "./assets/headshot.png";

export default function App() {
  return (
    <main className="bg-background flex h-screen overflow-hidden w-screen">
      <div className="w-1/2 h-screen p-4">
        <Logo className="max-w-[100px] stroke-text-secondary" />
        <img
          className="absolute right-0 top-12 w-1/2 max-w-3xl"
          alt="Andrew Brice headshot"
          src={headshot}
        />
      </div>
    </main>
  );
}
