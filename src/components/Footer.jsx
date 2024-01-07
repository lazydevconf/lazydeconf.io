import styled from "styled-components";

const StyledFooter = styled.footer`
  min-height: var(--min-footer-height);
  border-top: 1px solid #495057;
  a {
    color: #45413c;

    &:hover {
      color: #fbfdff;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter className="d-flex align-items-center justify-content-center p-2">
    </StyledFooter>
  );
}
