// <MainImgDetail.jsx>는 메인 페이지 이미지 카드를 관리해준다. 
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { withRouter } from "react-router";
import MainImgForm from "../components/main/MainImgForm";


const MainImgDetail = () => {
    const TOTAL_SLIDES=2;   
    // 이미지 카드의 갯수(배열로 정리되어 0부터 시작)
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef1 = useRef(null);
    const slideRef2 = useRef(null);
    const slideRef3 = useRef(null);

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
        slideRef2.current.style.transform = `translateX(-${currentSlide}00%)`
        
        slideRef3.current.style.transition = 'all 0.5s ease-in-out';
        slideRef3.current.style.transform = `translateX(-${currentSlide}00%)`; 
    
    }, [currentSlide]);

    //by 이방원
    // 위의 내용들은 화살표를 클릭 시 이미지 카드가 넘어가는 내용이다.
    // useEffect 안에 있는 내용은 useRef로 연결 된 이미지들이 하나씩 보일 수 있게 만들어준다. (X좌표 즉, 좌우로 이미지 카드가 이동한다.) 
    // 방향 버튼을 클릭하면 (PrevSlide와 NextSlide) useState으로 정의된 currentSlide에 값이 더해진다. 
    // 그러면 currentSlide를 의존성 배열로 설정한 useEffect가 실행되고 위에서 말했 듯 이미지 카드들이 X좌표로 이동한다.   
    // 2021-11-01
    
    useEffect(() => {

        let slideRefIndex = 0;
        let slideRef =[slideRef1, slideRef2, slideRef3];
        

        const showSlides = setInterval(()=>{
            slideRefIndex++;
            slideRef3.current.style.transform = `translateX(-${slideRefIndex}00%)`;
            slideRef2.current.style.transform = `translateX(-${slideRefIndex}00%)`;
            slideRef1.current.style.transform = `translateX(-${slideRefIndex}00%)`;

            
        },8000)
        
    
        const showSlides2 = setInterval(() => {
            
            console.log('b : '   + slideRefIndex)
            slideRef3.current.style.transform = `translateX(000%)`;
            slideRef2.current.style.transform = `translateX(000%)`;
            slideRef1.current.style.transform = `translateX(000%)`;
            slideRefIndex = 0;

        }, 24000);
    
    },[])

    // by 이방원
    // setInterval을 사용하여 8초에 한 번씩 이미지 카드가 이동하게 끔 구현하였다.
    // 의존성 배열을 비워두어 처음 렌더링 될 때, 실행되도록 하였고, 8초 마다 slideRefIndex를 증가시켜 이미지 카드를 이동시키게 하였다.
    // 마지막 이미지 카드까지 보여주면, 원래의 자리로 이동, 반복된다.
    // 2021-11-04

    return(
        <MainImgForm
            NextSlide={NextSlide}
            PrevSlide={PrevSlide}
            slideRef1={slideRef1}
            slideRef2={slideRef2}
            slideRef3={slideRef3}
        />
    )

};

export default withRouter(MainImgDetail);