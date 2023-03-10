import { Link } from "react-router-dom";
import NavigationBar from "../Navigation/NavigationBar";
import monkey from "./monkey.jpg";

export default function Homepage() {
  return (
    <>
      <NavigationBar />
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center bg-dark"
        style={{
          backgroundImage: `url(${monkey})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 className="mb-3 text-center text-light">Welcome</h1>
        <h2 className="mb-3 text-center text-light">
          Team HUBABUBA presents Hackathon 4 project
        </h2>
      </div>
    </>
  );
}
