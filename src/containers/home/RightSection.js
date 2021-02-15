import React from "react"
import styled from "styled-components"
import { SubjectPng } from "../../assets"
import { device } from "../../style"

export const RightSection = styled(({ ...rest }) => {
  return (
    <Container {...rest}>
      <Image src={SubjectPng} />
    </Container>
  )
})``

const Container = styled.div`
  ${device.tabPort} {
    padding: 3rem;
  }
  ${device.phone} {
    padding: 0;
  }
`
const Image = styled.img`
  width: 100%;
`
