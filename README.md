# LinkAssist AI Chrome Extension

This is a Chrome extension designed to assist LinkedIn users by generating AI-powered replies. The extension is built using React, TypeScript, and Tailwind CSS.

## Demo

Below is a demonstration of the AI reply extension in action:

![Demo GIF](./public/demo.gif)

## Features

1. **AI Icon Display:** The AI icon appears when the user focuses on the LinkedIn message input field.
2. **Icon Disappearance:** The icon disappears when the input field is no longer focused.
3. **Modal Display:** Clicking the icon opens a center-aligned modal.
4. **Modal Closure:** Clicking outside the modal closes it.
5. **Command Input:** Users can input a command in the modal.
6. **Static Response Generation:** Clicking "Generate" displays a static AI-generated reply.
7. **Text Insertion:** Clicking "Insert" places the response directly into the message input field.

## Installation

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/your-username/linkedin-ai-reply-extension.git
   ```

2. Install the required dependencies:
    ```
    npm install
    ```
3. Build the extension:
    ```
    npm run build
    ```
4. Open Chrome, navigate to **chrome://extensions/**, and enable Developer Mode.
5. Click "Load Unpacked" and select the **dist** folder in the cloned repository.
7. The extension should now be visible in your Chrome extensions list.

##   Usage
1. Navigate to LinkedIn and focus on a message input field.
2. Click the AI icon when it appears.
3. Use the modal to input a command and generate a response.
4. Insert the generated response into the LinkedIn message.

## Tech Stack
- React: Used for building the extension's UI.
- TypeScript: Provides type safety for the code.
- Tailwind CSS: Used for styling the extension.
- WXT Framework: Utilized to build the Chrome extension.

## Future Enhancements
If given more time, I would focus on improving error handling, making the AI-generated text more dynamic, and adding personalization features for responses.
