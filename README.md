# Main Website Frontend

## Project Title and Description
Main Website Frontend is a portfolio web application built using modern web technologies. It includes sections for showcasing personal projects, skills, experiences, and providing a way to contact me through a form.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/1fcb7ca9-055c-420f-8551-143f5fe0c84b" width="700" alt="WeatherApp Demo">

## Table of Content
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Backend Information](#backend-information)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Third-Party Libraries](#third-party-libraries)
- [License](#license)

## Features
- Animated UI using Framer Motion.
- TypeScript support for type-safe code.
- Contact form with email integration.
- Responsive design for mobile and desktop.
- Project showcase with filtering by technology.

## Installation

### Prerequisites
- **Node.js**: v20.x
- **npm**: v10.x

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/petrmichal0/main-website-frontend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd main-website-frontend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
To start the application, run the following command:
```bash
npm run dev
```

After starting, go to [http://localhost:3000](http://localhost:3000) in your web browser.

## Backend Information

The backend for this project is hosted at the following URL:

- **Backend API:** [https://my-weatherapp-backend-1a24a5724dcc.herokuapp.com/](https://my-weatherapp-backend-1a24a5724dcc.herokuapp.com/)

The source code for the backend is available on GitHub:

- **Backend Repository:** [https://github.com/petrmichal0/weatherapp-backend](https://github.com/petrmichal0/weatherapp-backend)

All API endpoints and detailed documentation on how to interact with the backend are provided in the backend repository. If you want to see the available API requests and how to use them, please visit the backend repository's README or relevant documentation files.

## Screenshots

<table>
  <tr>
    <th>Homepage</th>
    <th>Log in</th>
    <th>Sign up</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <img src="https://github.com/user-attachments/assets/ebc13b3e-5d93-42d6-a4df-0a2d7786fa7f" width="300" height="300" alt="Homepage">
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <img src="https://github.com/user-attachments/assets/8caf62b6-ad12-4a9d-8416-4488a2c42a38" width="300" height="300" alt="Log in">
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <img src="https://github.com/user-attachments/assets/89a12d6e-819d-4d50-9b14-d0c41e3a0d67" width="300" height="300" alt="Sign up">
    </td>
  </tr>
  <tr>
    <th>After login</th>
    <th>Favorite Cities</th>
    <th>Forgot Password</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <img src="https://github.com/user-attachments/assets/88388bee-9c3e-4d90-bca5-f1882629e163" width="300" height="300" alt="After login">
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <img src="https://github.com/user-attachments/assets/0004a9ee-5aea-47f8-adc0-c90904e2e066" width="300" height="300" alt="Favorite Cities">
    </td>
     <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <img src="https://github.com/user-attachments/assets/2d753ae4-a80d-45b4-bf15-ab976a4eac17" width="300" height="300" alt="Forgot Password">
    </td>
  </tr>
</table>

## Project Structure

```css
main-website-frontend/
├── public/
│   ├── CV.pdf
│   ├── chatgpt.png
├── src/
│   ├── assets/
│   │   ├── projects/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Technologies.tsx
│   ├── constants/
│   │   ├── data.ts
│   ├── App.tsx
│   ├── main.tsx
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.js
```

## Technologies Used

[![React Badge](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)](#)
[![TypeScript Badge](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&labelColor=black&logo=typescript&logoColor=3178C6)](#)
[![Framer Motion Badge](https://img.shields.io/badge/-FramerMotion-BC4A97?style=for-the-badge&labelColor=black&logo=framer&logoColor=BC4A97)](#)
[![TailwindCSS Badge](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=for-the-badge&labelColor=black&logo=tailwindcss&logoColor=38B2AC)](#)

## Third-Party Libraries

- **React Icons:** Provides icons used in the application.
- **React Typed:** Provides the dynamic typing effect in the Hero section.
- **React Scroll:** Enables smooth scrolling between sections.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
