import MainLayout from "../components/layout/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/common/Button";

import { personalInfo } from "../data/dataPortfolio";
function Home() {
  const { titleH1, avatar, fullName, titleH3, dateOfBirth, address, email } =
    personalInfo;
  return (
    <MainLayout title={titleH1}>
      <div className="flex justify-center items-center flex-grow w-full space-x-10">
        <div className="bg-gray-200 p-2 shadow rounded-full">
          <img
            src={avatar}
            alt={`Avatar of ${fullName}`}
            className="w-100 h-100 rounded-full object-cover"
          />
        </div>
        <div className="bg-white shadow rounded-lg p-6 max-w-md">
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
            <Button variant="success" size="medium" onClick={() => {}}>
              Liên hệ
            </Button>
            <Button variant="CV" size="medium" onClick={() => {}}>
              Tải CV
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
export default Home;
