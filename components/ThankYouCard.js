import React from "react";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";

const ThankYouCard = ({ rating }) => {
  return (
    <>
      <Head>
        <title>Thank you for your rating!</title>
      </Head>
      <section>
        <Flex
          align="center"
          justify="center"
          bg="hsl(228, 11%, 9%)"
          w="375px"
          h="100vh"
          color="white"
          fontFamily="Overpass"
        >
          <Flex
            gap="10px"
            p="20px"
            align="center"
            justify="center"
            w="80%"
            bg="hsl(215, 22%, 15%)"
            borderRadius="10"
            direction="column"
          >
            <img
              src="illustration-thank-you.svg"
              alt="illustration-thank-you"
            />
            <Flex
              bgColor="hsl(213, 22%, 22%)"
              align="center"
              justify="center"
              p="7px"
              borderRadius="15px"
              color="hsl(25, 97%, 53%)"
            >
              You selected {rating} out of 5
            </Flex>
            <Flex fontSize={24} fontWeight="700">
              Thank you!
            </Flex>
            <Flex textAlign="center" fontSize={15} fontWeight="400">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </Flex>
          </Flex>
        </Flex>
      </section>
    </>
  );
};

export default ThankYouCard;
