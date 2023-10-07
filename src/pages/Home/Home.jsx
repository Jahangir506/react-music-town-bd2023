import { useEffect, useState } from "react";
import EnjoyPlayMusicAndLyrics from "../../components/EnjoyPlayMusicAndLyrics/EnjoyPlayMusicAndLyrics";
import MusicTownServices from "../../components/MusicTownServices/MusicTownServices";


const Home = () => {
    const [musicServiceCards, setMusicServiceCards] = useState([])

    useEffect(()=>{
        fetch('/music.json')
        .then(res => res.json())
        .then(data => setMusicServiceCards(data))
    }, [])


  return (
     <>
       <div className="mt-12">
        <div>
          <h1 className="text-4xl text-center font-bold underline">
            Our Services
          </h1>
          <div className="my-14 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {
                musicServiceCards.map(musicServiceCard => <MusicTownServices key={musicServiceCard.id} musicServiceCard={musicServiceCard}></MusicTownServices>)
            }
          </div>
        </div>
        <div>
          <h1 className="text-4xl text-center font-bold underline">
            Enjoy Music
          </h1>
          <div>
            <EnjoyPlayMusicAndLyrics></EnjoyPlayMusicAndLyrics>
          </div>
        </div>
      </div>
     </>
  );
};

export default Home;
