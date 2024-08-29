import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>[P-bash]</User>
      {/* @ */}
      <WebsiteName></WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
