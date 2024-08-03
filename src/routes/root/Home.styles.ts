import { makeStyles, shorthands } from "@fluentui/react-components";

export const useHomeStyles = makeStyles({
  container: {
    maxWidth: "1280px",
    padding: "2rem",
    textAlign: "center",
  },
  logo: {
    height: "6em",
    padding: "1.5em",
    ...shorthands.transition("filter", "300ms"),
  },
  reactLogo: {
    "@media (prefers-reduced-motion: no-preference)": {
      animationIterationCount: "infinite",
      animationDuration: "20s",
      animationName: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
  },
});
