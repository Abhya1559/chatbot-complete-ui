# BeyondChats Chatbot Setup UI/UX

This project demonstrates the creation of a mobile-responsive UI/UX for setting up a chatbot for new businesses using the BeyondChats platform. The UI follows a step-by-step process for user registration, organization setup, and chatbot integration, providing a seamless experience for users looking to implement a chatbot on their website.

## Features

### 1. **User Registration**

-   Users can register by entering their name, email, and password.
-   Google authentication is also available for quick sign-up.
-   Email verification to ensure genuine registrations.

### 2. **Organization Setup**

-   Users can enter their company name, website URL, and company description.
-   **Bonus:** The meta-description is auto-fetched from the company's website.
-   Displays a list of webpages detected from the company’s website, with indicators for scraped and pending pages.
-   Users can view scraped data from any webpage.
-   Option to either wait for chatbot training or move to the next setup section.

### 3. **Chatbot Integration & Testing**

-   Users can test the chatbot on their website through the “Test Chatbot” button.
-   A dummy chatbot appears on the bottom right corner of the website.
-   Users can share feedback if the chatbot isn’t functioning as expected.
-   Two options for integrating the chatbot into the website:
    -   Easy-to-follow instructions for copying and pasting the code.
    -   Option to send integration instructions to the website’s developer.
-   Success screen with confetti UI when the chatbot is integrated successfully.
-   Two options after successful integration:
    -   Explore the admin panel.
    -   Start chatting with the chatbot.
-   Social media sharing buttons to share the success.

### 4. **Fallback UI**

-   If the chatbot integration fails, a UI notifies the user that further steps are required.

## Tech Stack

-   **Frontend:**
    -   React.js
    -   Tailwind CSS (for styling)
    -   JavaScript (for dynamic interactions)
-   **Backend (Assumed for the demo):**
    -   Dummy data for webpage scraping and chatbot training.

## Installation

1.  Clone the repository:
    
    bash
    
    CopyEdit
    
    `git clone https://github.com/yourusername/beyondchats-chatbot-setup.git` 
    
2.  Navigate to the project directory:
    
    bash
    
    CopyEdit
    
    `cd beyondchats-chatbot-setup` 
    
3.  Install the necessary dependencies:
    
    bash
    
    CopyEdit
    
    `npm install` 
    
4.  Run the project locally:
    
    bash
    
    CopyEdit
    
    `npm run dev` 
    
    Visit `http://localhost:3000` to view the project in action.
    

## Demo

A demo of the chatbot setup process can be found in the **`demo`** branch or by visiting the deployed version (if applicable).

## Contributing

Feel free to fork this repository and submit issues or pull requests. Contributions are welcome!
