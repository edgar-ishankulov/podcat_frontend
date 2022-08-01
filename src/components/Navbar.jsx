import React from "react";
import "../css/custom.css";
import { Row, Col, Image } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

export function Navbar({ imgUrl, Logo, imageUrl }) {
  return (
    <>
      <div className="imgCover" style={imgUrl} />

      <Row className="w-100">
        <Col id="col1" className="d-flex col-md-2  mt-3">
          <Col className=" ms-5">
            <Image src={Logo} className="logo" />
          </Col>
        </Col>
        <Col
          id="col2"
          className="d-flex  col-md-4  mt-4 justify-content-center"
        >
          <div className="navbar">Podcasts</div>
          <div className="navbar">Music</div>
          <div className="navbar">New & Popular</div>
          <div className="navbar">Explore</div>
        </Col>

        <Col id="col3" className=" d-flex col-md-5"></Col>

        <Col id="col4" className="d-flex col-md-1  mt-4">
          <SearchIcon className="d-flex align-self-center" />
          <PersonIcon className="d-flex align-self-center ms-3" />
        </Col>
      </Row>
    </>
  );
}
