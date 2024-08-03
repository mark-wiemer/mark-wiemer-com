import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import { useHomeStyles } from "./Home.styles";
import { mergeClasses } from "@fluentui/react-components";

const Home = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const styles = useHomeStyles();

  return (
    <div className={styles.container}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className={mergeClasses(styles.logo, styles.viteLogo)}
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className={`${mergeClasses(
              styles.logo,
              styles.reactLogo
            )} react logo`}
            alt="React logo"
          />
        </a>
      </div>
      <h1>markwiemer.com</h1>
      <div className={styles.card}>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          Count is {count}
        </button>
        <p>
          {/* Wrap as string to avoid VS Code yelling at raw HTML `)` */}
          {`Hello, world! If you're reading this, it's because you're a cool
          person. There isn't much here yet, just wanted to show you my little
          corner of the internet. I'll let you know when there's more to see :)`}
        </p>
        <p>
          <a href="https://github.com/mark-wiemer/mark-wiemer-com">
            View on GitHub
          </a>
        </p>
        <p>
          Built with <a href="https://bun.sh">Bun</a>
        </p>
        <p>
          {`"Smiling face with sunglasses" graphic designed by `}
          <a href="https://openmoji.org">OpenMoji</a> – the open-source emoji
          and icon project.{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0">
            License: CC BY-SA 4.0
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
