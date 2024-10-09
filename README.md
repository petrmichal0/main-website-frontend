# Main Website Frontend

## Project Title and Description
Main Website Frontend is a portfolio web application built using modern web technologies. It includes sections for showcasing personal projects, skills, experiences, and providing a way to contact me through a form.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/a606a869-84c8-4cf3-ae7f-f09a2f204119" width="700" alt="WeatherApp Demo">

## Table of Content
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Backend Information](#backend-information)
- [Screenshots](#screenshots)
- [Demo (link)](#demo)
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
    <th>About</th>
    <th>Technologies</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <a href="https://github.com/user-attachments/assets/2d360bc8-d14d-4d2a-8b2a-30d3786a1363" target="_blank">
        <img src="https://github.com/user-attachments/assets/2d360bc8-d14d-4d2a-8b2a-30d3786a1363" width="300" height="300" alt="Homepage">
      </a>
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <a href="https://github.com/user-attachments/assets/4b273dfc-95e0-499a-9f60-75c6d49f24ca" target="_blank">
        <img src="https://github.com/user-attachments/assets/4b273dfc-95e0-499a-9f60-75c6d49f24ca" width="300" height="300" alt="About">
      </a>
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <a href="https://github.com/user-attachments/assets/67cd1c5d-72a7-4ee9-8416-b0b8fce89db9" target="_blank">
        <img src="https://github.com/user-attachments/assets/67cd1c5d-72a7-4ee9-8416-b0b8fce89db9" width="300" height="300" alt="Technologies">
      </a>
    </td>
  </tr>
  <tr>
    <th>Experience</th>
    <th>Courses</th>
    <th>Forgot Password</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <a href="https://github.com/user-attachments/assets/45719f1c-341e-4a21-987c-ebf5e1c02aec" target="_blank">
        <img src="https://github.com/user-attachments/assets/45719f1c-341e-4a21-987c-ebf5e1c02aec" width="300" height="300" alt="Experience">
      </a>
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <a href="https://github.com/user-attachments/assets/8d8c6bcd-07a7-4832-a31c-cdbe09d88c2a" target="_blank">
        <img src="https://github.com/user-attachments/assets/8d8c6bcd-07a7-4832-a31c-cdbe09d88c2a" width="300" height="300" alt="Courses">
      </a>
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <a href="https://github.com/user-attachments/assets/1a33df49-2968-4d7e-9893-08636e3545a2" target="_blank">
        <img src="https://github.com/user-attachments/assets/1a33df49-2968-4d7e-9893-08636e3545a2" width="300" height="300" alt="Forgot Password">
      </a>
    </td>
  </tr>
  <tr>
    <th>Contact</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <a href="https://github.com/user-attachments/assets/fb708f1b-436a-4d88-bd60-9696d2a20c12" target="_blank">
        <img src="https://github.com/user-attachments/assets/fb708f1b-436a-4d88-bd60-9696d2a20c12" width="300" height="300" alt="Contact">
      </a>
    </td>
  </tr>
</table>

## Demo (link)

Check out the live demo of the application [here](https://web-final-v1.netlify.app/).


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
