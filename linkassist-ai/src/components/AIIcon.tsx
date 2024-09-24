import React from "react";

interface AIIconProps {
  onClick: () => void;
}

const AIIcon: React.FC<AIIconProps> = ({ onClick }) => {
  return (
    <div className="ai-icon" onClick={onClick}>
      <img src="icons/ai-icon.svg" alt="AI Icon" className="cursor-pointer" />
    </div>
  );
};

export default AIIcon;
