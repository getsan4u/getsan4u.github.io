import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanjid Salam </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            <br /> Systems engineer with 2+ years of hands-on experience in provisioning, managing & monitoring installed servers while ensuring the highest level of servers & infrastructure availability.
            <br />
            <br /> Skilled in Linux, Windows, AWS, GCP, Azure, Docker, Git, C, C++, Python, MySQL, System/Server Administration, Networking, Virtualization & IoT.
            <br />
            <br /> Strong Professional Degree, Bachelor of Technology in Computer Science and Engineering from Calicut Unversity, Kerala.
            <br />
            Apart from work life, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Article & Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New things
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Be the best version of yourself!"{" "}
          </p>
          <footer className="blockquote-footer">sanjid</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
