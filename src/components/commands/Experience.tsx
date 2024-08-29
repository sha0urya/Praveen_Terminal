import {
  ExpIntro,
  ExpList,
  ExpCompany,
  ExpRole,
  ExpLocation,
  ExpPeriod,
  ExpDescription,
} from "../styles/Experience.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="experience">
      <ExpIntro>Here is my professional experience!</ExpIntro>
      {experience.map(({ company, role, location, period, description }) => (
        <ExpList key={company}>
          <ExpCompany>{company}</ExpCompany>
          <ExpRole>{role}</ExpRole>
          <ExpLocation>{location}</ExpLocation>
          <ExpPeriod>{period}</ExpPeriod>
          <ExpDescription>
            {description.map((desc, index) => (
              <div key={index}>- {desc}</div>
            ))}
          </ExpDescription>
        </ExpList>
      ))}
    </Wrapper>
  );
};

const experience = [
  {
    company: "Buyeazzy",
    role: "Software Development Intern",
    location: "Mysore, Karnataka (In-Office)",
    period: "May 2024 – July 2024",
    description: [
      "Worked on the front end using ReactJs and NextJs, utilizing Rsuite for component design.",
      "Developed common components such as modals, date pickers, and implemented useForm, Pagination, custom hooks, and Debouncing.",
      "Developed a web view for rate management with location-based rates, resolved inventory issues, and led UI development for product management.",
      "Also made enhanced order visibility features including tracking.",
    ],
  },
  {
    company: "Online Jaoo",
    role: "Software Development Intern",
    location: "Remote",
    period: "Aug 2024 – Present",
    description: [
      "Optimized SQL queries, enhanced security with user session management.",
      "Developed React.js components with module CSS and global constants for efficient updates.",
    ],
  },
];

export default Experience;
