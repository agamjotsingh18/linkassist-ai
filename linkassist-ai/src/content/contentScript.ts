const init = () => {
  const messageInput = document.querySelector(".msg-form__contenteditable");
  
  if (messageInput) {
    messageInput.addEventListener("focus", () => {
      const aiIcon = document.createElement("div");
      aiIcon.id = "ai-icon";
      aiIcon.style.position = "absolute";
      aiIcon.style.cursor = "pointer";
      aiIcon.innerHTML = '<img src="icons/ai-icon.svg" alt="AI Icon" />';
      
      messageInput.parentElement?.appendChild(aiIcon);
      
      aiIcon.addEventListener("click", () => {
        const event = new CustomEvent("openModal");
        window.dispatchEvent(event);
      });
    });
  }
};

init();
