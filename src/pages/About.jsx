import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import CardCircle from "../components/common/CardCircle";
import Section from "../components/layout/Section";
import { aboutMe } from "../data/dataPortfolio";

export default function About() {
  const {
    slogan,
    education,
    experience,
    passion,
    myValue,
    groupAvatar = [],
  } = aboutMe;

  const INTERVAL_MS = 3500;
  const FADE_MS = 700;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!groupAvatar.length) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % groupAvatar.length),
      INTERVAL_MS
    );
    return () => clearInterval(id);
  }, [groupAvatar.length]);

  const Slideshow = ({ size = "w-44 h-44" }) => {
    if (!groupAvatar.length) return null;
    return (
      <div className={`relative ${size} overflow-hidden rounded-full`}>
        {groupAvatar.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`avatar ${i + 1}`}
            loading="lazy"
            decoding="async"
            className={
              `absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out ` +
              (i === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none")
            }
            style={{ transitionDuration: `${FADE_MS}ms` }}
            aria-hidden={i === index ? "false" : "true"}
          />
        ))}
      </div>
    );
  };

  return (
    <Section title="About Me">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-shrink-0">
          <CardCircle size="w-60 h-60" className="mx-6">
            <Slideshow size="w-60 h-60" />
          </CardCircle>
        </div>

        <div className="flex-1">
          <div className="slogan mb-4">
            <span className="slogan__text">{slogan}</span>
          </div>

          <ul role="list" className="mt-2">
            <li className="slogan-item">
              <div className="content">
                <strong>Education:</strong>{" "}
                <span className="meta-muted ml-2">{education}</span>
              </div>
            </li>

            <li className="slogan-item">
              <div className="content">
                <strong>Experience:</strong>{" "}
                <span className="meta-muted ml-2">{experience}</span>
              </div>
            </li>

            <li className="slogan-item">
              <div className="content">
                <strong>Passion:</strong>{" "}
                <span className="meta-muted ml-2">{passion}</span>
              </div>
            </li>

            <li className="slogan-item">
              <div className="content">
                <strong>My Value:</strong>{" "}
                <span className="meta-muted ml-2">{myValue}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center mt-6">
        <p className="text-blue-600 italic text-center mb-3">
          Bạn có tò mò về những gì tôi có thể làm không?
        </p>
        <Link to="/#skills">
          <Button variant="info" size="large">
            My skills
          </Button>
        </Link>
      </div>
    </Section>
  );
}
