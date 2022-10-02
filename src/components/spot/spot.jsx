import React, { useEffect } from "react";
import "./spot.scss";
import { fn } from "./fn";
import taipei from "../../image/taipei.jpg"
import tokyo from "../../image/tokyo.jpg"
import penang from "../../image/penang.jpg"
import hongkong from "../../image/hongkong.jpg"
import busan from "../../image/busan.jpg"
import venice from "../../image/venice.jpg"
import budapest from "../../image/budapest.jpg"
import hawaii from "../../image/hawaii.jpg"

const Spot = ({ asia, europe, americas }) => {
  useEffect(() => {
    fn(asia, europe, americas);
  });

  return (
    <div id="spot">
      <div className="spotContainer 亞洲">
        <div className="city">台北</div>
        <div className="Continent">亞洲</div>
        <img className="cityImage" src={taipei} alt="" />
      </div>
      <div className="spotContainer 亞洲">
        <div className="city">東京</div>
        <div className="Continent">亞洲</div>
        <img className="cityImage" src={tokyo} alt="" />
      </div>
      <div className="spotContainer 亞洲">
        <div className="city">檳城</div>
        <div className="Continent">亞洲</div>
        <img className="cityImage" src={penang} alt="" />
      </div>
      <div className="spotContainer 亞洲">
        <div className="city">香港</div>
        <div className="Continent">亞洲</div>
        <img className="cityImage" src={hongkong} alt="" />
      </div>
      <div className="spotContainer 亞洲">
        <div className="city">釜山</div>
        <div className="Continent">亞洲</div>
        <img className="cityImage" src={busan} alt="" />
      </div>
      <div className="spotContainer 歐洲">
        <div className="city">威尼斯</div>
        <div className="Continent">歐洲</div>
        <img className="cityImage" src={venice} alt="" />
      </div>
      <div className="spotContainer 歐洲">
        <div className="city">布達佩斯</div>
        <div className="Continent">歐洲</div>
        <img className="cityImage" src={budapest} alt="" />
      </div>
      <div className="spotContainer 美洲">
        <div className="city">夏威夷</div>
        <div className="Continent">美洲</div>
        <img className="cityImage" src={hawaii} alt="" />
      </div>
    </div>
  );
};

export { Spot };
