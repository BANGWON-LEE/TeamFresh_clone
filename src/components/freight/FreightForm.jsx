//<FreightForm.jsx>는 사업소개 목록에 화물주선이 어떻게 진행되는지 알려주는 컴포넌트이다.
import React from "react";
import HeaderDetail from "../../containers/HeaderDetail";
import StyledBodyDiv from "../body/Styled/StyledBodyDiv";
import StyledMiddleDiv from "./styled/StyledMiddleDiv";
import FooterForm from "../footer/FooterForm"
import StyledImgDiv from "./styled/StyledImgDiv";
import StyledImgDiv2 from "./styled/StyledImgDiv2";
import StyledImgH1 from "./styled/StyledImgH1";
import StyledMiddleH2 from "./styled/StyledMiddleH2";
import StyledMiddleHr from "./styled/StyledMiddleHr";
import StyledMiddleP from "./styled/StyledMiddleP";
import StyledMiddle2Div from "./styled/StyledMiddle2Div";
import StyledMiddle2Div2 from "./styled/StyledMiddle2Div2";
import StyledMiddle2Div3 from "./styled/StyledMiddle2Div3";
import StyledMiddle2Img from "./styled/StyledMiddle2Img";
import StyledMiddle2Img2 from "./styled/StyledMiddle2Img2";
import StyledMiddle3InDiv from "./styled/StyledMiddle3InDiv";
import StyledMiddle3InDiv2 from "./styled/StyledMiddle3InDiv2";
import StyledMiddle3InDiv3 from "./styled/StyledMiddle3InDiv3";
import StyledMiddle3Div from "./styled/StyledMiddle3Div";
import StyledMiddle3Div2 from "./styled/StyledMiddle3Div2";
import StyledMiddle3InImg from "./styled/StyledMiddle3InImg";
import StyledMiddle3InH5 from "./styled/StyledMiddle3InH5";
import StyledMiddle3InUl from "./styled/StyledMiddle3InUl";
import StyledMiddle3InLi from "./styled/StyledMiddle3InLi";

const FreightForm = () => {
    return(
        <StyledBodyDiv>
            <HeaderDetail/>
                <StyledImgDiv>
                    <StyledImgDiv2>
                        <StyledImgH1>
                            화물주선
                        </StyledImgH1>
                    </StyledImgDiv2>
                </StyledImgDiv>
                <StyledMiddleDiv >
                    <StyledMiddleH2>
                        화물주선
                    </StyledMiddleH2>
                    <StyledMiddleHr />
                    <StyledMiddleP>
                        LF 사업부는 상품 출고 이후부터 배송까지 수도권 Full Cold Chain 영업용 화물차량 배송 대행 서비스를 제공하는 서비스입니다. 
                        <br/>
                        냉동탑 차량이 필요한 고객사에 팀프레시의 냉동탑 배송 매니저 네트워크에서 고객사의 요구조건에 적합한 매니저를 매칭하여 진행합니다.
                    </StyledMiddleP>
                </StyledMiddleDiv>
                <StyledMiddle2Div>
                    <StyledMiddle2Div2>
                        <StyledMiddle2Div3>
                            <StyledMiddle2Img src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_이미지/LF.png" />
                            <StyledMiddle2Img2 src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_이미지/LF_mobile.png" />
                        </StyledMiddle2Div3>
                    </StyledMiddle2Div2>
                </StyledMiddle2Div>
                <StyledMiddleDiv >
                    <StyledMiddleH2>
                        핵심역량
                    </StyledMiddleH2>
                    <StyledMiddleHr />
                </StyledMiddleDiv>
                <StyledMiddle3Div>
                    <StyledMiddle3Div2>
                        <StyledMiddle3InDiv>
                            <StyledMiddle3InDiv2>
                                <StyledMiddle3InImg src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_사진/planning.jpg" />
                            </StyledMiddle3InDiv2>
                        </StyledMiddle3InDiv>
                        <StyledMiddle3InDiv>
                            <StyledMiddle3InDiv2>
                                <StyledMiddle3InDiv3>
                                    <StyledMiddle3InH5>
                                        운영
                                    </StyledMiddle3InH5>
                                    <StyledMiddle3InUl>
                                        <StyledMiddle3InLi>
                                            냉장차량-화주사 매칭 시스템으로 기업 부담 감소
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            배송 매니저 교육을 통해 각 화주사에 맞게 안정적으로 배송
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            정직하고 직관적인 운송 정산체계 운영과 여러 제휴 혜택으로 배송 매니저 DB구축
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            충분한 양의 DB를 확보해 수요 증가 등의 이슈에 대처 가능
                                        </StyledMiddle3InLi>
                                    </StyledMiddle3InUl>
                                </StyledMiddle3InDiv3>
                            </StyledMiddle3InDiv2>
                        </StyledMiddle3InDiv>
                    </StyledMiddle3Div2>
                </StyledMiddle3Div>
            <FooterForm/>
        </StyledBodyDiv>
    
    
        )
}

export default FreightForm;
