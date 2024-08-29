import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hello! My name is <HighlightSpan>Praveen Kumar</HighlightSpan>.
      </p>
      <p>
        I am a <HighlightAlt>full-stack developer</HighlightAlt> based in
        Chapra, Bihar.
      </p>
      <p>
        Currently, I am a{" "}
        <HighlightAlt>
          senior at the Indian Institute of Information Technology, Agartala
          (IIIT-Agartala)
        </HighlightAlt>
        .
      </p>
      <p>
        I am passionate about coding and developing web applications to tackle
        real-world challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
