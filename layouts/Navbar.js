import { Box, Container, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box py={3} bgColor="teal.400" color="white" boxShadow="md" position="sticky" top={0} zIndex={50}>
      <Container maxW="container.lg">
        <Heading size="md">Device Scraper</Heading>
      </Container>
    </Box>
  );
};

export default Navbar;
