import clsx from "clsx";
import { createUseStyles } from "react-jss";

import { Logo } from "./components";

import headshot from "./assets/headshot.jpg";

const useStyles = createUseStyles((theme) => ({
  root: {
    background: theme.background.primary,
    display: "flex",
    height: "100vh",
    overflow: "hidden",
    width: "100vw",
    "& > section": {
      width: "50%",
      height: "100vh",
      "&:first-child": {
        padding: "1rem",
      },
    },
  },
  headshot: {
    width: "100%",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <section>
        <Logo style={{ width: 100 }} />
      </section>
      <section>
        <img className={classes.headshot} src={headshot} />
      </section>
    </main>
  );
};

export default App;
