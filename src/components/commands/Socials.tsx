import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkRedirect,
  generateTabs,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Socials: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "socials")) {
      socials.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5", "6", "7"]) ? (
      <Usage cmd="socials" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro>Here are my social links</ProjectsIntro>
      {socials.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {url}</CmdDesc>
        </CmdList>
      ))}
      <Usage cmd="socials" marginY />
    </HelpWrapper>
  );
};

const socials = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/sha0urya",
    tab: 12,
  },
  {
    id: 2,
    title: "Leetcode",
    url: "https://leetcode.com/u/praveenkr21uics/",
    tab: 10,
  },
  {
    id: 3,
    title: "CodeChef",
    url: "https://www.codechef.com/users/star5r",
    tab: 10,
  },
  {
    id: 4,
    title: "One-on-One Meeting",
    url: "https://calendly.com/singhsatyam312005/30min",
    tab: 0,
  },
  {
    id: 5,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/sha0urya/",
    tab: 10,
  },
  {
    id: 6,
    title: "Twitter",
    url: "https://twitter.com/sha0urya2",
    tab: 11,
  },
  {
    id: 7,
    title: "Instagram",
    url: "https://instagram.com/sha0urya",
    tab: 9,
  },
];

export default Socials;
