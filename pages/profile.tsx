import styled from "styled-components";
import { Hero } from "../types/hero";

const Container = styled.div`
  display: flex;
`;

export default function Profile() {
  const hero: Hero = {
    email: "",
    location: {
      city: "",
      country: "",
    },
    name: {
      first: "",
      last: "",
      second: "",
    },
    profilePicture: "",
    bids: [],
    bio: "",
    experience: [],
    linkedin: "",
    portfolio: [],
    quests: [],
  };

  return (
    <Container>
      {hero?.name?.first}
      {hero?.name?.last}
    </Container>
  );
}
