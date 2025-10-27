import React from "react";
import Tooltip from "../common/Tooltip";

export default function Timeline({
  projects,
  hoveredIndex,
  onHoverIndexChange,
}) {
  return (
    <div className="w-full mb-12">
      <div className="relative w-full">
        <div className="h-1 bg-gradient-to-r from-green-500 via-green-400 to-yellow-400 rounded-full" />

        {/* use ul (Tooltip -> li) and let Tooltip control visibility via `visible` */}
        <ul className="absolute inset-0 flex items-center justify-between px-2 list-none">
          {projects.map((project, i) => {
            const timeLabel =
              project.time || project.date || project.year || "—";
            const isActive = hoveredIndex === i;
            return (
              <Tooltip
                key={project.title + "-dot-" + i}
                label={timeLabel}
                visible={isActive}
              >
                <button
                  type="button"
                  onMouseEnter={() => onHoverIndexChange(i)}
                  onFocus={() => onHoverIndexChange(i)}
                  onMouseLeave={() => onHoverIndexChange(null)}
                  onBlur={() => onHoverIndexChange(null)}
                  aria-label={timeLabel}
                  className={
                    "w-3 h-3 rounded-full border-2 border-green-500 bg-white transition-transform duration-150 " +
                    (isActive ? "scale-125 bg-green-500" : "")
                  }
                />
              </Tooltip>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
