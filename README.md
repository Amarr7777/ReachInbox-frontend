# ReachInbox

## Overview

ReachInbox is a user interface component designed for seamless navigation through different sections of an application. It features a sidebar menu with icon-based navigation, theming support, and a logout functionality.

## Features

- **Theming**: Supports light and dark modes, dynamically changing the logo and background colors to match the selected theme.
- **Icon-Based Navigation**: Each menu item is represented by an icon, with hover effects that display a tooltip for enhanced user experience.
- **Logout Functionality**: Includes a logout button that clears the `authToken` from local storage, effectively logging the user out.
- **Dynamic Content**: Allows switching between different sections of the application by updating the index state, enabling dynamic content rendering.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Material-UI Icons**: A library of customizable Material Design icons used for the sidebar menu items.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/reachinbox.git
    ```

2. Navigate to the project directory:

    ```bash
    cd reachinbox
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

## Usage

The redirect-url should be changed to local url if you're running it locally navigate to src/components/login/LoginCard.jsx

```jsx
const redirectUri = 'http://localhost:5173/onebox';
