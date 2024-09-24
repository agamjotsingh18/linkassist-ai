export const insertGeneratedText = (text: string) => {
    const messageInput = document.querySelector(".msg-form__contenteditable");
  
    if (messageInput) {
      (messageInput as HTMLElement).textContent = text;
    }
  };
  