//<CompanyIntroForm.jsx>는 회사소개 내용이 담겨있는 컴포넌트이다.
import React from "react";
import HeaderDetail from "../../containers/HeaderDetail";
import StyledBodyDiv from "../body/Styled/StyledBodyDiv";
import FooterForm from "../footer/FooterForm";
import StyledImgDiv from "./styled/StyledImgDiv";
import StyledImgDiv2 from "./styled/StyledImgDiv2";
import StyledImgH1 from "./styled/StyledImgH1";
import StyledMiddle2Div from "./styled/StyledMiddle2Div";
import StyledMiddle2Div2 from "./styled/StyledMiddle2Div2";
import StyledMiddle2Div3 from "./styled/StyledMiddle2Div3";
import StyledMiddle2H6 from "./styled/StyledMiddle2H6";
import StyledMiddle2P from "./styled/StyledMiddle2P";
import StyledMiddleDiv from "./styled/StyledMiddleDiv";
import StyledMiddleDiv2 from "./styled/StyledMiddleDiv2";
import StyledMiddleinDiv from "./styled/StyledMiddleinDiv";
import StyledMiddleInDiv2 from "./styled/StyledMiddleInDiv2";
import StyledMiddleInH2 from "./styled/StyledMiddleInH2";
import StyledMiddleinImg from "./styled/StyledMiddleinImg";
import StyledUnderDiv from "./styled/StyledUnderDiv";




const CompanyIntroForm = () => {
    return(
        <StyledBodyDiv>
            <HeaderDetail/>
                <StyledImgDiv>
                    <StyledImgDiv2>
                        <StyledImgH1>
                            회사소개
                        </StyledImgH1>
                    </StyledImgDiv2>
                </StyledImgDiv>
                <StyledMiddleDiv>
                    <StyledMiddleDiv2>
                        <StyledMiddleinDiv>
                            <StyledMiddleinImg src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_이미지/logo_indigo_teamfresh.png"/>
                        </StyledMiddleinDiv>
                        <StyledMiddleInDiv2>
                            <StyledMiddleInH2>
                                TimF는 Team Fresh를 발음기호로 형상화 한 것으로
                                <br/>
                                신선식품 배송 업계를 리드할 최상의 팀이라는 의미를 가지고 있습니다.
                            </StyledMiddleInH2>
                        </StyledMiddleInDiv2>
                    </StyledMiddleDiv2>
                </StyledMiddleDiv>
                <hr style={{border: '1px solid #f2f2f2'}} />
                <StyledMiddle2Div>
                    <StyledMiddle2Div2>
                        <StyledMiddle2Div3>
                            <StyledMiddle2H6>
                                "대한민국 No.1 Cold-Chain Platform"
                            </StyledMiddle2H6>
                            <StyledMiddle2P>
                                안전한 환경에서 신속하게 고객에 먹거리를 제공함으로써
                                <br/>
                                대한민국 콜드체인 대표 플랫폼이 되겠다는 포부를 가지고 있습니다.
                            </StyledMiddle2P>
                            <StyledUnderDiv>                      
                                <iframe width="816" height="480" src="https://www.youtube.com/embed/vlXzU-1Oec4" title="YouTube video player" frameborder="0" allow="accelerometer; " allowfullscreen="allowfullscreen"></iframe>
                            </StyledUnderDiv>
                        </StyledMiddle2Div3>
                    </StyledMiddle2Div2>
                </StyledMiddle2Div>
            <FooterForm/>
        </StyledBodyDiv>
        )
}

export default CompanyIntroForm;


