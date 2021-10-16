import { Flex, Image } from '@chakra-ui/react'

import React from 'react'

const HomeBG = (): JSX.Element => (
  <Flex 
    alignItems="center"
    height="100vh"
    filter="blur(50px)"
    zIndex="-100"
  >
    <Image 
      src="background.svg"
      width="100%"
      height="auto"
      top="0"
      left="0"
    />
  </Flex>
)

const FooterBG = () => (
  <Flex 
    alignItems="flex-end"
    height="50vh"
    filter="blur(50px)"
    zIndex="-100"
  >
    <Image 
      src="background-footer.svg"
      width="100%"
      height="auto"
      top="0"
      left="0"
      filter="blur(50px)"
    />
  </Flex>
)

const Background = (): JSX.Element => (
  <Flex 
    direction="column"
    position="absolute"
    width="100%"
  >
    <HomeBG />
    <FooterBG />
  </Flex>
)

export default Background