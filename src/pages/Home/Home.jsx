import Aos from "aos";
import { useEffect, useState } from "react";
import EnjoyPlayMusicAndLyrics from "../../components/EnjoyPlayMusicAndLyrics/EnjoyPlayMusicAndLyrics";
import MusicTownServices from "../../components/MusicTownServices/MusicTownServices";


const Home = () => {
  const [musicServiceCards, setMusicServiceCards] = useState([]);

  useEffect(() => {
    fetch("/music.json")
      .then((res) => res.json())
      .then((data) => setMusicServiceCards(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="mt-24">
        <div>
          <h1 className="text-4xl text-center font-bold underline">
            Our Services
          </h1>
          <div className="my-16 grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            {musicServiceCards.map((musicServiceCard) => (
              <MusicTownServices
                key={musicServiceCard.id}
                musicServiceCard={musicServiceCard}
              ></MusicTownServices>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-4xl text-center font-bold underline">
            Enjoy Music
          </h1>
          <div className="mt-6" data-aos="fade-left">
            <EnjoyPlayMusicAndLyrics></EnjoyPlayMusicAndLyrics>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
