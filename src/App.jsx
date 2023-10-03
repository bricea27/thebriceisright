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
    <>
      <section
        id={styles.loader}
        className="w-full h-screen bg-text-primary flex place-content-center fixed top-0 left-0 z-10"
      >
        <Logo
          id={styles.logo}
          className="w-[100px] lg:w-[140px] stroke-background"
        />
      </section>

      <div
        id={styles.page}
        className="w-full min-h-screen bg-background from-background to-background-light p-8 sm:p-16 font-sans text-text-primary flex flex-col"
      >
        <header className="w-full flex items-center justify-between mb-32">
          <Logo
            id={styles.logo}
            className="w-[60px] lg:w-[80px] stroke-text-secondary"
          />
        </header>

        <main className="w-full max-w-4xl flex flex-col flex-1">
          <h1 className="font-sans font-extrabold tracking-tight text-5xl sm:text-7xl leading-none mb-8">
            Hi, my name is Andrew Brice
          </h1>
          <p className="font-medium text-text-secondary text-xl sm:text-2xl max-w-[80%]">
            I'm a UI focused software engineer with ten years of experience
            coding for the web. I leverage my background in design to craft
            clean, user-friendly web applications, interfaces, and interactions.
          </p>
        </main>
      </div>
    </>
  );
}
