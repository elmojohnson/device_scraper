import React from "react";
import useScraper from "../../hooks/useScraper";

import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Center,
  CircularProgress,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";

const EndpointItem = ({ title, url }) => {
  const toast = useToast();

  const downloadJSON = () => {};

  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
              <Box as="span" flex="1" textAlign="left">
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {isExpanded && (
            <AccordionPanel pb={4} bg="gray.100">
              <HStack justifyContent="space-between" mb={4}>
                <Text flex={1}>{url}</Text>
                <ButtonGroup size="sm" colorScheme="teal" spacing={2}>
                  <Button
                    variant="outline"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        process.env.NEXT_PUBLIC_BASE_URL + url
                      );
                      toast({
                        title: "Copied to clipboard",
                        status: "success",
                        isClosable: true,
                      });
                    }}
                  >
                    Copy Endpoint
                  </Button>
                </ButtonGroup>
              </HStack>
              <EndpointData url={url} />
            </AccordionPanel>
          )}
        </>
      )}
    </AccordionItem>
  );
};

const EndpointData = ({ url }) => {
  const { devices, isLoading } = useScraper(url);

  return (
    <Box>
      {isLoading ? (
        <Center>
          <CircularProgress isIndeterminate color="teal.500" size="30px" />
        </Center>
      ) : (
        <Grid
          templateColumns={{
            lg: "repeat(4, 1fr)",
            md: "repeat(3, 1fr)",
            sm: "repeat(2, 1fr)",
          }}
          gap={2}
        >
          {devices.map((device, i) => {
            return (
              <GridItem
                key={i}
                w="100%"
                h="10"
                bg="white"
                borderWidth="thin"
                _hover={{ borderColor: "teal.500" }}
              >
                <Flex
                  w="full"
                  h="full"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Link
                    href={"https://www.gsmarena.com/res.php3?sSearch=" + device}
                  >
                    <Text
                      _hover={{ textDecor: "underline", color: "teal.500" }}
                    >
                      {device}
                    </Text>
                  </Link>
                </Flex>
              </GridItem>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default EndpointItem;
