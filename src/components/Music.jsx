import React, { useState, useRef } from "react";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { youkid, trese, disiotso, abtyou, ending, nothing, itsyou,backburn} from "../assets";

function Music() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Store currently playing song
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(new Audio()); // Create an audio element

  const songs = [
    {
      title: "Backburner",
      artist: "Niki",
      albumCover: backburn, // Path to album cover image
      audio: "/songs/backburn.mp3", // Path to song file
      left: "5%",
      top: "5%",
    },
    {
      title: "U(You)",
      artist: "KIDOO3008",
      albumCover: youkid, 
      audio: "/songs/youuu.mp3",
      left: "40%",
      top: "15%",
    },
    {
      title: "Nothing",
      artist: "Bruno Minor",
      albumCover: nothing, 
      audio: "/songs/nothing.mp3",
      left: '15%',
      top: '40%',
    },
    {
      title: "If the world was ending",
      artist: "Jp Saxe, Julia Michaels",
      albumCover: ending, 
      audio: "/songs/ending.mp3",
      left: '30%',
      top: '75%',
    },
    {
      title: "about you",
      artist: "The 1975",
      albumCover: abtyou, 
      audio: "/songs/abtyou.mp3",
      left: '5%',
      top: '65%',
    },
    {
      title: "It's You",
      artist: "MAX, Keshi",
      albumCover: itsyou, 
      audio: "/songs/itsyou.mp3",
      left: '25%',
      top: '90%',
    },
    {
      title: "18",
      artist: "One Direction",
      albumCover: disiotso, 
      audio: "/songs/18.mp3",
      left: '35%',
      top: '50%',
    },
    {
      title: "13",
      artist: "LANY",
      albumCover: trese, 
      audio: "/songs/13.mp3",
      left: "10%",
      top: "25%",
    },
  ];

  const playSong = (song) => {
    if (currentSong === song.audio) {
      // If the song is already playing, pause it
      audioRef.current.pause();
      setCurrentSong(null);
    } else {
      // Stop the previous song
      audioRef.current.pause();
      audioRef.current.src = song.audio;
      audioRef.current.play();
      setCurrentSong(song.audio);
    }
  };

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 mt-4 drop-shadow-lg text-white text-center">
          Songs that remind me of you
        </h1>

        <div ref={containerRef} className="relative w-full h-[40rem] rounded-lg overflow-hidden mt-8 mb-12">
          {songs.map((song, index) => (
            <motion.div
              key={index}
              className="absolute cursor-pointer"
              style={{ left: song.left, top: song.top }}
              drag
              dragConstraints={containerRef}
              onClick={() => playSong(song)} // Play song when clicked
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center gap-4 w-56 h-[4rem]">
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={song.albumCover}
                    alt="Album cover"
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-white font-medium text-sm truncate">
                    {song.title}
                  </h2>
                  <p className="text-white/70 text-xs truncate">{song.artist}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="flex justify-center w-full mt-4 mb-4">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate("/recap")}
          >
            <ArrowLeft /> Previous page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Music;
