import React from "react";
import { techItems } from "../../data/techstack";
import "./Techstack.css";

function Techstack() {
  return (
    <div className="techstack-container">
      <div className="techstack-slider">
        {techItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="techstack-icon" style={{ color: item.color }}>
              <Icon />
            </div>
          );
        })}
        {/* duplication pour scroll infini */}
        {techItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx + techItems.length} className="techstack-icon" style={{ color: item.color }}>
              <Icon />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Techstack;
