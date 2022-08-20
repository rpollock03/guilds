import { useFirebaseApp } from "reactfire";
import styled from "styled-components";

const HeaderContainer = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-size: 1.5rem;
  padding: 1rem;
`;

export default function Header(): JSX.Element {
  const firebase = useFirebaseApp();
  return (
    <HeaderContainer>
      Firebase Project ID: {firebase.options.projectId}
    </HeaderContainer>
  );
}
