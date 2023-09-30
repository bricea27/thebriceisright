import React from "react";

import styles from "./App.module.css";

import Logo from "./components/Logo";

export default function App() {
  const [reference, setReference] = React.useState();

  const fetchQuote = async () => {
    const response = await fetch(
      "https://api.chucknorris.io/jokes/random?category=dev&name=Andrew"
    );
    const { value } = await response.json();

    const user = await fetch("https://randomuser.me/api/");
    const { results } = await user.json();

    setReference({
      ...results[0],
      value,
    });
  };

  React.useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main className="w-full min-h-screen bg-background p-8 lg:p-16 font-sans text-text-primary flex flex-col items-center">
      <header className="animate animate-fade-in-up w-full max-w-lg lg:max-w-2xl mb-8 lg:mb-16">
        <Logo
          id={styles.logo}
          className="max-w-[70px] lg:max-w-[100px] mb-4 lg:mb-8 stroke-text-secondary"
        />
        <h1 className="font-sans font-extrabold text-2xl lg:text-4xl">
          Andrew Brice
        </h1>
        <h2 className="font-sans font-light text-lg lg:text-2xl">
          UI Engineer
        </h2>
      </header>
      <article className="w-full max-w-lg lg:max-w-2xl mb-8 lg:mb-16">
        <h3 className="font-bold text-lg lg:text-2xl mb-4 lg:mb-6">About</h3>
        <p className="font-light text-base lg:text-xl mb-4 lg:mb-6">
          Andrew is a UI focused software engineer with nearly a decade of
          experience leveraging his background in design to build clean and
          user-friendly web applications.
        </p>
        <p className="font-light text-base lg:text-xl mb-4 lg:mb-6">
          Born in New York City and raised across the Hudson river in New
          Jersey, Andrew took a job in Indianapolis in 2015 and has since called
          it his home. He lives in Indy with his wife, son, and two dogs.
        </p>
        <p className="font-light text-base lg:text-xl mb-4 lg:mb-6">
          Andrew is an avid gym-goer, a lover of all things sci-fi / fantasy,
          and a washed up high school athlete who fuels his dreams playing beer
          league softball on Sunday afternoons. His favorite thing to do, aside
          from making his son laugh, is to go to the movies and crush a large
          buttered popcorn (layered, of course).
        </p>
      </article>
      {reference?.value && (
        <article className="w-full max-w-lg lg:max-w-2xl mb-8 lg:mb-16">
          <h3 className="flex items-center justify-between font-bold text-lg lg:text-2xl mb-4 lg:mb-6">
            References
            <button
              className="hover:text-text-primary rounded-full transition-all p-2 inline-flex items-center text-text-secondary"
              onClick={fetchQuote}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
          </h3>
          <div className="px-4 py-8 mx-auto text-center bg-text-secondary bg-opacity-10 rounded-2xl flex-1">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-text-secondary opacity-30"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="font-medium  text-base lg:text-xl">
                  "{reference.value}"
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src={reference.picture.thumbnail}
                  alt="profile picture"
                />
                <div className="font-normal text- dark:text-white">
                  {reference?.name.first} {reference.name.last}
                </div>
              </figcaption>
            </figure>
          </div>
        </article>
      )}
    </main>
  );
}
