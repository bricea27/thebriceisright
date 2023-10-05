import Logo from "./components/Logo";

export default function App() {
  return (
    <main className="w-full bg-bg font-sans text-text">
      <section className="w-full min-h-screen max-w-7xl flex flex-col  mx-auto p-8 sm:p-16">
        <Logo className="[width:_clamp(4rem,9vw,6rem)] stroke-text stroke-[8px] mb-[30vh]" />
        <h1 className="max-w-[80%] lg:max-w-4xl font-sans font-black leading-none tracking-wide [font-size:_clamp(2rem,5vw,4rem)] animate animate-fade-in-up">
          Andrew Brice{" "}
          <span className="text-text-alt">
            is a software engineer with ten years of experience coding for the
            web.
          </span>
        </h1>
      </section>
    </main>
  );
}
