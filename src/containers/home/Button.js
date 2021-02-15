import styled from "styled-components"
import { color, device } from "../../style"

const btnColor = color.primary[400]
export const Btn = styled.button`
  background-color: ${btnColor};
  outline: none;
  border: none;
  border-radius: 1rem;
  padding: 1rem 2rem;
  color: white;
  font-size: 2rem;
  text-transform: uppercase;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 3rem;
  }

  ${device.phone} {
    font-size: 1.4rem;
  }

  ${device.phone} {
    display: block;
    margin: 0 auto;
    &:not(:last-child) {
      margin-bottom: 1rem;
      margin-right: auto;
    }
  }
`
export const BtnOutlined = styled(Btn)`
  background-color: transparent;
  color: ${btnColor};
  border: 1px solid ${btnColor};
`
