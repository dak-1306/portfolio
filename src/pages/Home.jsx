import MainLayout from "../components/layout/MainLayout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/common/Button";
import Card from "../components/common/card.jsx";
import { personalInfo } from "../data/dataPortfolio";
function Home() {
  const { titleH2, avatar, fullName, titleH3, dateOfBirth, address, email } =
    personalInfo;
  return (
    <MainLayout title={titleH2}>
      <div className="flex justify-center items-center flex-grow w-full space-x-10">
        <div
          className="shadow-md rounded-full transition-transform duration-300 transform-gpu motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg hover:ring-4 ring-green-300 focus-within:ring-4"
          style={{ willChange: "transform" }}
        >
          <img
            style={{ width: "300px", height: "300px" }}
            src={avatar}
            alt={`Avatar of ${fullName}`}
            className="rounded-full object-cover"
          />
        </div>
        <Card>
          <h3 className="text-2xl font-bold mb-4">{titleH3}</h3>
          <ul style={{ color: "var(--color-text)" }} className="space-y-3">
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
                className="mr-2 text-purple-500"
                icon={["fas", "envelope"]}
              />
              {email}
            </li>
          </ul>
          <div className="mt-6 space-x-4">
            <Link to="/contact">
              <Button variant="success" size="medium" onClick={() => {}}>
                Liên hệ
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="info" size="medium" onClick={() => {}}>
                Xem thêm
              </Button>
            </Link>
            <Button variant="CV" size="medium" onClick={() => {}}>
              Tải CV
            </Button>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
export default Home;
