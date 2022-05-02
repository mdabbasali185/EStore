import { useEffect, useState } from "react";

const useCard = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return [card, setCard];
};

export default useCard;
