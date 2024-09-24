import React, { useState } from "react";
import AIIcon from "../components/AIIcon";
import Modal from "../components/Modal";

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <AIIcon onClick={() => setModalOpen(true)} />
      {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default App;
