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
    company: "Privafy",
    role: "Software Engineer Intern",
    location: "Bengaluru, Karnataka (In-Office)",
    period: "Mar 2025 – Present",
    description: [
      "Built a secure, large-scale file explorer UI for Google Cloud Storage and MinIO, with read-only access, lazy loading, paginated folder traversal, and secure downloads via pre-signed URLs and JWT-based APIs.",
      "Engineered an end-to-end cloud infrastructure security and observability system using Python, Golang, and Kubernetes—featuring weekly vulnerability scans, real-time alerts (Slack, Google Chat), internal CLI tools (PostgresDB, SurrealDB), and flag-based enterprise listings.",
      "Optimized performance and scalability with Redis and Go cache, reducing redundant DB calls across services and enabling efficient data exports and historical tracking via CLI.",
      "Developed a custom API Explorer tool allowing real-time API testing from a single page with support for authorization headers, dynamic request inputs, and developer-friendly response visibility.",
    ],
  },
  {
    company: "Fixerra",
    role: "Software Development Intern",
    location: "Mumbai, Maharashtra (Remote)",
    period: "Sep 2024 – Nov 2024",
    description: [
      "Developed scalable backend architecture and RESTful APIs for a real-time Product Dashboard tailored for NBFCs and banks.",
      "Enabled features such as key metrics monitoring, KYC verification tracking, payment status updates, and issue resolution workflows.",
      "Implemented microservices with a focus on modularity and maintainability, using best practices in backend engineering.",
      "Conducted thorough unit testing and performance tuning to ensure reliable, efficient, and production-ready services.",
    ],
  },
  {
    company: "Buyeazzy",
    role: "Software Development Intern",
    location: "Mysore, Karnataka (In-Office)",
    period: "May 2024 – July 2024",
    description: [
      "Built front-end interfaces using React.js and Next.js, leveraging RSuite for responsive UI component design.",
      "Developed reusable components including modals, date pickers, and implemented utilities like useForm, pagination, custom hooks, and input debouncing.",
      "Created a location-aware rate management web view, resolved inventory-related issues, and led UI development for the product management module.",
      "Enhanced order visibility features by implementing real-time tracking and status updates.",
    ],
  },
];

export default Experience;
