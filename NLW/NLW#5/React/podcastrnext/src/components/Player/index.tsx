import Image from 'next/image';
import { useContext, useRef, useEffect } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import styles from './styles.module.scss'

export  function Player(){
    const audioRef = useRef<HTMLAudioElement>(null)


    const {episodeList, currentEpisodeIndex, isPlaying, togglePlay, setPlayingState} = useContext(PlayerContext)
    useEffect(() => {
        if(!audioRef.current){
            return;
        }
        if(isPlaying){
            audioRef.current.play();
        }else{
            audioRef.current.pause();
        }
    })
    const episode = episodeList[currentEpisodeIndex]
    
    return (
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora"/>
                <strong>Tocando agora {episode?.title}</strong>
            </header>
            {episode ? (
                <div className={styles.currentEpisode}>
                  <Image width={592} height={592} src={episode.thumbnail} objectFit="cover"/>
                  <strong>
                    {episode.title}                      
                  </strong>
                  <strong>
                    {episode.members}                      
                  </strong>
                   </div> 
            ): (<div className={styles.emptyPlayer}>
                <strong>Selecione um podcast para ouvir </strong>
            </div>
            )}

            
            <footer className={!episode ? styles.empty : ''}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.slider}>
                    { episode ? (
                        <Slider 
                        trackStyle={{ backgroundColor:'#04d361'}}
                        railStyle={{backgroundColor: '#9f75ff'}} 
                        handleStyle={{borderColor: '#04d361'}} />
                    ) : (
                        <div className={styles.emptySlider}/>
                    )}
                    </div>
                    <span>00:00</span>
                </div>
 {
     episode && (
         <audio
         src={episode.url}
         ref={audioRef}
         autoPlay
         onPlay={() => setPlayingState(true)}
         onPause={() => setPlayingState(false)}
         />

         
     ) 
 }



                <div className={styles.buttons}>
                    <button disabled={!episode}>
                        <img src="/shuffle.svg" alt="Embaralhar"/>
                    </button>
                    <button disabled={!episode}>
                        <img src="/play-previous.svg" alt="Tocar Anterior"/>
                    </button>
                    <button className={styles.playButton} disabled={!episode} onClick={togglePlay}>
                        { isPlaying ? <img src="/pause.svg" alt="Tocar"/> : <img src="/play.svg" />}
                    </button>
                    <button disabled={!episode}>
                        <img src="/play-next.svg" alt="Tocar Próximar"/>
                    </button>
                    <button disabled={!episode}>
                        <img src="/repeat.svg" alt="Repetir"/>
                    </button>
                </div>

            </footer>
        </div>
    );
}