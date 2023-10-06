import Logo from "./components/Logo";
import Link from "./components/Link";

import headshot from "./assets/headshot.jpg";

export default function App() {
  return (
    <main className="w-full bg-bg font-sans text-text">
      <section className="w-full max-w-7xl flex flex-col mx-auto px-8 sm:px-16 xl:px-32 py-8 sm:py-16 xl:py-32 justify-center">
        <Logo className="w-16 sm:w-32 stroke-text stroke-[10px] mb-32" />
        <h1 className="font-black leading-none [font-size:_clamp(2rem,9vw,6rem)] animate animate-fade-in-up">
          Andrew Brice
          <br />
          <span className="text-text-alt">
            Software Engineer
            <br />& Mentor
          </span>
        </h1>
      </section>
      <article className="w-full max-w-7xl mx-auto px-8 sm:px-16 xl:px-32 py-32 animate animate-fade-in-up">
        <h2 className="font-bold text-label text-xl lg:text-3xl mb-4">About</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <p className="max-w-md lg:max-w-[50%] text-text-alt text-xl lg:text-3xl">
            Hi, I'm Andrew - a UI focused software engineer with ten years of
            experience writing code for the web. I leverage my background in
            design to craft clean, user-friendly applications.
          </p>
          <p className="max-w-md lg:max-w-[50%] text-text-alt text-xl lg:text-3xl">
            I currently live in Indianapolis with my wife, son, and our two
            dogs. As a midwest transplant, my New Jersey accent has diminished,
            but my high pizza standards remain resolute.
          </p>
        </div>
      </article>
      <footer className="w-full max-w-7xl mx-auto px-8 sm:px-16 xl:px-32 py-32 animate animate-fade-in-up">
        <div className="w-full flex items-start lg:items-center justify-between flex-col-reverse lg:flex-row gap-8">
          <div className="flex flex-col flex-1">
            <h2 className="font-bold text-label text-xl lg:text-3xl mb-4">
              Contact
            </h2>
            <p className="max-w-md lg:max-w-[80%] text-text-alt text-xl lg:text-3xl mb-4">
              Whether you'd like to discuss an opportunity or simply talk shop,
              I'd love to connect!
            </p>
            <div className="flex flex-col gap-2 text-base lg:text-xl">
              <Link href="mailto:bricea27@gmail.com">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                bricea27@gmail.com
              </Link>
              <Link href="https://github.com/bricea27">
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
                    d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                  />
                </svg>
                <span>Github</span>
              </Link>
              <Link href="https://www.linkedin.com/in/briceandrew/">
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
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
                LinkedIn
              </Link>
            </div>
          </div>
          <div className="flex flex-1">
            <img className="w-1/2 max-w-xs rounded-xl" src={headshot} />
          </div>
        </div>
      </footer>
    </main>
  );
}
