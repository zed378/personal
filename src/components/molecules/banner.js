// Package
import { useEffect } from "react";
import Particles from "react-particles-js";

// Assets
import { BsChevronCompactDown } from "react-icons/bs";
import "../../assets/styles/animation.css";
import pic from "../../assets/img/pic.png";
import Icon from "../atoms/bg";

export default function Banner() {
  useEffect(() => {}, []);

  return (
    <div
      className="w-full px-5 bg-[#2C3639] h-auto relative overflow-hidden"
      id="particles-js"
      style={{
        height: "calc(100vh - 4rem)",
      }}
    >
      <Particles
        style={{
          width: "100%",
          height: "calc(100vh - 4rem)",
        }}
        params={{
          particles: {
            number: {
              value: 125,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />

      <div className="absolute top-[4rem] left-[2rem] neons">
        <h1 className="text-3xl pl-4">Hi, my name is</h1>
        <div
          style={{
            width: "40rem",
            height: "5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <svg
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <text x="50%" y="95%" text-anchor="middle">
              Muhammad
            </text>
          </svg>
        </div>

        <div
          style={{
            width: "27rem",
            height: "5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <svg
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <text x="50%" y="95%" text-anchor="middle">
              Zawawi
            </text>
          </svg>
        </div>

        <div className="intro relative">
          <h2>
            <span>I'm</span>
            <div class="message">
              <div class="word1">Creative Developer</div>
              <div class="word2">Enthusiast Coder</div>
              <div class="word3">Fullstack Developer</div>
            </div>
          </h2>
        </div>
      </div>

      <div className="absolute right-[1rem] bottom-[-10rem] z-0">
        <Icon height={800} width={600} />
      </div>
      <div className="absolute right-[5rem] bottom-[-2rem] z-10">
        <img src={pic} alt={pic} className="w-[30rem]" />
      </div>

      <BsChevronCompactDown
        size={55}
        color="white"
        cursor="pointer"
        className="bounce-bottom absolute bottom-2 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
