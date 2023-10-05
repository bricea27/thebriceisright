import styles from "./App.module.css";

import Eye from "./components/Eye";
import Logo from "./components/Logo";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-bg font-sans text-text p-8 sm:p-16">
      <main className="w-full min-h-screen max-w-5xl flex flex-col justify-center">
        {/* <Logo className="w-[100px] lg:w-[120px] stroke-text stroke-[8px] mb-32" /> */}
        <h1
          id={styles.name}
          className="font-sans font-black leading-none uppercase tracking-wide"
        >
          Andrew Brice is a software engineer with an <Eye /> for design
        </h1>
      </main>
    </div>
  );
}
