import React from "react";

import styles from "./App.module.css";

import Link from "./components/Link";
import Logo from "./components/Logo";

import headshot from "./assets/headshot.png";

export default function App() {
  const [reference, setReference] = React.useState();

  const getReference = React.useCallback(async () => {
    const fetchQuote = async () => {
      const response = await fetch(
        "https://api.chucknorris.io/jokes/random?category=dev&name=Andrew"
      );
      return await response.json();
    };

    const fetchAttribution = async () => {
      const response = await fetch("https://randomuser.me/api/");
      return await response.json();
    };

    try {
      const [quote, attribution] = await Promise.all([
        fetchQuote(),
        fetchAttribution(),
      ]);

      setReference({
        ...attribution.results[0],
        value: quote.value,
      });
    } catch (e) {
      // intentionally empty
    }
  }, []);

  React.useEffect(() => {
    getReference();
  }, [getReference]);

  return (
    <div className="w-full min-h-screen bg-background font-sans text-text-primary sm:px-8 md:px-16">
      <header className="w-full max-w-lg lg:max-w-2xl flex items-center justify-between mx-auto p-8 sm:px-0 sm:py-12">
        <Logo
          id={styles.logo}
          className="max-w-[60px] lg:max-w-[80px] stroke-text-secondary"
        />
        <div className="flex items-center gap-9">
          <Link href="https://github.com/bricea27">Github</Link>
          <Link href="https://www.linkedin.com/in/briceandrew/">LinkedIn</Link>
        </div>
      </header>
      <main className="w-full flex flex-col items-center">
        <section className="w-full h-72 lg:h-96 lg:max-w-4xl flex place-content-center mb-8 lg:mb-16 bg-text-secondary bg-opacity-10 sm:rounded-3xl overflow-hidden">
          <article className="w-full max-w-lg lg:max-w-2xl rounded-3xl flex items-center justify-between pl-8 sm:pl-0 relative">
            <div>
              <h1 className="font-sans font-extrabold text-2xl xs:text-3xl lg:text-5xl leading-none">
                Andrew Brice
              </h1>
              <h2 className="font-sans font-light text-base xs:text-xl lg:text-3xl">
                Software Engineer
              </h2>
            </div>
            <img
              className="w-auto h-[90%] absolute bottom-0 -right-12 xs:-right-8"
              src={headshot}
            />
          </article>
        </section>
        <article className="w-full max-w-lg lg:max-w-2xl mb-8 lg:mb-16 px-8 sm:p-0">
          <h3 className="font-bold text-lg lg:text-2xl mb-4 lg:mb-6">About</h3>
          <p className="font-light text-base lg:text-xl mb-4 lg:mb-6">
            Andrew Brice is a UI focused software engineer with ten years of
            experience coding for the web. He leverages his background in design
            to craft clean, user-friendly web applications, interfaces, and
            interactions.
          </p>
          <p className="font-light text-base lg:text-xl mb-4 lg:mb-6">
            Born in New York City and raised in New Jersey, Andrew accepted a
            job in Indianapolis in 2015 and has since called it home. He now
            lives in Indy with his wife, son, and their two dogs.
          </p>
          <p className="font-light text-base lg:text-xl mb-4 lg:mb-6">
            Andrew loves to read sci-fi and fantasy, tinker with his mechanical
            keyboards, and play beer league softball on Sunday afternoons. His
            favorite thing to do, aside from making his son laugh, is to go to
            the movies and crush a large buttered popcorn (layered, of course).
          </p>
        </article>
        {reference?.value && (
          <article className="w-full max-w-lg lg:max-w-2xl mb-8 lg:mb-16 px-8 sm:p-0">
            <h3 className="flex items-center justify-between font-bold text-lg lg:text-2xl mb-4 lg:mb-6">
              Work
              {/* <button
              className="hover:text-text-primary rounded-full transition-all p-2 inline-flex items-center text-text-secondary"
              onClick={getReference}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 lg:w-6 h-5 lg:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button> */}
            </h3>
            <p className="font-light text-base lg:text-xl mb-4 lg:mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              et pariatur corrupti consectetur.
            </p>
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
    </div>
  );
}
