import React from "react";
import Head from "next/head";
import { Flex, Text, Button } from "@chakra-ui/react";

const RatingCard = ({ isActive, onRatingChange, onFormSubmit }) => {
  const feedbackScore = [1, 2, 3, 4, 5];

  const handleChange = (index) => {
    onRatingChange(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    onFormSubmit(true);
  };

  return (
    <>
      <Head>
        <title>Rate us!</title>
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
            align="start"
            justify="center"
            w="80%"
            bg="hsl(215, 20%, 17%)"
            borderRadius="10"
            direction="column"
          >
            <Flex
              align="center"
              justify="center"
              borderRadius="50%"
              bg="hsl(210, 19%, 19%)"
              w="40px"
              h="40px"
            >
              <img src="icon-star.svg" alt="star" />
            </Flex>
            <Flex>
              <Text fontSize={24} fontWeight="700">
                How did we do?
              </Text>
            </Flex>
            <Flex>
              <Text fontSize={15} fontWeight="400">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </Text>
            </Flex>
            <Flex
              align="center"
              justify="center"
              w="100%"
              direction="column"
              gap="10px"
            >
              <Flex
                as="form"
                onSubmit={handleSubmit}
                align="center"
                justify="space-between"
                w="100%"
                gap="10px"
                direction="column"
              >
                <Flex
                  align="center"
                  justify="space-between"
                  w="100%"
                  gap="10px"
                  direction="row"
                >
                  {feedbackScore.map((item, index) => (
                    <Button
                      value={item}
                      id={item}
                      name={item}
                      required
                      onClick={() => handleChange(index)}
                      bg={
                        isActive === index
                          ? "hsl(214, 12%, 54%)"
                          : "hsl(210, 19%, 24%)"
                      }
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      direction="row"
                      borderRadius="50%"
                      w="40px"
                      h="40px"
                      key={index}
                      _hover={{ bg: "hsl(25, 97%, 53%)" }}
                      cursor="pointer"
                    >
                      {item}
                    </Button>
                  ))}
                </Flex>
                <Flex align="center" justify="center" w="100%">
                  <Button
                    type="submit"
                    w="100%"
                    borderRadius="30px"
                    bgColor="hsl(25, 97%, 53%)"
                    _hover={{
                      bg: "hsl(0, 0%, 100%)",
                      color: "hsl(25, 97%, 53%)",
                    }}
                  >
                    SUBMIT
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </section>
    </>
  );
};

export default RatingCard;
