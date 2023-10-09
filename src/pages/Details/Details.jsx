import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import DetailsCard from "./DetailsCard";

const Details = () => {
  const [detail, setDetail] = useState([]);
  const {id}  = useParams();
  const IdInt = parseInt(id)

  const details = useLoaderData();

  useEffect(() => {
    const musicDetails = details?.find((detail) => detail.id === IdInt);
    setDetail(musicDetails);
  }, [IdInt, details]);

  console.log();

  return (
    <>
     <DetailsCard detail={detail}></DetailsCard>
      <Footer></Footer>
    </>
  );
};

export default Details;
