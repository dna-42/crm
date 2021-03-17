import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Head from "next/head"

import config from "../config/config.json"

const theme = config.theme

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <head>
        <title>CRM - Padoquinha</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Rochester&display=swap" rel="stylesheet"/>
      </head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
