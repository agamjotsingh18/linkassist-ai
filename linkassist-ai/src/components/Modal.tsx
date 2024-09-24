import React, { useState } from "react";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [generatedResponse, setGeneratedResponse] = useState("");

  const handleGenerate = () => {
    setGeneratedResponse("Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.");
  };

  const handleInsert = () => {
    const messageInput = document.querySelector(".msg-form__contenteditable");
    if (messageInput) {
      (messageInput as HTMLElement).textContent = generatedResponse;
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">Generate AI Response</h2>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border p-2 mb-4"
          placeholder="Type your command..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleGenerate}
        >
          Generate
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleInsert}
        >
          Insert
        </button>
        <button
          className="absolute top-2 right-2 text-black"
          onClick={onClose}
        >
          X
        </button>
        {generatedResponse && (
          <div className="mt-4 p-2 bg-gray-100 rounded">{generatedResponse}</div>
        )}
      </div>
    </div>
  );
};

export default Modal;
