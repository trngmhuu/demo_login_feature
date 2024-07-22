import React from 'react';
import { Container, Box, Text, Tabs, Tab, TabList, TabPanel, TabPanels } from '@chakra-ui/react';
import Login from '../components/authentication/Login';
import SignUp from '../components/authentication/SignUp';

const LoginPage = () => {
  return <Container maxWidth="xl" centerContent>
    <Box
      display="flex"
      justifyContent="center"
      padding="3"
      background="white"
      width="100%"
      margin="40px 0px 15px 0px"
      borderRadius="lg"
      borderWidth="1px"
    >
      <Text
        fontSize="4xl"
        fontFamily="Work sans"
        color="black"
      >
        Zola
      </Text>
    </Box>
    <Box
      background="white"
      width="100%"
      padding="4"
      borderRadius="lg"
      borderWidth="1px"
      color="black"
    >
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList mb="1em">
          <Tab width="50%">Đăng nhập</Tab>
          <Tab width="50%">Đăng ký</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login/>
          </TabPanel>
          <TabPanel>
            <SignUp/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </Container>
}

export default LoginPage
