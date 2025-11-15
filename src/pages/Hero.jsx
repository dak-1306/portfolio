import Section from "../components/layout/Section";
import { personalInfo } from "../data/dataPortfolio";
import Card from "../components/common/Card";
import CardCircle from "../components/common/CardCircle";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
  const { titleH3, avatar, fullName, dateOfBirth, address, email } =
    personalInfo;
  return (
    <>
      {/* HERO */}
      <Section id="hero" title="Welcome to My Portfolio" className="pt-16">
        <div className="flex justify-center items-center py-8 space-x-10">
          <CardCircle size="w-70 h-70">
            <img
              src={avatar}
              alt={fullName}
              className="w-full h-full object-cover rounded-full"
            />
          </CardCircle>

          <Card className="max-w-xl">
            <h2 className="text-2xl font-bold mb-2">{titleH3}</h2>
            <ul className="text-sm text-gray-600 space-y-4">
              <li>
                <FontAwesomeIcon
                  className="mr-2 text-blue-500"
                  icon={["fas", "user"]}
                />
                {fullName}
              </li>
              <li>
                <FontAwesomeIcon
                  className="mr-2 text-pink-500"
                  icon={["fas", "birthday-cake"]}
                />
                {dateOfBirth}
              </li>
              <li>
                <FontAwesomeIcon
                  className="mr-2 text-green-500"
                  icon={["fas", "map-marker-alt"]}
                />
                {address}
              </li>
              <li>
                <FontAwesomeIcon
                  className="mr-2 text-yellow-500"
                  icon={["fas", "envelope"]}
                />
                <a href={`mailto:${email}`} className="hover:underline">
                  {email}
                </a>
              </li>
            </ul>

            <div className="mt-4 flex gap-3">
              <Link to="/#contact">
                <Button variant="success" size="md">
                  Liên hệ
                </Button>
              </Link>
              <Link to="/#about">
                <Button variant="info" size="md">
                  Xem thêm
                </Button>
              </Link>
              <Button variant="CV" size="medium" onClick={() => {}}>
                Tải CV
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
