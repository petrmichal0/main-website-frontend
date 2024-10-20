## Project Title and Description
Main Website Frontend is a portfolio web application built using modern web technologies. It includes sections for showcasing personal projects, skills, experiences, and providing a way to contact me through a form.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/649f4696-6304-47ad-8e13-ad3fdf433827" width="700" alt="WeatherApp Demo">

## Table of Content
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Backend Information](#backend-information)
- [Screenshots](#screenshots)
- [Demo (link)](#demo-link)
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
      <a href="https://github.com/user-attachments/assets/b6753479-f2e2-41e9-94b5-4201fe14376f" target="_blank">
        <img src="https://github.com/user-attachments/assets/b6753479-f2e2-41e9-94b5-4201fe14376f" width="300" height="300" alt="About">
      </a>
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <a href="https://github.com/user-attachments/assets/4cc3ff05-2575-45ed-a8df-68c59b2ec1a0" target="_blank">
        <img src="https://github.com/user-attachments/assets/4cc3ff05-2575-45ed-a8df-68c59b2ec1a0" width="300" height="300" alt="Technologies">
      </a>
    </td>
  </tr>
  <tr>
    <th>Experience</th>
    <th>Courses</th>
    <th>Projects</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <a href="https://github.com/user-attachments/assets/22c5df81-a862-4273-9453-d43d9147c257" target="_blank">
        <img src="https://github.com/user-attachments/assets/22c5df81-a862-4273-9453-d43d9147c257" width="300" height="300" alt="Experience">
      </a>
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <a href="https://github.com/user-attachments/assets/04851b57-27a2-4f5d-bdc8-f37057f60ab2" target="_blank">
        <img src="https://github.com/user-attachments/assets/04851b57-27a2-4f5d-bdc8-f37057f60ab2" width="300" height="300" alt="Courses">
      </a>
    </td>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <a href="https://github.com/user-attachments/assets/1e61e4db-2841-4fae-b45b-059380e467a7" target="_blank">
        <img src="https://github.com/user-attachments/assets/1e61e4db-2841-4fae-b45b-059380e467a7" width="300" height="300" alt="Forgot Password">
      </a>
    </td>
  </tr>
  <tr>
    <th>Contact</th>
  </tr>
  <tr>
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;">
      <a href="https://github.com/user-attachments/assets/ae1d35a4-ef09-443f-b5b9-8f050546e906" target="_blank">
        <img src="https://github.com/user-attachments/assets/ae1d35a4-ef09-443f-b5b9-8f050546e906" width="300" height="300" alt="Contact">
      </a>
    </td>
  </tr>
</table>

## Demo Link

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

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the LICENSE file for details.
