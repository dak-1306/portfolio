import MainLayout from "../components/layout/MainLayout";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import { aboutMe } from "../data/dataPortfolio";
function About() {
  const { slogan, education, experience, passion, myValue, groupAvatar } =
    aboutMe;
  return (
    <MainLayout title="About Me">
      <div className="flex justify-center p-4 space-x-10">
        <div className="grid grid-cols-2 gap-4 relative">
          <img
            className="w-50 h-50 object-cover rounded-full hover:scale-105 transition-transform duration-300 hover:ring-4 ring-green-300"
            src={groupAvatar[2]}
            alt="Group member 3"
          />
          <img
            className="w-50 h-50 object-cover rounded-full hover:scale-105 transition-transform duration-300 hover:ring-4 ring-green-300"
            src={groupAvatar[0]}
            alt="Group member 1"
          />
          <img
            className="w-50 h-50 object-cover rounded-full absolute top-30 left-25 hover:scale-105 transition-transform duration-300 hover:ring-4 ring-green-300"
            src={groupAvatar[1]}
            alt="Group member 2"
          />
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
    </MainLayout>
  );
}
export default About;
