import { useRef, useEffect } from "react";
import "./home.scss";
import scroll_hand from "./assets/images/icons/scoll_hand.png";

const Home = () => {
  const mainTitleRef = useRef<HTMLSpanElement[] | null[]>([]);

  useEffect(() => {
    if (!mainTitleRef.current) return;
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("disappear");
        } else {
          entry.target.classList.add("disappear");
        }
      });
    };

    const options = { root: null, rootMargin: "-500px 0px 0px 0px" };
    const observer = new IntersectionObserver(callback, options);
    mainTitleRef.current.forEach((el) => {
      observer.observe(el as Element);
    });

    return () => {};
  }, []);
  return (
    <div className="home_container">
      <div className="home_nav">
        <span>KesKnowsNothing</span>
        <span>letmeknowkes@gmail.com</span>
        <span>job seeker</span>
      </div>
      <div className="home_main">
        <span
          className="main_title"
          ref={(el) => (mainTitleRef.current[0] = el)}
        >
          Developing something is like a jounery
        </span>
        <span
          className="main_intro"
          ref={(el) => (mainTitleRef.current[1] = el)}
        >
          프론트엔드의 기초 체력, 탄탄한 자바스크립트 지식을 쌓은 케스입니다.
        </span>
        <span
          className="main_intro"
          ref={(el) => (mainTitleRef.current[2] = el)}
        >
          기능 구현을 넘어 코드의 재사용성과 웹페이지 성능 최적화를 좋아합니다.
        </span>
        <span
          className="main_intro"
          ref={(el) => (mainTitleRef.current[3] = el)}
        >
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
