import Logo from "./components/Logo";
import Link from "./components/Link";

import headshot from "./assets/headshot.jpg";

export default function App() {
  return (
    <main className="w-full bg-bg font-sans text-text">
      <section className="w-full max-w-7xl min-h-screen flex flex-col mx-auto p-8 sm:p-16">
        <Logo className="[width:_clamp(4rem,9vw,6rem)] stroke-text stroke-[8px] mb-[30vh]" />
        <h1 className="max-w-xl lg:max-w-4xl font-sans font-black leading-none [font-size:_clamp(2rem,5vw,4rem)] animate animate-fade-in-up">
          Andrew Brice{" "}
          <span className="text-text-alt">
            is a software engineer with ten years of experience coding for the
            web.
          </span>
        </h1>
      </section>
      <section className="w-full max-w-7xl mx-auto px-8 sm:px-16 py-96">
        <h2 className="font-bold text-text-alt text-xl sm:text-3xl mb-4">
          About
        </h2>
        <div className="flex flex-wrap md:flex-nowrap gap-8">
          <p className="text-xl lg:text-3xl flex-1">
            Hi, I'm Andrew - a UI focused software engineer with ten years of
            experience coding for the web. I leverage my background in design to
            craft clean, user-friendly web applications.
          </p>
          <p className="text-xl lg:text-3xl flex-1">
            Currently, I'm helping build world class sales forecasting software
            for the folks over at Outreach, utilizing React.js, TypeScript, and
            Apollo GraphQL.
          </p>
        </div>
      </section>
      <section className="w-full bg-bg-alt">
        <article className="w-full max-w-7xl mx-auto px-8 sm:px-16 py-32">
          <div className="w-full flex items-start md:items-center justify-between flex-col-reverse md:flex-row gap-8">
            <div className="flex flex-col flex-1">
              <h2 className="font-bold text-text-alt text-xl lg:text-2xl mb-4">
                Get in touch
              </h2>
              <p className="max-w-[80%] text-lg lg:text-2xl mb-4">
                Whether you'd like to discuss an opportunity or simply talk
                shop, I'd love to connect!
              </p>
              <Link href="mailto:bricea27@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 stroke-text-alt"
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
                  className="w-6 h-6 mb-2 stroke-text-alt"
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
                  className="w-6 h-6 stroke-text-alt"
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
            <div className="flex flex-1">
              <img className="max-w-[50%] md:max-w-xs rounded-3xl" src={headshot} />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
