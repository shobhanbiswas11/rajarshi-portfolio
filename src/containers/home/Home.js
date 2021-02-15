import React from "react"
import styled from "styled-components"
import { color, device, flex } from "../../style"
import { LeftSection } from "./LeftSection"
import { RightSection } from "./RightSection"

export default function Home() {
  return (
    <Container>
      <Content>
        <LeftSection />
        <RightSection />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${color.bgColor};
`

const Content = styled.div`
  ${flex()}
  height : 100vh;
  margin: 0 auto;
  padding: 10rem;
  ${device.laptop} {
    padding: 6rem;
  }
  ${device.tabPort} {
    flex-flow: column;
  }
  ${device.phone} {
    justify-content: flex-start;
  }

  ${LeftSection} {
    ${device.tabPort} {
      order: 2;
    }
  }

  ${RightSection} {
    flex: auto;
    ${device.tabPort} {
      order: 1;
      flex: 0;
      margin-bottom: 8rem;
    }
  }
`
