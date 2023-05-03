import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import HTML from "./images/html-5.svg";
import Javascript from "./images/javascript.svg";
import ReactLogo from "./images/react.svg";
import Node from "./images/nodejs.svg";
import Mongo from "./images/mongodb.svg";
import Git from "./images/git.svg";
import Headshot from "./images/Headshot.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="background">
      <div className="about-me-container">
        <div className="col-lg-3 col-12 profilepic-and-badges">
          <Figure>
            <Figure.Image
              width={300}
              height={316}
              roundedCircle={true}
              alt="Profile Picture"
              src={Headshot}
            />
            <Figure.Caption>
              <Row className="social-media-icons">
                <Col className="github">
                  <a target="_blank" href="https://github.com/ebro1230">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </Col>
                <Col className="linkedIn">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/ebro1230/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>{" "}
                </Col>
                <Col className="email">
                  <a target="_blank" href="mailto:ebro1230(at)gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>{" "}
                </Col>
              </Row>
            </Figure.Caption>
          </Figure>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-9 intro-text">
          <h5>Hi, I'm Ed Brown, an aspiring Full-Stack Developer. </h5>
          <br />
          <h5>
            Over the past 8 years, I've been working as a Biomedical Engineer,
            but decided it was time to make a career change and pursue something
            I am more passionate about.
          </h5>
          <br />
          <h5>
            From my previous experience in Biomedical Engineering, I have a
            strong foundation in problem-solving, critical thinking, schedule
            management, and attention to detail. These skills are easily
            transferable and applicable to Full-Stack Development. I'm confident
            that my background, combined with my newfound passion for Full-Stack
            Development, will allow me to bring a unique perspective to any team
            or project.
          </h5>
          <br />
          <h5>
            I'm excited to take on the new challenges that Full-Stack
            Development brings, while I continue building my knowledge and
            skills in this ever-changing and evolving field.
          </h5>
        </div>
      </div>
      <div className="tech-skills-container">
        <div className="row techtitle">
          <h3>My Tech Skills</h3>
        </div>
        <div className="row techcards">
          <Card className="techskill">
            <Card.Img variant="top" src={HTML} />
            <Card.Body>
              <Card.Title>HTML / CSS / UX UI</Card.Title>
              <Card.Text>
                The standard markup language for documents designed to be
                displayed in a web browser and is used for structuring and
                presenting content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="techskill">
            <Card.Img variant="top" src={Javascript} />
            <Card.Body>
              <Card.Title>Javascript</Card.Title>
              <Card.Text>
                An object oriented programming language designed to make web
                development easier and more attractive.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="techskill">
            <Card.Img variant="top" src={ReactLogo} />
            <Card.Body>
              <Card.Title>React</Card.Title>
              <Card.Text>
                A free and open-source front-end JavaScript library for building
                user interfaces based on components. React can be used to
                develop single-page, mobile, or server-rendered applications
                with frameworks like Next.js.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="techskill">
            <Card.Img variant="top" src={Node} />
            <Card.Body>
              <Card.Title>Node.js</Card.Title>
              <Card.Text>
                A cross-platform, open-source server that acts as a back-end
                JavaScript runtime environment.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="techskill">
            <Card.Img variant="top" src={Mongo} />
            <Card.Body>
              <Card.Title>(NO)SQL DB</Card.Title>
              <Card.Text>
                A type of database that stores and retrieves data without
                needing to define its structure first.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="techskill">
            <Card.Img variant="top" src={Git} />
            <Card.Body>
              <Card.Title>Git</Card.Title>
              <Card.Text>
                A distributed version control system that tracks changes in any
                set of computer files, usually used for coordinating work among
                programmers collaboratively developing source code during
                software development.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="my-projects-div">
        <div className="row projecttitle">
          <h3>My Projects</h3>
        </div>
      </div>
      <div className="contact-me-div">
        <div className="row contacttitle">
          <h3>Contact Me</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
