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
  },
  headshot: {
    width: "100%",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <div className="w-1/2 h-screen p-4">
        <Logo style={{ width: 100 }} />
      </div>
      <div className="w-1/2 h-screen">
        <img className={classes.headshot} src={headshot} />
      </div>
    </main>
  );
};

export default App;
