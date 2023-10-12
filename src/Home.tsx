import { useRef, useState, useEffect } from "react";
import "./home.scss";
import scroll_hand from "./assets/images/icons/scoll_hand.png";

const Home = () => {
  const mainTitleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mainTitleRef.current) return;
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("hi")
          entry.target.classList.remove("disappear")
        } else {
            console.log("bye for now")
            entry.target.classList.add("disappear")
        }
      });
    };

    const options = { root: null, rootMargin: "-500px 0px 0px 0px" };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(mainTitleRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="home_container">
      <div className="home_nav">
        <span>KesKnowsNothing</span>
        <span>letmeknowkes@gmail.com</span>
        <span>job seeker</span>
      </div>
      <div className="home_main">
        <span className="main_title" ref={mainTitleRef}>
          Developing something is like a jounery
        </span>
        <span className="main_intro">
          프론트엔드의 기초 체력, 탄탄한 자바스크립트 지식을 쌓은 케스입니다.
        </span>
        <span className="main_intro">
          기능 구현을 넘어 코드의 재사용성과 웹페이지 성능 최적화를 좋아합니다.
        </span>
        <span className="main_intro">
          개발은 저에게 여행과도 같아서 오늘도 코드 위로 떠나보려합니다.
        </span>
      </div>
      <div className="scroll_wrapper">
        <span>Scroll Jounery</span>
        <img src={scroll_hand} alt="scroll_hand" />
      </div>
    </div>
  );
};

export default Home;
