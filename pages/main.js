import RatingCard from "../components/RatingCard";
import ThankYouCard from "../components/ThankYouCard";

const Main = () => {
  const [rating, setRating] = useState(null);

  // if

  return (
    <>
      <RatingCard />
      <ThankYouCard rating={rating} />
    </>
  );
};

export default Main;
