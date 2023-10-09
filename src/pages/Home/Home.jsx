import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import EnjoyPlayMusicAndLyrics from "../../components/EnjoyPlayMusicAndLyrics/EnjoyPlayMusicAndLyrics";
import Footer from "../../components/Footer/Footer";
import Latest from "../../components/Latest/Latest";
import MusicTownServices from "../../components/MusicTownServices/MusicTownServices";
import UpcomingShow from "../../components/UpcomingShow/UpcomingShow";

const Home = () => {
  const [musicServiceCards, setMusicServiceCards] = useState([]);
  const [latestMusic, setLatestMusic] = useState([]);

  useEffect(() => {
    fetch("/music.json")
      .then((res) => res.json())
      .then((data) => setMusicServiceCards(data));
  }, []);

  useEffect(() => {
    fetch("/latestMusic.json")
      .then((res) => res.json())
      .then((data) => setLatestMusic(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div>
        <EnjoyPlayMusicAndLyrics></EnjoyPlayMusicAndLyrics>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="my-16">
          <di className="card-actions justify-center">
            <button className="px-4 flex justify-center items-center  py-3 hover:bg-rose-600 text-white text-lg bg-blue-700">
              Our Service <HiArrowSmallRight className="ml-2" />
            </button>
          </di>
          <div className="my-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {musicServiceCards.map((musicServiceCard) => (
              <MusicTownServices
                key={musicServiceCard.id}
                musicServiceCard={musicServiceCard}
              ></MusicTownServices>
            ))}
          </div>
        </div>
        <div className="my-20">
          <di className="card-actions justify-end mr-12">
            <button
              data-aos="zoom-in-left"
              className="px-4 flex justify-center items-center  py-3 hover:bg-rose-600 text-white text-lg bg-blue-700"
            >
              More Latest <HiArrowSmallRight className="ml-2" />
            </button>
          </di>
          <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {latestMusic.map((latest) => (
              <Latest key={latest.id} latest={latest}></Latest>
            ))}
          </div>
        </div>
        <div className="my-20">
        <div>
            <h4 className="text-center text-lg text-red-600 font-semibold">LIVE CONCERT</h4>
            <h1 className="text-center text-5xl mt-2 text-white font-bold">Upcoming Shows</h1>
        </div>
          <div className="my-16">
            {latestMusic.map((latestShow) => (
              <UpcomingShow
                key={latestShow.id}
                latestShow={latestShow}
              ></UpcomingShow>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
