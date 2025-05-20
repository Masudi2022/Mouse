import React from 'react';
import { Container, Row, Col, Card, ListGroup, Badge, ProgressBar } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaGlobe, FaGithub, FaCode, FaServer, FaDatabase, FaRobot, FaTools, FaLanguage, FaUserTie, FaLightbulb, FaProjectDiagram } from 'react-icons/fa';

const Resume = () => {
  return (
    <Container className="my-5 resume-container">
      <Card className="shadow-lg">
        {/* Header Section */}
        <Card.Header className="bg-primary text-white">
          <Row className="align-items-center">
            <Col md={8}>
              <h1 className="mb-1">Masud Salum Mrisho</h1>
              <p className="mb-0">Zanzibar, Tanzania</p>
            </Col>
            <Col md={4} className="text-md-end">
              <ListGroup variant="flush" className="bg-transparent">
                <ListGroup.Item className="bg-transparent text-white border-0 py-1">
                  <FaEnvelope className="me-2" /> salummasud54@gmail.com
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-white border-0 py-1">
                  <FaPhone className="me-2" /> 0777407574
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-white border-0 py-1">
                  <FaGlobe className="me-2" /> 
                  <a href="https://www.sanifutech.com" className="text-white">sanifutech.com</a>
                </ListGroup.Item>
                <ListGroup.Item className="bg-transparent text-white border-0 py-1">
                  <FaGithub className="me-2" /> 
                  <a href="https://github.com/Masudi2022/" className="text-white">github.com/Masudi2022</a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card.Header>

        <Card.Body>
          {/* Objective Section */}
          <section className="mb-4">
            <h2 className="text-primary border-bottom pb-2">Objective</h2>
            <p>
              Passionate and driven tech student at The State University of Zanzibar, seeking a challenging opportunity to apply my skills in software development, AI, and project management. Eager to contribute to innovative projects and grow professionally within a dynamic tech-driven organization.
            </p>
          </section>

          {/* Education Section */}
          <section className="mb-4">
            <h2 className="text-primary border-bottom pb-2">Education</h2>
            <Card className="mb-3">
              <Card.Body>
                <Row>
                  <Col md={9}>
                    <h5>The State University of Zanzibar</h5>
                    <h6 className="text-muted">Bachelor of Information Technology Application and Management</h6>
                    <p className="mb-1">Expected Graduation: 2025</p>
                    <p className="text-muted small">Relevant Coursework: Software Engineering, Web Development, AI & Machine Learning, Networking, Project Management</p>
                  </Col>
                  <Col md={3} className="text-md-end">
                    <Badge bg="success" className="fs-6">2019 - 2025</Badge>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </section>

          {/* Skills Section */}
          <section className="mb-4">
            <h2 className="text-primary border-bottom pb-2">Technical Skills</h2>
            <Row>
              <Col md={6}>
                <Card className="mb-3">
                  <Card.Body>
                    <h5><FaCode className="me-2 text-primary" /> Languages & Frameworks</h5>
                    <div className="d-flex flex-wrap gap-2">
                      <Badge pill bg="secondary">Python</Badge>
                      <Badge pill bg="secondary">JavaScript</Badge>
                      <Badge pill bg="secondary">HTML</Badge>
                      <Badge pill bg="secondary">CSS</Badge>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="mb-3">
                  <Card.Body>
                    <h5><FaServer className="me-2 text-primary" /> Web Development</h5>
                    <div className="d-flex flex-wrap gap-2">
                      <Badge pill bg="info">Django</Badge>
                      <Badge pill bg="info">React</Badge>
                      <Badge pill bg="info">Vite</Badge>
                      <Badge pill bg="info">REST APIs</Badge>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="mb-3">
                  <Card.Body>
                    <h5><FaDatabase className="me-2 text-primary" /> Database Management</h5>
                    <div className="d-flex flex-wrap gap-2">
                      <Badge pill bg="warning" text="dark">MySQL</Badge>
                      <Badge pill bg="warning" text="dark">PostgreSQL</Badge>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="mb-3">
                  <Card.Body>
                    <h5><FaRobot className="me-2 text-primary" /> AI & NLP</h5>
                    <div className="d-flex flex-wrap gap-2">
                      <Badge pill bg="danger">Rasa</Badge>
                      <Badge pill bg="danger">Custom GPT</Badge>
                      <Badge pill bg="danger">NLP</Badge>
                      <Badge pill bg="danger">Chatbot Development</Badge>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="mb-3">
                  <Card.Body>
                    <h5><FaTools className="me-2 text-primary" /> Tools & DevOps</h5>
                    <div className="d-flex flex-wrap gap-2">
                      <Badge pill bg="success">Docker</Badge>
                      <Badge pill bg="success">Git</Badge>
                      <Badge pill bg="success">GitHub</Badge>
                      <Badge pill bg="success">VS Code</Badge>
                      <Badge pill bg="success">Node-RED</Badge>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="mb-3">
                  <Card.Body>
                    <h5><FaLanguage className="me-2 text-primary" /> Languages</h5>
                    <div>
                      <p className="mb-1">English <small className="text-muted">(Fluent)</small></p>
                      <ProgressBar now={90} label={`${90}%`} className="mb-2" />
                      <p className="mb-1">Swahili <small className="text-muted">(Native)</small></p>
                      <ProgressBar now={100} label={`${100}%`} variant="success" />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          {/* Projects Section */}
          <section className="mb-4">
            <h2 className="text-primary border-bottom pb-2">Projects</h2>
            
            <Card className="mb-3">
              <Card.Body>
                <Row>
                  <Col md={9}>
                    <h5>SanifuTech – Founder & Lead Developer</h5>
                    <a href="https://www.sanifutech.com" className="text-decoration-none">sanifutech.com</a>
                    <ul className="mt-2">
                      <li>Leading a startup focused on AI, healthtech, chatbots, and networking solutions.</li>
                      <li>Developed a chatbot system for health-related services that helps users identify diseases, gives first-aid instructions, and shows nearby pharmacies using GIS integration.</li>
                    </ul>
                  </Col>
                  <Col md={3} className="text-md-end">
                    <Badge bg="primary" className="fs-6">2022 - Present</Badge>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <h5>Smart Farm System (Final Year Project)</h5>
                <ul>
                  <li>Designed a smart agriculture system using sensors and an edge gateway to monitor and process farm data.</li>
                  <li>Simulated communication protocols (HTTP to MQTT) and edge processing using Node-RED.</li>
                  <li>Implemented cloud storage and dashboard UI for monitoring.</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <h5>AI Chatbot Platform (MVP)</h5>
                <ul>
                  <li>Built a no-code platform for WhatsApp-based AI chatbots</li>
                  <li>Enabled small businesses to register and deploy chatbots with no coding required.</li>
                  <li>Integrated Django backend with Rasa and React frontend via Docker Compose.</li>
                </ul>
              </Card.Body>
            </Card>
          </section>

          {/* Experience Section */}
          <section className="mb-4">
            <h2 className="text-primary border-bottom pb-2">Experience</h2>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={9}>
                    <h5>Freelance Full-Stack Developer</h5>
                    <p className="text-muted">Remote</p>
                    <ul>
                      <li>Delivered full-stack web solutions for local businesses in Zanzibar.</li>
                      <li>Specialized in building scalable Django + React apps with secure Docker deployment.</li>
                    </ul>
                  </Col>
                  <Col md={3} className="text-md-end">
                    <Badge bg="info" className="fs-6">2023 - Present</Badge>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </section>

          {/* Soft Skills Section */}
          <section>
            <h2 className="text-primary border-bottom pb-2">Soft Skills</h2>
            <Row>
              <Col md={6}>
                <ListGroup horizontal className="mb-2">
                  <ListGroup.Item className="d-flex align-items-center">
                    <FaUserTie className="me-2 text-primary" /> Team Leadership
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <FaUserTie className="me-2 text-primary" /> Collaboration
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={6}>
                <ListGroup horizontal className="mb-2">
                  <ListGroup.Item className="d-flex align-items-center">
                    <FaLightbulb className="me-2 text-primary" /> Critical Thinking
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <FaLightbulb className="me-2 text-primary" /> Problem Solving
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={6}>
                <ListGroup horizontal className="mb-2">
                  <ListGroup.Item className="d-flex align-items-center">
                    <FaUserTie className="me-2 text-primary" /> Self-Learner
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <FaUserTie className="me-2 text-primary" /> Fast Adapter
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={6}>
                <ListGroup horizontal className="mb-2">
                  <ListGroup.Item className="d-flex align-items-center">
                    <FaProjectDiagram className="me-2 text-primary" /> Project Planning
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <FaProjectDiagram className="me-2 text-primary" /> Time Management
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </section>
        </Card.Body>

        <Card.Footer className="text-center bg-light">
          <small className="text-muted">Last updated: {new Date().toLocaleDateString()}</small>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Resume;