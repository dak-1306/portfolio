import MainLayout from "../components/layout/MainLayout";
import Button from "../components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "../components/common/Tooltip";
import { contact } from "../data/dataPortfolio";
function Contact() {
  const { phone, email, linkedin, github, facebook, twitter } = contact;
  return (
    <MainLayout title="Contact Me">
      <div className="flex ">
        <form className="bg-white p-8 rounded shadow-md mb-4 flex flex-col ">
          <label className="mb-4 flex flex-col">
            Name:
            <input
              className="border border-gray-300 p-2 rounded"
              type="text"
              name="name"
              required
            />
          </label>
          <label className="mb-4 flex flex-col">
            Email:
            <input
              className="border border-gray-300 p-2 rounded"
              type="email"
              name="email"
              required
            />
          </label>
          <label className="mb-4 flex flex-col">
            Message:
            <textarea
              className="border border-gray-300 p-2 rounded"
              name="message"
              required
            ></textarea>
          </label>
          <Button type="submit" variant="success" size="medium">
            Send
          </Button>
        </form>
        <div className="flex flex-col items-center p-8 rounded-md mb-4 ml-8 bg-white">
          <p>you can also contact me by</p>
          <ul>
            <li className="text-lg text-blue-600 mt-4 ">
              <FontAwesomeIcon
                className="text-gray-600 hover:text-gray-800"
                icon="fa-solid fa-phone"
              />
              {phone}
              <FontAwesomeIcon
                icon="fa-solid fa-copy"
                className="text-gray-600 ml-2 cursor-pointer"
              />
            </li>
            <li className="text-lg mt-4 text-blue-600">
              <FontAwesomeIcon
                className="text-gray-600 hover:text-gray-800"
                icon="fa-solid fa-envelope"
              />
              {email}
              <FontAwesomeIcon
                icon="fa-solid fa-copy"
                className="text-gray-600 ml-2 cursor-pointer"
              />
            </li>
          </ul>
          <ul className="flex space-x-4 mt-4">
            <li>
              <Tooltip label="LinkedIn">
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    className="text-blue-600 hover:text-blue-800"
                    icon="fa-brands fa-linkedin"
                  />
                </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip label="GitHub">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    className="text-gray-800 hover:text-black"
                    icon="fa-brands fa-github"
                  />
                </a>
              </Tooltip>
            </li>

            <li>
              <Tooltip label="Facebook">
                <a href={facebook} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    className="text-blue-600 hover:text-blue-800"
                    icon="fa-brands fa-facebook"
                  />
                </a>
              </Tooltip>
            </li>
            <li>
              <Tooltip label="Twitter">
                <a href={twitter} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    className="text-blue-600 hover:text-blue-800"
                    icon="fa-brands fa-twitter"
                  />
                </a>
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
export default Contact;
