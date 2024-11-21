import { render, screen } from "@testing-library/react";
import Courses from "../../../components/Courses";

jest.mock("../../../constants/data", () => ({
  COURSES: [
    {
      year: "2024",
      courses: [
        {
          iconKey: ["React", "TypeScript"],
          text: "React & TypeScript - Udemy",
          link: "https://www.udemy.com/course/react-typescript/",
        },
        {
          iconKey: ["NodeJS", "MongoDB"],
          text: "Node.js & MongoDB - Udemy",
          link: "https://www.udemy.com/course/nodejs-mongodb/",
        },
      ],
    },
    {
      year: "2023",
      courses: [
        {
          iconKey: "JavaScript",
          text: "JavaScript Basics - Udemy",
          link: "https://www.udemy.com/course/javascript-basics/",
        },
        {
          iconKey: ["HTML", "CSS"],
          text: "HTML & CSS - Udemy",
          link: "https://www.udemy.com/course/html-css/",
        },
      ],
    },
  ],
}));

describe("Courses component", () => {
  test("renders heading with 'Courses'", () => {
    render(<Courses />);
    const heading = screen.getByRole("heading", { name: /Courses/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders all course groups with correct years", () => {
    render(<Courses />);

    const years = ["2024", "2023"];
    years.forEach((year) => {
      const yearElement = screen.getByText(year);
      expect(yearElement).toBeInTheDocument();
    });
  });

  test("renders all courses with their text", () => {
    render(<Courses />);

    const courses = [
      "React & TypeScript - Udemy",
      "Node.js & MongoDB - Udemy",
      "JavaScript Basics - Udemy",
      "HTML & CSS - Udemy",
    ];
    courses.forEach((courseText) => {
      const courseElement = screen.getByText(courseText);
      expect(courseElement).toBeInTheDocument();
    });
  });

  test("renders links for courses with valid href attributes", () => {
    render(<Courses />);

    const links = [
      "https://www.udemy.com/course/react-typescript/",
      "https://www.udemy.com/course/nodejs-mongodb/",
      "https://www.udemy.com/course/javascript-basics/",
      "https://www.udemy.com/course/html-css/",
    ];

    const linkElements = screen.getAllByRole("link", { name: /LINK/i });

    expect(linkElements).toHaveLength(links.length);

    linkElements.forEach((linkElement, index) => {
      expect(linkElement).toHaveAttribute("href", links[index]);
    });
  });

  test("renders icons for each course", () => {
    render(<Courses />);

    const expectedIcons = [
      "React",
      "TypeScript",
      "NodeJS",
      "MongoDB",
      "JavaScript",
      "HTML",
      "CSS",
    ];

    expectedIcons.forEach((icon) => {
      const iconElement = screen.getByLabelText(icon);
      expect(iconElement).toBeInTheDocument();
    });
  });
});
