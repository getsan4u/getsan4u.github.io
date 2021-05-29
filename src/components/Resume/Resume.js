import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Sanjid-Salam.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
 const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
//  const [spojRank, upadteSpojRank] = useState(0);
//  const [hackerrank, upadteHackerank] = useState(0);
// const [sem, upadateSem] = useState(0);
//  const [cgpa, upadteCgpa] = useState(0);

    axios
      .get(uri)
      .then((res) => {
        //upadteSpojRank(res.data.message[0].spojRank);
        //upadteHackerank(res.data.message[1].hackerrank);
        //upadteCgpa(res.data.message[2].cgpa);
      })
      .catch((err) => {
        console.log(err);
      });

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={13} className="resume-center">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="SYSTEM ENGINEER"
              title="[Activelobby Information Systems Pvt Ltd, Kochi]"
              date="June 2020 - August 2020"
              content={[
                "Assembled the data from various social media platforms using Twitter, Reddit.Interpreted the collected text using word-clouds and various other factors that affect the change of sentiments of youth.",
                " Utilized the data to find the issues using Topic Modelling and Building models using LSTM, BERT to predict the sentiments of the youth.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Pantheon-2019 Technical Fest of BIT Mesra]"
              content={[
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Web Developer [Bitotsav-2020 Technical Fest of BIT Mesra]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            />
          </Col>
          <Col md={12} className="resume-center">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="IMSC MATHS AND COMPUTING [BIT Mesra, Ranchi] "
              date="2018 - Present"
              content={[`CGPA: 6.29)`]}
            />
            <Resumecontent
              title="12TH BOARD [ODM Public School,Odisha]"
              date="2015 - 2017"
              content={["Precentage: 88%"]}
            />
            <Resumecontent
              title="10TH BOARD [ST Mary's School,Odisha] "
              date="2005 - 2015"
              content={["Precentage: 86%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
  //              `Current rank in Spoj ${spojRank}`,
//                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
       </Row>
      </Container>
    </Container>
  );
}

export default Resume;
