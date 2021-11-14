import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import theme from '../theme'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ChakraProvider resetCSS theme={theme}>
    <Head>
      <title>Olivia</title>
      <link rel="shortcut icon" href="/favicon.ico" />

      {/* Meta properties */}
      <meta property="og:image" content="/repository-open-graph-template.png" />
      <meta property="og:site_name" content="Olivia" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Olivia" />
      <meta property="og:url" content="https://olivia.swiss" />
      <meta property="og:description" content="💁‍♀️Your new best friend powered by deep learning, made in Switzerland." />
      <meta name="twitter:image:src" content="/repository-open-graph-template.png" />
      <meta name="twitter:site" content="https://olivia.swiss" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Olivia" />
      <meta name="twitter:description" content="💁‍♀️Your new best friend powered by deep learning, made in Switzerland." />
      <meta name="theme-color" content="#FBDFF0" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
    </Head>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default App
