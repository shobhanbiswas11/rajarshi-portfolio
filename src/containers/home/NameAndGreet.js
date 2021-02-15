import styled from "styled-components"
import { device, grey } from "../../style"

export const NameAndGreet = styled.div`
  margin-bottom: 6rem;
  text-align: center;
  ${device.phone} {
    margin-bottom: 3rem;
  }
`
export const Greet = styled.span`
  font-family: "Cormorant", sans-serif;
  font-size: 5.2rem;
  font-weight: 300;
  color: ${grey.light};
  position: relative;
  left: 8rem;
  ${device.laptop} {
    font-size: 4rem;
  }
  ${device.tabLand} {
    font-size: 3rem;
    top: -1rem;
    left: 6rem;
  }
  ${device.phone} {
    font-size: 2rem;
    position: unset;
  }
`
export const Name = styled.h1`
  font-family: "Cormorant", sans-serif;
  font-size: 13.2rem;
  font-weight: 700;
  white-space: nowrap;
  margin: -3rem 0 -1rem;

  ${device.laptop} {
    font-size: 10rem;
  }
  ${device.tabLand} {
    font-size: 8rem;
  }
  ${device.phone} {
    font-size: 5rem;
    margin: 0;
    margin-bottom: 0.5rem;
  }
`
export const About = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 2.4rem;
  font-weight: 300;
  color: ${grey.light};
  position: relative;
  left: 19rem;

  ${device.laptop} {
    font-size: 1.8rem;
    left: 15rem;
  }

  ${device.tabLand} {
    font-size: 1.4rem;
    left: 12rem;
  }
  ${device.phone} {
    font-size: 1.2rem;
    position: unset;
  }
`
