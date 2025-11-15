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

  // thời gian giữa các ảnh (ms) và thời gian chuyển mượt (match với CSS duration)
  const INTERVAL_MS = 3500;
  const FADE_MS = 700;

  // chỉ giữ index hiện tại của ảnh (chỉ hiển thị 1 ảnh tại 1 thời điểm)
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!groupAvatar.length) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % groupAvatar.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [groupAvatar.length]);

  // Component slideshow: render tất cả ảnh chồng nhau, chỉ ảnh active có opacity 100%
  const Slideshow = ({ size = "w-44 h-44" }) => {
    if (!groupAvatar || !groupAvatar.length) return null;
    return (
      <div className={`relative ${size} overflow-hidden rounded-full`}>
        {groupAvatar.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`avatar-${i}`}
            className={
              `absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out ` +
              (i === index ? `opacity-100` : `opacity-0 pointer-events-none`)
            }
            style={{ transitionDuration: `${FADE_MS}ms` }}
            aria-hidden={i === index ? "false" : "true"}
          />
        ))}
      </div>
    );
  };

  return (
    // Section bọc toàn bộ nội dung của About; innerClass p-0 bg-transparent để không thay đổi layout nội dung
    <Section title="About Me">
      <div className="flex justify-center p-4 space-x-10">
        <div className="relative flex items-center">
          {/* Hiển thị 1 CardCircle chứa slideshow (chỉ 1 ảnh hiển thị, chuyển mượt mỗi INTERVAL_MS) */}
          <CardCircle size="w-52 h-52" className="mx-6">
            <Slideshow size="w-52 h-52" />
          </CardCircle>
        </div>

        <div>
          <p className="slogan mb-4 bg-white rounded-lg shadow p-4">
            <span>{slogan}</span>
          </p>

          <ul>
            <li className="slogan-item mb-2 bg-white rounded-lg shadow p-3">
              <span>
                <strong>Education:</strong> {education}
              </span>
            </li>
            <li className="slogan-item mb-2 bg-white rounded-lg shadow p-3">
              <span>
                <strong>Experience:</strong> {experience}
              </span>
            </li>
            <li className="slogan-item mb-2 bg-white rounded-lg shadow p-3">
              <span>
                <strong>Passion:</strong> {passion}
              </span>
            </li>
            <li className="slogan-item mb-2 bg-white rounded-lg shadow p-3">
              <span>
                <strong>My Value:</strong> {myValue}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center mt-4 space-y-4">
        <p className="text-blue-600 italic text-center">
          Bạn có tò mò về những gì tôi có thể làm không?
        </p>
        <Link to="/skills">
          <Button variant="info" size="large">
            my skills
          </Button>
        </Link>
      </div>
    </Section>
  );
}
