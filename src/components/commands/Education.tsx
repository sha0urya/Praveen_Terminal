import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Tech in Computer Science Engineering",
    desc: "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY AGARTALA || 2021 ~ 2025",
  },
  {
    title: "Senior Secondary",
    desc: "DHARIKSHAN PD. H/S || BSEB Board || 2019 ~ 2021",
  },
  {
    title: "Secondary",
    desc: "CHAPRA CENTRAL SCHOOL || CBSE Board || 2019",
  },
];

export default Education;
