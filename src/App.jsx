import { createUseStyles, ThemeProvider } from "react-jss";

import { Logo } from "./components";
import { theme } from "./theme";

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

const Main = (props) => {
  const classes = useStyles();

  return <div className={classes.root} {...props} />;
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Logo />
      </Main>
    </ThemeProvider>
  );
};

export default App;
