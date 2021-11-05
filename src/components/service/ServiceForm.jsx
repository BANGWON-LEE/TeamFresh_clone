//<ServiceForm.jsx>는 회사 및 회사의 사업에 대해서 소개하는 컴포넌트이다.
import React from "react";
import HeaderDetail from "../../containers/HeaderDetail";
import StyledBodyDiv from "../body/Styled/StyledBodyDiv";
import FooterForm from "../footer/FooterForm"
import StyledImgA from "./styled/StyledImgA";
import StyledImgA2 from "./styled/StyledImgA2";
import StyledMiddleDiv from "./styled/StyledMiddleDiv";
import StyledMiddleDiv2 from "./styled/StyledMiddleDiv2";
import StyledMiddleInDiv from "./styled/StyledMiddleInDiv";
import StyledMiddleInImg from "./styled/StyledMiddleInImg";
import StyledMiddleSpan from "./styled/StyledMiddleSpan";
import StyledMiddle2Span from "./styled/StyledMiddle2Span";
import StyledTitleDiv from "./styled/StyledTitleDiv";
import StyledTitleH2 from "./styled/StyledTitleH2";




const ServiceForm = ({
    PrevSlide, 
    NextSlide, 
    slideRef1, 
    slideRef2, 
    slideRef3,
    slideRef4,
    slideRef5,
    slideRef6,
    slideRef7,
    slideRef8,
    slideRef9,
    slideRef10,
    slideRef11,
    slideRef12,
    slideRef13,
    slideRef14,
    slideRef15,
    slideRef16,
    slideRef17,
    slideRef18,
    slideRef19,
    slideRef20,
    slideRef21,
    slideRef22,
    slideRef23,
    slideRef27,
}) => {
    return(
        <StyledBodyDiv>
            <HeaderDetail/>
                <div style={{height:'3rem'}} />
                <StyledTitleDiv>
                    <StyledTitleH2>
                        서비스소개
                    </StyledTitleH2>
                </StyledTitleDiv>
                <StyledMiddleDiv>
                    <StyledMiddleDiv2>
                        <StyledMiddleInDiv ref={slideRef1} >
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드1.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef2}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드2.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef3}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드3.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef4}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드4.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef5}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드5.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef6}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드6.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef7}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드7.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef8}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드9.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef9}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드9.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef10}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드10.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef11}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드11.PNG' />
                        </StyledMiddleInDiv >
                        <StyledMiddleInDiv ref={slideRef12}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드12.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef13}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드13.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef14}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드14.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef15}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드15.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef16}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드16.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef17}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드17.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef18}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드18.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef19}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드19.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef20}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드20.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef21}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드21.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef22}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드22.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef23}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드23.PNG' />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv ref={slideRef27}>
                            <StyledMiddleInImg src='https://www.teamfresh.co.kr//resources/assets/img/팀프레시 새벽배송 서비스소개 ver191015/슬라이드27.PNG' />
                        </StyledMiddleInDiv>
                    </StyledMiddleDiv2>
                    <StyledImgA onClick={PrevSlide}>
                        <StyledMiddleSpan/>
                    </StyledImgA>
                    <StyledImgA2 onClick={NextSlide}>
                        <StyledMiddle2Span />
                    </StyledImgA2>
                </StyledMiddleDiv>
            <FooterForm/>
        </StyledBodyDiv>
        )
}

export default ServiceForm;
