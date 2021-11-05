//<PartnersIntroFom.jsx>는 협력사를 소개하는 컴포넌트이다.
import React from "react";
import HeaderDetail from "../../containers/HeaderDetail";
import StyledBodyDiv from "../body/Styled/StyledBodyDiv";
import StyledImgDiv from "./styled/StyledImgDiv";
import FooterForm from "../footer/FooterForm";
import StyledImgDiv2 from "./styled/StyledImgDiv2";
import StyledImgH1 from "./styled/StyledImgH1";
import StyledMiddleDiv from "./styled/StyledMiddleDiv";
import StyledMiddleDiv2 from "./styled/StyledMiddleDiv2";
import StyledMiddleInDiv from "./styled/StyledMiddleInDiv";
import StyledMiddleInH3 from "./styled/StyledMiddleInH3";
import StyledMiddleInImg from "./styled/StyledMiddleInImg";




const PartnersIntroForm = () => {
    return(
        <StyledBodyDiv>
            <HeaderDetail/>
                <StyledImgDiv>
                    <StyledImgDiv2>
                        <StyledImgH1>
                            협력사 소개
                        </StyledImgH1>
                    </StyledImgDiv2>
                </StyledImgDiv>
                <StyledMiddleDiv>
                    <StyledMiddleDiv2>
                        <StyledMiddleInDiv>
                            <StyledMiddleInH3>
                                NETWORK
                            </StyledMiddleInH3>
                            <StyledMiddleInImg  src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_이미지/lk.png" />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv>
                            <StyledMiddleInH3>
                                LOGISTICS CENTER
                            </StyledMiddleInH3>
                            <StyledMiddleInImg  src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_이미지/hansol.png" />
                            <StyledMiddleInImg  src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_이미지/savills.png" />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv>
                            <StyledMiddleInH3>
                                FACILITIES
                            </StyledMiddleInH3>
                            <StyledMiddleInImg  src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_이미지/서림.png" />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv>
                            <StyledMiddleInH3>
                                MATERIALS
                            </StyledMiddleInH3>
                            <StyledMiddleInImg  src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_이미지/3stech.png" />
                        </StyledMiddleInDiv>
                        <StyledMiddleInDiv>
                            <StyledMiddleInH3>
                                WMS SOLUTION
                            </StyledMiddleInH3>
                            <StyledMiddleInImg  src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_이미지/nosnos.png" />
                        </StyledMiddleInDiv>
                    </StyledMiddleDiv2>
                </StyledMiddleDiv>
            <FooterForm/>
        </StyledBodyDiv>
        )
}

export default PartnersIntroForm;


