import React from "react";

import Tooltip from "../components/common/Tooltip";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import { skillsData } from "../data/dataPortfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "../components/layout/Section";

export default function Skills() {
  return (
    <Section title="My Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillsData.map((skill) => {
          const meta = skill;
          return (
            <Card
              key={meta.id}
              className="relative z-0 group bg-white rounded-lg p-5 shadow-md"
              hoverY={-8}
              hoverScale={1.02}
              aria-label={`${meta.name} skill card`}
            >
              <Tooltip label={meta.description}>
                <div className="flex items-center justify-between mb-4 space-x-2">
                  <div className="flex items-center space-x-3">
                    <div
                      className={
                        "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br " +
                        meta.color +
                        " text-white shadow-lg"
                      }
                    >
                      <FontAwesomeIcon icon={meta.icon} className="text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold">{meta.name}</h3>
                  </div>

                  <div className="text-sm font-medium text-gray-700 group-focus:text-gray-900">
                    {meta.level}%
                  </div>
                </div>
              </Tooltip>

              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div
                  className={
                    "h-2 rounded-full bg-gradient-to-r " +
                    meta.color +
                    " transition-all duration-700 ease-out"
                  }
                  style={{ width: `${meta.level}%` }}
                />
              </div>

              <div className="mt-3 text-xs text-gray-500">
                <span className="inline-block mr-2">•</span>
                <span>
                  {meta.years} {meta.years > 1 ? "years" : "year"} experience •{" "}
                  {meta.level > 80
                    ? "Advanced"
                    : meta.level > 60
                    ? "Intermediate"
                    : "Learning"}
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="flex flex-col items-center space-y-4 mt-8">
        <p className="text-blue-600 italic text-center">
          Kỹ năng chỉ là một phần của câu chuyện. Hãy khám phá thêm về những gì
          tôi thực hiện!
        </p>
        <Link to="/#projects">
          <Button variant="success" size="large">
            Xem Dự Án Của Tôi
          </Button>
        </Link>
      </div>
    </Section>
  );
}
