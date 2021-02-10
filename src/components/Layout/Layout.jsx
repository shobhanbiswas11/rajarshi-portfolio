import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../../style"
import "../../style/css/global.css"

export default function Layout({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
