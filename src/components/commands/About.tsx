import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hello! I'm <HighlightSpan>Praveen Kumar</HighlightSpan>.
      </p>
      <p>
        I'm a <HighlightAlt>Software Developer</HighlightAlt> based in Chapra,
        Bihar, with a deep interest in building scalable and elegant digital
        solutions.
      </p>
      <p>
        I recently graduated with a B.Tech in Computer Science and Engineering
        from the{" "}
        <HighlightAlt>
          Indian Institute of Information Technology Agartala (IIIT-Agartala),
          Batch of 2021–2025.
        </HighlightAlt>
      </p>
      <p>
        I'm passionate about solving real-world problems through code and love
        working on modern web applications that make an impact.
      </p>
    </AboutWrapper>
  );
};

export default About;
