import Logo from "./components/Logo";

import headshot from "./assets/headshot.jpg";

export default function App() {
  return (
    <main className="bg-background flex h-screen overflow-hidden w-screen">
      <div className="w-1/2 h-screen p-4">
        <Logo className="max-w-[100px] stroke-text-secondary" />
      </div>
      <div className="w-1/2">
        <img alt="Andrew Brice headshot" src={headshot} />
      </div>
    </main>
  );
}
