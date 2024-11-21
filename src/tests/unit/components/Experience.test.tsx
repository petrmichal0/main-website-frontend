import { render, screen } from "@testing-library/react";
import Experience from "../../../components/Experience";
import { EXPERIENCES } from "../../../constants/data";

jest.mock("../../../constants/data", () => ({
  EXPERIENCES: [
    {
      year: "2022 - Present",
      role: "Administrative Worker",
      company: "TJMac s.r.o.",
      description: `Managed and optimized the company's e-shop. Communicated with clients and solved technical requirements. Created materials for marketing purposes. Ensured smooth office operations and supported the team.`,
    },
    {
      year: "2021 - 2022",
      role: "Team Leader",
      company: "Bidli s.r.o.",
      description: `Led a team of specialists in the energy sector. Planned and monitored results. Coordinated projects and introduced technical innovations. Supported the team in solving technological challenges.`,
    },
    {
      year: "2013 - 2021",
      role: "Team Leader",
      company: "Twenty-one s.r.o.",
      description: `Grew from operator to Team Leader. Led a team and managed projects. Provided technical coordination of projects. Planned and tracked project progress. Estimated capacity and budgets. Collaborated across the company to implement processes. Provided feedback and mentoring to team members.`,
    },
  ],
}));

describe("Experience component", () => {
  test("renders heading with 'Experience'", () => {
    render(<Experience />);
    const heading = screen.getByRole("heading", { name: /Experience/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders all experience years", () => {
    render(<Experience />);

    const years = EXPERIENCES.map((exp) => exp.year);
    years.forEach((year) => {
      const yearElement = screen.getByText(year);
      expect(yearElement).toBeInTheDocument();
    });
  });
});

test("renders all roles and companies", () => {
  render(<Experience />);

  const roles = EXPERIENCES.map((exp) => exp.role);

  roles.forEach((role) => {
    const roleElements = screen.getAllByText(role);
    roleElements.forEach((roleElement) => {
      expect(roleElement).toBeInTheDocument();
    });
  });

  const companies = EXPERIENCES.map((exp) => exp.company);

  companies.forEach((company) => {
    // getByText je zde správný, protože názvy společností jsou unikátní
    const companyElement = screen.getByText(company);
    expect(companyElement).toBeInTheDocument();
  });
});

test("renders all descriptions", () => {
  render(<Experience />);
  const descriptions = EXPERIENCES.map((exp) => exp.description);

  descriptions.forEach((description) => {
    const descriptionElement = screen.getByText(description);
    expect(descriptionElement).toBeInTheDocument();
  });
});
