import Article, { ArticleBody, ArticleHeading } from "./components/Article";
import Logo from "./components/Logo";

export default function App() {
  return (
    <main className="w-full min-h-screen bg-background p-8 lg:p-16 font-sans text-text-primary bg-gradient-to-br from-background to-background-light flex flex-col items-center">
      <header className="animate animate-fade-in-up w-full max-w-lg mb-8 lg:mb-16">
        <Logo className="max-w-[60px] lg:max-w-[80px] mb-4 lg:mb-8 stroke-text-secondary" />
        <h1 className="font-sans font-extrabold text-lg lg:text-2xl">
          Andrew Brice
        </h1>
        <h2 className="font-sans font-light text-base lg:text-xl">
          Software Engineer
        </h2>
      </header>
      <Article>
        <ArticleHeading>About</ArticleHeading>
        <ArticleBody>
          Andrew is a UI focused software engineer with nearly a decade of
          experience leveraging his background in design to build clean and
          user-friendly web applications.
        </ArticleBody>
        <ArticleBody>
          Born in New York City and raised just across the Hudson river in New
          Jersey, Andrew took a job in Indianapolis in 2015 and has since called
          it his home. He lives in Indy with his wife, son, and two dogs.
        </ArticleBody>
        <ArticleBody>
          Andrew is an avid gym-goer, a lover of all things sci-fi / fantasy,
          and a washed up high school athlete who fuels his dreams playing beer
          league softball on Sunday afternoons. His favorite thing to do, aside
          from making his son laugh, is to go to the movies and crush a large
          buttered popcorn (layered, of course).
        </ArticleBody>
      </Article>
    </main>
  );
}
