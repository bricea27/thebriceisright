import { createUseStyles } from "react-jss";

import { Logo } from "./components";

const useStyles = createUseStyles((theme) => ({
  root: {
    alignItems: "center",
    background: theme.background.primary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100vw",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Logo />
    </main>
  );
};

export default App;
