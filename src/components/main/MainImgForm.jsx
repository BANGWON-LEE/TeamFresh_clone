//<MainImgForm.jsx>는 메인페이지의 이미지 카드를 보여주는 부분이다.
import React from "react";
import StyledCarousel from "./styled/StyledCarousel";
import StyledCarouselItem from "./styled/StyledCarouselItem";
import StyledMainImg from "./styled/StyledMainImg";
import StyledImgLi2 from "./styled/StyledImgLi2";
import StyledImgUl from "./styled/StyledImgUl";
import StyledMainDiv from "./styled/StyledMainDiv";
import StyledImgTextDiv from "./styled/StyledImgTextDiv";
import StyledImgH1 from "./styled/StyledImgH1";
import StyledImgH3 from "./styled/StyledImgH3";
import StyledImgA from "./styled/StyledImgA";
import StyledImgSpan from "./styled/StyledImgSpan";
import StyledImgA2 from "./styled/StyledImgA2";
import StyledImgSpan2 from "./styled/StyledImgSpan2";
import StyledImgLi1 from "./styled/StyledImgLi1";
import StyledImgLi3 from "./styled/StyledImgLi3";


const MainBodyForm = ({NextSlide, PrevSlide, slideRef1, slideRef2, slideRef3}) => {

    return(        
        <StyledMainDiv>
            <StyledCarousel>
                <StyledCarouselItem ref={slideRef1}  >
                    <StyledMainImg src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/background1.png"/>
                    <StyledImgTextDiv>
                        <StyledImgH1>
                            대한민국 No.1
                        </StyledImgH1>
                        <StyledImgH3 >
                            Cold Chain Platform
                        </StyledImgH3>
                    </StyledImgTextDiv>
                    <StyledImgUl>
                        <StyledImgLi1 style={{backgroundColor: 'rgba(255,255,255)'}}/>
                        <StyledImgLi2/>
                        <StyledImgLi3/>
                    </StyledImgUl>
                </StyledCarouselItem>
                <StyledCarouselItem ref={slideRef2} >
                    <StyledImgUl>
                        <StyledImgLi1/>
                        <StyledImgLi2 style={{backgroundColor: 'rgba(255,255,255)'}}/>
                        <StyledImgLi3/>
                    </StyledImgUl>
                    <StyledMainImg src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/background2.png"/>
                    <StyledImgTextDiv>
                        <StyledImgH1>
                            Timf
                        </StyledImgH1>
                        <StyledImgH3>
                            Connect Freshness
                        </StyledImgH3>
                    </StyledImgTextDiv>
                </StyledCarouselItem>
                <StyledCarouselItem ref={slideRef3}>
                    <StyledImgUl>
                        <StyledImgLi1 />
                        <StyledImgLi2 />
                        <StyledImgLi3 style={{backgroundColor: 'rgba(255,255,255)'}} />
                    </StyledImgUl>
                    <StyledMainImg src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/background3.png"/>
                    <StyledImgTextDiv>
                        <StyledImgH1>
                            Commerce Trend
                        </StyledImgH1>
                        <StyledImgH3>
                            신선식품 물류를 선도하는 시스템 구축
                        </StyledImgH3>
                    </StyledImgTextDiv>
                </StyledCarouselItem>
                <StyledImgA onClick={PrevSlide}>
                    <StyledImgSpan/>
                </StyledImgA>
                <StyledImgA2 onClick={NextSlide}>
                    <StyledImgSpan2/>
                </StyledImgA2>
                
            </StyledCarousel>
        </StyledMainDiv>
    
        )
}

export default MainBodyForm;
