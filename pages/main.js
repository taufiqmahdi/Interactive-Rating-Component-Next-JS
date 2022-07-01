import RatingCard from "../components/RatingCard";
import ThankYouCard from "../components/ThankYouCard";
import React, { useState } from "react";

const Main = () => {
  const [rating, setRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isActive, setIsActive] = React.useState(null);
  // const feedbackScore = [1, 2, 3, 4, 5];
  const chooseFeedback = (chooseIndex) => {
    if (isActive === chooseIndex) setIsActive(null);
    else setIsActive(chooseIndex);
  };

  // const onRatingChange = (rating) => {
  //   console.log(rating);
  //   setRating(rating);
  // };

  const handleRatingChange = (rating) => {
    if (isActive === rating) setIsActive(null);
    else setIsActive(rating);
    setRating(rating+1)
  }

  const handleFormSubmit = (state) => {
    setIsSubmitted(state)
  }

  // const isFormSubmitted = (isSubmitted) => {
  //   console.log(isSubmitted)
  //   setIsSubmitted(true);
  // };

  // const isFormSubmitted = false;

  // const rating = rating
  // console.log(isSubmitted)

  // if

  return (
    <>
      {!isSubmitted ? (
      <RatingCard
        isActive={isActive}
        onRatingChange={handleRatingChange}
        onFormSubmit={handleFormSubmit}
      />
      ) : (
      <ThankYouCard rating={rating} />)}

    </>
  );
};

export default Main;
