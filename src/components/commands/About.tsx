import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Praveen Kumar</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack developer</HighlightAlt> based in Chapra, Bihar.
      </p>
      <p>
        Currently in <HighlightAlt>junior year at INDIAN INSTITUTE OF INFORMATION TECHNOLOGY AGARTALA</HighlightAlt> (IIIT-AGARTALA).
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing web applications to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
