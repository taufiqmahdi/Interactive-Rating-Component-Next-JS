import RatingCard from "../components/RatingCard";
import ThankYouCard from "../components/ThankYouCard";
import React, { useState } from "react";

const Main = () => {
  const [rating, setRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isActive, setIsActive] = React.useState(null);

  const handleRatingChange = (rating) => {
    if (isActive === rating) setIsActive(null);
    else setIsActive(rating);
    setRating(rating+1)
  }

  const handleFormSubmit = (state) => {
    setIsSubmitted(state)
  }

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
