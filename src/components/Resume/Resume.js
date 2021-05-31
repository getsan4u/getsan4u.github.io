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

    axios
      .get(uri)
      .then((res) => {

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
          <Col md={12} className="resume-center">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="SYSTEM ENGINEER [Activelobby Information Systems Pvt Ltd, Kochi]"
              date="May 2019 - Present"
              content={[
                "Managing Amazon Web Services (EC2, Light Sail, RDS, VPC, S3, Route53, IAM, CloudWatch).",
                "Managing servers such as VPS(Linux/Windows), Shared(Linux/Windows), Mail and DNS.",
                "Provisioned and Managed control panels such as cPanel/WHM, Plesk, Webmin.",
                "Troubleshooting problem tickets and service tickets.",
                "Installed and Managed Web Servers ( Apache, Nginx, and IIS), DB Server (MySQL and MSSQL), Mail Server(SmarterMail and Exim).",
                "Installed and Configure CMS servers (WordPress, Magento, Drupal).",
                "Live server migration from CPanel to Cpanel, Plesk to Plesk, data center to cloud solutions (AWS & Azure), and other Hosted Services which include both Linux and Windows environments.",
                "Create/Managing buckets on S3 (CLI, uploaded & stored DB and Website backup.",
                "Manipulation of shell scripts and Scheduling jobs using crontab",
                "Creating/Managing AMI/Snapshots/Volumes, Upgrade/downgrade AWS resources.",
                "Managed/Maintained Virtuozzo Hypervisor, SolusVM.",
                "Installed and Configured MySQL master-slave replication.",
                "Worked/Managed Service on Azure, GCP IBM, CLOUD, Digital Ocean.",
                "R&D on Git, Docker, Jenkins, Ansible, Kubernetes.",

                  ]}
            />
            <Resumecontent
                          title=" SYSTEM ADMINISTRATOR (INTERN) [Spectrum SoftTehc Solution Pvt Ltd, Kochi]"
                          date="October 2018 - March 2019"
                          content={[
                            "Setting up EC2 instances and configuring webservers for sample application deployment using S3, RDS, IAM, VPC, CloudWatch.",
                            "Configuring Linux Servers for basic administrative works and user management practices in RHEL, Ubuntu, CentOS.",
                            "Completed CCNA training and manual configuration of Cisco Routers and Switches.",

                              ]}
            />

          </Col>
          <Col md={12} className="resume-center">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.Tech In Computer Science And Engineering [M.E.S College Of Engineering,Kuttipuram] "
              date="2014 - 2018"
              content={[`CGPA: 6.29`]}
              />
            <Resumecontent
              title="AISSCE (12TH BOARD) [MES International School, Pattambi] "
              date="2014"
              content={["Precentage: 75%"]}
            />
            <Resumecontent
            title="AISCE (10TH BOARD) [MES International School, Pattambi] "
            date="2012"
            content={["Precentage: 76%"]}
            />

            <h3 className="resume-title">Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "",
                "",
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
