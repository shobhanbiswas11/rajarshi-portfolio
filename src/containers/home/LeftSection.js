import React from "react"
import styled from "styled-components"
import { Btn, BtnOutlined } from "./Button"
import { About, Greet, Name, NameAndGreet } from "./NameAndGreet"

export const LeftSection = styled(({ ...rest }) => {
  return (
    <Container {...rest}>
      <NameAndGreet>
        <Greet>Hello I am</Greet>
        <Name>Rajarshi Biswas</Name>
        <About>
          Currently studying Civil Engineering at Jadavpur University.
        </About>
      </NameAndGreet>
      <Btn>Download My Resume</Btn>
      <BtnOutlined>Contact Me</BtnOutlined>
    </Container>
  )
})``

const Container = styled.div`
  font-size: 16px;
`
