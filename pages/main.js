import React, { useState } from "react";
import RatingCard from "../components/RatingCard";
import ThankYouCard from "../components/ThankYouCard";

const Main = () => {
  const [isActive, setIsActive] = React.useState(null);
  const [rating, setRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingChange = (rating) => {
    if (isActive === rating) setIsActive(null);
    else setIsActive(rating);
    setRating(rating + 1);
  };

  const handleFormSubmit = (state) => {
    setIsSubmitted(state);
  };

  return (
    <>
      {!isSubmitted ? (
        <RatingCard
          isActive={isActive}
          onRatingChange={handleRatingChange}
          onFormSubmit={handleFormSubmit}
        />
      ) : (
        <ThankYouCard rating={rating} />
      )}
    </>
  );
};

export default Main;
