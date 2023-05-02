import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import HTML from "./images/html-5.svg";
import Javascript from "./images/javascript.svg";
import ReactLogo from "./images/react.svg";
import Node from "./images/nodejs.svg";
import Mongo from "./images/mongodb.svg";
import Git from "./images/git.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
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
              user interfaces based on components. React can be used to develop
              single-page, mobile, or server-rendered applications with
              frameworks like Next.js.
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
              A type of database that stores and retrieves data without needing
              to define its structure first.
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
              programmers collaboratively developing source code during software
              development.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
