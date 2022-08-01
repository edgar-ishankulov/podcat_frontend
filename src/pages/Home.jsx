import { Navbar } from "../components/Navbar";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../css/custom.css";
import Logo from "../images/logo.svg";
import "@fontsource/roboto";
import { Button } from "react-bootstrap";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";

function Home() {
  const imgUrl = {
    backgroundImage: `url('https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
  };
  const imageUrl =
    "https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

  return (
    <>
      <Navbar imgUrl={imgUrl} Logo={Logo} imageUrl={imageUrl} />
      <div>
        <br></br>
        <br></br>
        <h1 className=" d-flex text-center ml-12 ms-5">
          KEEP
          <br />
          BREATHING
        </h1>
      </div>
      <div className=" ms-5 mt-4">
        <h2>stream the full podcast now</h2>
      </div>
      <div className="ms-5 w-50">
        <h3>
          Conversations about science, technology, history, philosophy and the
          nature of intelligence, consciousness, love, and power. Lex is an AI
          researcher at MIT and beyond.
        </h3>
      </div>
      <div>
        <Button className=" ms-5 mt-2 play-button" variant="primary">
          <PlayArrowIcon className="play-arrow" /> Play
        </Button>
        <Button className=" ms-4 mt-2 more-info-button" variant="primary">
          <InfoIcon className="info-icon" /> More Info
        </Button>
      </div>
    </>
  );
}

export default Home;
