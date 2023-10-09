import Aos from "aos";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import EnjoyPlayMusicAndLyrics from "../../components/EnjoyPlayMusicAndLyrics/EnjoyPlayMusicAndLyrics";
import Footer from "../../components/Footer/Footer";
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
      <div>
        <div data-aos="fade-right">
          <Marquee>
            <EnjoyPlayMusicAndLyrics></EnjoyPlayMusicAndLyrics>
          </Marquee>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="my-20">
            <h1 className="text-4xl text-center text-white opacity-75 font-bold underline">
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
          <div className="my-20">
            <h1 className="text-4xl text-center text-white opacity-80  font-bold underline">
              Our Services
            </h1>
            <div className="my-16 grid justify-items-center grid-cols-1 lg:grid-cols-3 gap-8">
              {musicServiceCards.map((musicServiceCard) => (
                <MusicTownServices
                  key={musicServiceCard.id}
                  musicServiceCard={musicServiceCard}
                ></MusicTownServices>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
