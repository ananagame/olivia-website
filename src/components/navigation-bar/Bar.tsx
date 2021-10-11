import { ContactButton, Links } from './Links'
import { Flex, Image } from '@chakra-ui/react'

import Burger from './Burger'
import React from 'react'

const Logo = (): JSX.Element => (
  <Image 
    src="olivia-character.svg"
    alt="Olivia character waving" 
    h={50}
    w={50}
  />
)

const NavigationBar = (): JSX.Element => {
  return <Flex
    w="100%"
    h="8vh"
    p={{ base: '0 5vw', md: '0 15vw' }}
    alignItems="center"
    justifyContent="space-between"
    borderBottom="solid 1px #CFCFCF"
  >
    <Burger />
    <Logo />
    
    <Links />
    
    <ContactButton />
  </Flex>
}

export default NavigationBar