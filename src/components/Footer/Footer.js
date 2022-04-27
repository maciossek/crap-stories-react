import styled from "@emotion/styled";

const FooterContainer = styled.div`
  text-align: center;
`;

export default function Footer() {
  const currentDate = new Date();

  return (
    <FooterContainer>
      <small>© the_maciossek {currentDate.getFullYear()}</small>
    </FooterContainer>
  );
}
