import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <AutoplaySlider
      play={true}
      bullets={false}
      cancelOnInteraction={false}
      interval={6000}
    >
      <div>
        <img
          src={require("../../../assets/images/sword1.jpg")}
          width="1000px"
          height="400px"
          quality={100}
        />
      </div>

      <div>
        <video
          className="background-video"
          loop
          autoPlay
          muted
          style={{
            position: "relative",
            width: "100%",
            height: "400px",
            left: 0,
            top: 0,
          }}
        >
          <source
            src={require("../../../assets/videos/video.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div>
        <video
          className="background-video"
          loop
          autoPlay
          muted
          style={{
            position: "relative",
            width: "100%",
            height: "400px",
            left: 0,
            top: 0,
          }}
        >
          <source
            src={require("../../../assets/videos/video1.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div>
        <video
          className="background-video"
          loop
          autoPlay
          muted
          style={{
            position: "relative",
            width: "100%",
            height: "400px",
            left: 0,
            top: 0,
          }}
        >
          <source
            src={require("../../../assets/videos/video2.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div>
        <video
          className="background-video"
          loop
          autoPlay
          muted
          style={{
            position: "relative",
            width: "100%",
            height: "400px",
            left: 0,
            top: 0,
          }}
        >
          <source
            src={require("../../../assets/videos/video3.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </AutoplaySlider>
  );
};

export default Slider;
