import "./styles.css";
import Image from "./react.png";
import Rain from "./rain.svg";

export const App = () => {
  return (
    <>
      <h1>
        React Typescript Webpack Starter Template - {process.env.NODE_ENV}{" "}
        {process.env.name}
      </h1>
      <img src={Image} alt="React Logo" width="300" height="200" />
      <img src={Rain} alt="React Logo" width="300" />
    </>
  );
};
