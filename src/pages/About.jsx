import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  ProgressBar,
} from "react-bootstrap";
import { FaDownload } from "react-icons/fa";

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "80px 0",
    background:
      "linear-gradient(135deg, #0f172a 0%, #111827 40%, #0b1021 100%)",
    color: "#e5e7eb",
  },
  glowOne: {
    position: "absolute",
    top: "-10%",
    right: "-10%",
    width: 320,
    height: 320,
    background:
      "radial-gradient(closest-side, rgba(59,130,246,.25), rgba(59,130,246,0))",
    filter: "blur(30px)",
    borderRadius: "50%",
  },
  glowTwo: {
    position: "absolute",
    bottom: "-15%",
    left: "-10%",
    width: 380,
    height: 380,
    background:
      "radial-gradient(closest-side, rgba(16,185,129,.18), rgba(16,185,129,0))",
    filter: "blur(36px)",
    borderRadius: "50%",
  },
  header: {
    textAlign: "center",
    marginBottom: 42,
  },
  title: {
    fontWeight: 800,
    fontSize: "clamp(28px, 4vw, 40px)",
    letterSpacing: ".3px",
    color: "#f8fafc",
  },
  subtitle: {
    opacity: 0.75,
    maxWidth: 720,
    margin: "10px auto 0",
    lineHeight: 1.6,
  },
  card: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    backdropFilter: "blur(6px)",
    borderRadius: 20,
    transition: "transform .25s ease, box-shadow .25s ease",
  },
  cardHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
  },
  avatarWrap: {
    display: "grid",
    placeItems: "center",
    padding: 18,
  },
  avatar: {
    width: "100%",
    maxWidth: 220,
    borderRadius: 16,
    boxShadow: "0 12px 28px rgba(0,0,0,.35)",
  },
  chipRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 14,
  },
  chip: {
    background: "rgba(148,163,184,.15)",
    border: "1px solid rgba(148,163,184,.2)",
    color: "#e2e8f0",
    padding: "6px 10px",
    borderRadius: 999,
    fontSize: 12,
  },
  stat: {
    background: "rgba(2,6,23,.35)",
    border: "1px solid rgba(255,255,255,.06)",
    borderRadius: 14,
    padding: 14,
    textAlign: "center",
    color: "rgba(255,255,255,0.55)",
  },
  statNum: {
    fontSize: 24,
    fontWeight: 800,
    color: "#f8fafc",
  },
  statLabel: {
    opacity: 0.7,
    fontSize: 12,
    marginTop: 2,
  },
  ctas: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },
};

const TechChip = ({ children }) => <span style={styles.chip}>{children}</span>;

const Stat = ({ value, label }) => (
  <div style={styles.stat}>
    <div style={styles.statNum}>{value}</div>
    <div style={styles.statLabel}>{label}</div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-5 bg-gradient-custom text-white">
      <span style={styles.glowOne} />
      <span style={styles.glowTwo} />
      <Container>
        <header style={styles.header}>
          <div style={{ display: "inline-block", marginBottom: 10 }}>
            <Badge bg="primary" pill>
              About
            </Badge>
          </div>
          <h2 style={styles.title}>
            Hi, I’m Subin — a Software Engineer focused on clean UI and robust
            systems.
          </h2>
          <p style={styles.subtitle}>
            I build fast, accessible and scalable web apps. My toolkit spans
            React, Node and modern cloud tooling, and I love turning complex
            ideas into smooth, usable experiences.
          </p>
        </header>

        <Row className="g-4 align-items-stretch">
          {/* Profile Card */}
          <Col md={5} lg={4}>
            <Card
              style={styles.card}
              className="h-100"
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, styles.cardHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, {
                  transform: "",
                  boxShadow: "",
                })
              }
            >
              <div style={styles.avatarWrap}>
                <img
                  src="/assets/images/portfolio-picture.jpg"
                  alt="Subin Bajracharya portrait"
                  style={styles.avatar}
                />
              </div>
              <Card.Body>
                <Card.Title
                  className="mb-2"
                  style={{ color: "#f8fafc", fontWeight: 700 }}
                >
                  Subin Bajracharya
                </Card.Title>
                <Card.Subtitle className="mb-3" style={{ color: "#94a3b8" }}>
                  Software Engineer · React / Node
                </Card.Subtitle>
                <div style={styles.chipRow}>
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "PostgreSQL",
                    "GraphQL",
                    "Bootstrap",
                    "Jest",
                    "Docker",
                    "AWS",
                  ].map((t) => (
                    <TechChip key={t}>{t}</TechChip>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Bio + Metrics */}
          <Col md={7} lg={8}>
            <Card
              style={styles.card}
              className="h-100"
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, styles.cardHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, {
                  transform: "",
                  boxShadow: "",
                })
              }
            >
              <Card.Body>
                <Row className="g-3">
                  <Col lg={8} data-aos="fade-right">
                    <Card.Title style={{ color: "#f8fafc", fontWeight: 700 }}>
                      What I do
                    </Card.Title>
                    <Card.Text style={{ color: "#cbd5e1", lineHeight: 1.8 }}>
                      Results-driven engineer with strong UI chops, testing
                      habits and an e‑commerce focus. I enhance web performance,
                      implement SEO, and craft responsive interfaces with React
                      and modern JavaScript. I’m comfortable across the stack,
                      shipping quality features end‑to‑end and collaborating
                      closely with product and design.
                    </Card.Text>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, minmax(0,1fr))",
                        gap: 12,
                        margin: "14px 0 24px",
                      }}
                    >
                      <Stat value="5+" label="Years experience" />
                      <Stat value="25+" label="Projects delivered" />
                      <Stat value="99%" label="On‑time delivery" />
                    </div>

                    <div style={styles.ctas} data-aos="fade-up">
                      <a
                        href="/subin_resume.pdf"
                        download="subin_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light"
                      >
                        View Full Resume <FaDownload />
                      </a>
                    </div>
                  </Col>

                  <Col lg={4} data-aos="fade-left">
                    <Card.Title style={{ color: "#f8fafc", fontWeight: 700 }}>
                      Core Skills
                    </Card.Title>
                    <div
                      className="d-grid gap-3"
                      style={{ color: "rgba(255, 255, 255, 0.55)" }}
                    >
                      <div>
                        <div className="d-flex justify-content-between mb-1">
                          <small>React & UI</small>
                          <small>Advanced</small>
                        </div>
                        <ProgressBar
                          now={90}
                          animated
                          label={""}
                          visuallyHidden
                        />
                      </div>
                      <div>
                        <div className="d-flex justify-content-between mb-1">
                          <small>Node & APIs</small>
                          <small>Advanced</small>
                        </div>
                        <ProgressBar
                          now={85}
                          animated
                          label={""}
                          visuallyHidden
                        />
                      </div>
                      <div>
                        <div className="d-flex justify-content-between mb-1">
                          <small>Databases</small>
                          <small>Proficient</small>
                        </div>
                        <ProgressBar
                          now={75}
                          animated
                          label={""}
                          visuallyHidden
                        />
                      </div>
                      <div>
                        <div className="d-flex justify-content-between mb-1">
                          <small>Testing</small>
                          <small>Proficient</small>
                        </div>
                        <ProgressBar
                          now={70}
                          animated
                          label={""}
                          visuallyHidden
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Highlights row */}
        <Row className="g-4 mt-1">
          {[
            {
              title: "E‑commerce ready",
              text: "Checkout flows, product catalogs, payments and SEO foundations baked‑in.",
            },
            {
              title: "Performance minded",
              text: "Code‑splitting, memoization and profiling to keep interactions snappy.",
            },
            {
              title: "Collaboration",
              text: "Work closely with designers and stakeholders, with clear communication.",
            },
          ].map((item) => (
            <Col md={4} key={item.title} data-aos="fade-up">
              <Card
                style={styles.card}
                onMouseEnter={(e) =>
                  Object.assign(e.currentTarget.style, styles.cardHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.currentTarget.style, {
                    transform: "",
                    boxShadow: "",
                  })
                }
              >
                <Card.Body>
                  <Card.Title style={{ color: "#f8fafc", fontWeight: 700 }}>
                    {item.title}
                  </Card.Title>
                  <Card.Text style={{ color: "#cbd5e1" }}>
                    {item.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;
