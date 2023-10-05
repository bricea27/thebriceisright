import Logo from "./components/Logo";

export default function App() {
  return (
    <main className="w-full bg-bg font-sans text-text">
      <section className="w-full max-w-7xl min-h-screen flex flex-col mx-auto p-8 sm:p-16">
        <Logo className="[width:_clamp(4rem,9vw,6rem)] stroke-text stroke-[8px] mb-[30vh]" />
        <h1 className="max-w-xl lg:max-w-4xl font-sans font-black leading-none tracking-wide [font-size:_clamp(2rem,5vw,4rem)] animate animate-fade-in-up">
          Andrew Brice{" "}
          <span className="text-text-alt">
            is a software engineer with ten years of experience coding for the
            web.
          </span>
        </h1>
      </section>
      <section className="w-full max-w-7xl min-h-screen mx-auto p-8 sm:p-16">
        <h2 className="font-bold text-text-alt text-xl sm:text-3xl mb-4">
          About
        </h2>
        <div className="flex flex-wrap md:flex-nowrap gap-8">
          <p className="text-xl lg:text-3xl">
            Hi, I'm Andrew - a UI focused software engineer with ten years of
            experience coding for the web. I leverage my background in design to
            craft clean, user-friendly web applications.
          </p>
          <p className="text-xl lg:text-3xl">
            Currently, I'm helping build world class sales forecasting software for the folks over at Outreach, utilizing React.js, TypeScript, and Apollo GraphQL.
          </p>
        </div>
      </section>
    </main>
  );
}
