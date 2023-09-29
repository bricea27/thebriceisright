import Logo from "./components/Logo";

export default function App() {
  return (
    <main className="w-full min-h-screen bg-background p-16 text-text-primary bg-gradient-to-br from-background to-background-light items-center flex flex-col">
      <header className="w-full max-w-lg mb-16">
        <Logo className="animate animate-fade-in-up max-w-[80px] mb-8 stroke-text-secondary" />
        <h1 className="font-sans font-extrabold text-2xl">Andrew Brice</h1>
        <h2 className="font-sans font-light text-xl">Software Engineer</h2>
      </header>
      <section className="max-w-lg mb-16">
        <h3 className="font-sans font-bold text-xl mb-2">About</h3>
        <p className="font-sans font-light text-lg mb-2">
          Andrew is a UI focused software engineer with nearly a decade of
          experience leveraging his background in design to build clean and
          user-friendly web applications.
        </p>
        <p className="font-sans font-light text-lg mb-2">
          He currently lives in Indianapolis, Indiana with his wife, son, and
          two dogs. Born in New York City and raised just across the Hudson
          river in New Jersey, Andrew took a job in Indy in 2015 and has since
          called it his home.
        </p>
      </section>
      <section className="max-w-lg mb-16">
        <h3 className="font-sans font-bold text-xl mb-2">Interests</h3>
        <p className="font-sans font-light text-lg mb-2">
          Andrew is a lover of all things sci-fi / fantasy, an avid gym-goer,
          and a washed up high school athlete who fuels his dreams playing beer
          league softball on Sunday afternoons.
        </p>
        <p className="font-sans font-light text-lg mb-2">
          His favorite thing to do, aside from making his son laugh, is to go to
          the movies and crush a large buttered popcorn (layered, of course).
        </p>
      </section>

      <section className="max-w-lg mb-16">
        <h3 className="font-sans font-bold text-xl mb-2">Work</h3>
        <p className="font-sans font-light text-lg mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          tristique ante. Curabitur in libero eu magna auctor posuere. Nam nisl
          nisl, rhoncus nec bibendum nec, ullamcorper ut magna. Nulla facilisi.
          Nunc congue, nulla aliquam euismod condimentum, quam turpis lacinia
          ipsum, nec porta nisi diam non justo. Fusce malesuada erat in lorem
          tincidunt, eget congue tellus pellentesque. Proin non molestie magna.
          In sed libero vel neque semper dictum non a quam. Pellentesque feugiat
          sapien vitae libero eleifend, vitae pellentesque arcu mattis.
        </p>
      </section>
    </main>
  );
}
