// <ServiceDetail.jsx>는 서비스소개 부분을 관리하는 컴포넌트.
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { withRouter } from "react-router";
import ServiceForm from "../components/service/ServiceForm";


const ServiceDetail = () => {
    const TOTAL_SLIDES=23;

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef1 = useRef(null);
    const slideRef2 = useRef(null);
    const slideRef3 = useRef(null);
    const slideRef4 = useRef(null);
    const slideRef5 = useRef(null);
    const slideRef6 = useRef(null);
    const slideRef7 = useRef(null);
    const slideRef8 = useRef(null);
    const slideRef9 = useRef(null);
    const slideRef10 = useRef(null);
    const slideRef11 = useRef(null);
    const slideRef12 = useRef(null);
    const slideRef13 = useRef(null);
    const slideRef14 = useRef(null);
    const slideRef15 = useRef(null);
    const slideRef16 = useRef(null);
    const slideRef17 = useRef(null);
    const slideRef18 = useRef(null);
    const slideRef19 = useRef(null);
    const slideRef20 = useRef(null);
    const slideRef21 = useRef(null);
    const slideRef22 = useRef(null);
    const slideRef23 = useRef(null);
    const slideRef27 = useRef(null);

    //오른쪽 화살 버튼 클릭 시
    const NextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) {
          // 더 이상 넘어갈 슬라이드가 없으면
          setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
        
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };
      // 왼쪽 화살 버튼 클릭 시
    const PrevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
         
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        slideRef1.current.style.transition = 'all 0.5s ease-in-out';
        slideRef1.current.style.transform = `translateX(-${currentSlide}00%)`;
        
        slideRef2.current.style.transition = 'all 0.5s ease-in-out';
        slideRef2.current.style.transform = `translateX(-${currentSlide}00%)`;
        
        
        slideRef3.current.style.transition = 'all 0.5s ease-in-out';
        slideRef3.current.style.transform = `translateX(-${currentSlide}00%)`; 
        

        slideRef4.current.style.transition = 'all 0.5s ease-in-out';
        slideRef4.current.style.transform = `translateX(-${currentSlide}00%)`;
        

        slideRef5.current.style.transition = 'all 0.5s ease-in-out';
        slideRef5.current.style.transform = `translateX(-${currentSlide}00%)`
        

        slideRef6.current.style.transition = 'all 0.5s ease-in-out';
        slideRef6.current.style.transform = `translateX(-${currentSlide}00%)`; 
        

        slideRef7.current.style.transition = 'all 0.5s ease-in-out';
        slideRef7.current.style.transform = `translateX(-${currentSlide}00%)`;
        

        slideRef8.current.style.transition = 'all 0.5s ease-in-out';
        slideRef8.current.style.transform = `translateX(-${currentSlide}00%)`
       

        slideRef9.current.style.transition = 'all 0.5s ease-in-out';
        slideRef9.current.style.transform = `translateX(-${currentSlide}00%)`; 
        

        slideRef10.current.style.transition = 'all 0.5s ease-in-out';
        slideRef10.current.style.transform = `translateX(-${currentSlide}00%)`;
       

        slideRef11.current.style.transition = 'all 0.5s ease-in-out';
        slideRef11.current.style.transform = `translateX(-${currentSlide}00%)`
        

        slideRef12.current.style.transition = 'all 0.5s ease-in-out';
        slideRef12.current.style.transform = `translateX(-${currentSlide}00%)`; 
        

        slideRef13.current.style.transition = 'all 0.5s ease-in-out';
        slideRef13.current.style.transform = `translateX(-${currentSlide}00%)`;
        

        slideRef14.current.style.transition = 'all 0.5s ease-in-out';
        slideRef14.current.style.transform = `translateX(-${currentSlide}00%)`;
        
        
        slideRef15.current.style.transition = 'all 0.5s ease-in-out';
        slideRef15.current.style.transform = `translateX(-${currentSlide}00%)`; 
        

        slideRef16.current.style.transition = 'all 0.5s ease-in-out';
        slideRef16.current.style.transform = `translateX(-${currentSlide}00%)`;
       

        slideRef17.current.style.transition = 'all 0.5s ease-in-out';
        slideRef17.current.style.transform = `translateX(-${currentSlide}00%)`
        

        slideRef18.current.style.transition = 'all 0.5s ease-in-out';
        slideRef18.current.style.transform = `translateX(-${currentSlide}00%)`; 
        

        slideRef19.current.style.transition = 'all 0.5s ease-in-out';
        slideRef19.current.style.transform = `translateX(-${currentSlide}00%)`;
        

        slideRef20.current.style.transition = 'all 0.5s ease-in-out';
        slideRef20.current.style.transform = `translateX(-${currentSlide}00%)`
        

        slideRef21.current.style.transition = 'all 0.5s ease-in-out';
        slideRef21.current.style.transform = `translateX(-${currentSlide}00%)`; 
        

        slideRef22.current.style.transition = 'all 0.5s ease-in-out';
        slideRef22.current.style.transform = `translateX(-${currentSlide}00%)`;
        

        slideRef23.current.style.transition = 'all 0.5s ease-in-out';
        slideRef23.current.style.transform = `translateX(-${currentSlide}00%)`


        slideRef27.current.style.transition = 'all 0.5s ease-in-out';
        slideRef27.current.style.transform = `translateX(-${currentSlide}00%)`; 
        
        
    }, [currentSlide]);

    // by 이방원
    // 서비스 페이지의 이미지 카드를 보여주는 부분이다. (MainImgDetail.jsx와 유사하다.)
    // useEffect 안에 있는 내용은 useRef로 연결 된 이미지들이 하나씩 보일 수 있게 만들어준다. (X좌표 즉, 좌우로 이미지 카드가 이동한다.) 
    // 방향 버튼을 클릭하면 (PrevSlide와 NextSlide) useState으로 정의된 currentSlide에 값이 더해진다. 
    // 그러면 currentSlide를 의존성 배열로 설정한 useEffect가 실행되고 위에서 말했 듯 이미지 카드들이 X좌표로 이동한다.   
    // 2021-11-03  

    return(
        <ServiceForm
            NextSlide={NextSlide}
            PrevSlide={PrevSlide}
            slideRef1={slideRef1}
            slideRef2={slideRef2}
            slideRef3={slideRef3}
            slideRef4={slideRef4}
            slideRef5={slideRef5}
            slideRef6={slideRef6}
            slideRef7={slideRef7}
            slideRef8={slideRef8}
            slideRef9={slideRef9}
            slideRef10={slideRef10}
            slideRef11={slideRef11}
            slideRef12={slideRef12}
            slideRef13={slideRef13}
            slideRef14={slideRef14}
            slideRef15={slideRef15}
            slideRef16={slideRef16}
            slideRef17={slideRef17}
            slideRef18={slideRef18}
            slideRef19={slideRef19}
            slideRef20={slideRef20}
            slideRef21={slideRef21}
            slideRef22={slideRef22}
            slideRef23={slideRef23}
            slideRef27={slideRef27}
          
        />
    )

};

export default withRouter(ServiceDetail);