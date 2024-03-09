import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./profileCard.css";
import amrit from "../images/amrit.jpg";
import sanjeet from "../images/Sanjeet.jpeg";
import abhijeet from "../images/abhijeet.jpeg";
import wasif from "../images/wasif.jpeg";

const ProfileCard = () => {
  return (
    <>
      <profile>
        <div className="container">
          <div className="cards">
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src={amrit} alt="Amrit image" />
                </div>
                <div className="details">
                  <div className="name">Amrit Mishra</div>
                  <div className="job">Web Developer</div>
                </div>
                <div className="media-icons">
                  <a
                    href="https://www.linkedin.com/in/amrit-mishra-1b8bb518a/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="lg"
                      style={{ color: "#74C0FC" }}
                    />
                  </a>
                  <a href="https://github.com/Amrit5679" target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="lg"
                      style={{ color: "#74C0FC" }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/amrit_mishra_1?igsh=eTAwbHV2djY3eXA2"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="lg"
                      style={{ color: "#74C0FC" }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src={sanjeet} alt="Sanjeet image" />
                </div>
                <div className="details">
                  <div className="name">Sanjeet Kumar</div>
                  <div className="job">Web Developer</div>
                </div>
                <div className="media-icons">
                  <a
                    href="https://www.linkedin.com/in/sanjeet-kumar-84662a1b9/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="lg"
                      style={{ color: "#74C0FC" }}
                    />
                  </a>
                  <a href="https://github.com/Sanjeet76" target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="lg"
                      style={{ color: "#74C0FC" }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/sanjeet_3676?igsh=bzJsdzc2a2g1M2Q2"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="lg"
                      style={{ color: "#74C0FC" }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src={abhijeet} alt="Abhijeet image" />
                </div>
                <div className="details">
                  <div className="name">Abhijeet Dubey</div>
                  <div className="job">Web Developer</div>
                </div>
                <div className="media-icons">
                  <a
                    href="https://www.linkedin.com/in/abhijeet-dhar-dubey/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="lg"
                      style={{ color: "#74C0FC" }}
                    />
                  </a>
                  <a href="https://github.com/abhijeet0901" target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="lg"
                      style={{ color: "#74C0FC" }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/abhijeet_dubey90?igsh=MWpld2hzMTVlcTZzeg=="
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="lg"
                      style={{ color: "#74C0FC" }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="img">
                  <img src={wasif} alt="Wasif image" />
                </div>
                <div className="details">
                  <div className="name">Afaque Wasif</div>
                  <div className="job">Web Developer</div>
                </div>
                <div className="media-icons">
                  <a
                    href="https://www.linkedin.com/in/afaque-wasif-88ba931b4/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="lg"
                      style={{ color: "#74C0FC" }}
                    />
                  </a>
                  <a href="https://github.com/wasifafaque8" target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="lg"
                      style={{ color: "#74C0FC" }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/wasifplayer5?igsh=cjF1ZHR5NTlyZWJp"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="lg"
                      style={{ color: "#74C0FC" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </profile>
    </>
  );
};

export default ProfileCard;
