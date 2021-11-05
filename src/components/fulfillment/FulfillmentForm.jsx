//<FulfillmentForm.jsx>는 사업소개 목록에 풀필먼트 과정이 어떻게 진행되는지 알려주는 컴포넌트이다.
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

const FulfillmentForm = () => {
    return(
        <StyledBodyDiv>
            <HeaderDetail/>
                <StyledImgDiv>
                    <StyledImgDiv2>
                        <StyledImgH1>
                            풀필먼트
                        </StyledImgH1>
                    </StyledImgDiv2>
                </StyledImgDiv>
                <StyledMiddleDiv >
                    <StyledMiddleH2>
                        풀필먼트
                    </StyledMiddleH2>
                    <StyledMiddleHr />
                    <StyledMiddleP>
                        FU 사업부는 신선식품 물류 운영과 관련된 광범위한 업무를 수행합니다. 물류센터의 재고관리, 주문처리(피패킹) 부터 B2B 배송 및 고객사 판매 채널의 CS업무까지 담당하고 있습니다. 
                        <br/>
                        본 서비스는 보관 방법 별 관리가 요구되는 신선식품 고객사, 식품온도별 소량 상품 합포장 니즈가 있는 고객사에게 추천드립니다.
                    </StyledMiddleP>
                </StyledMiddleDiv>
                <StyledMiddle2Div>
                    <StyledMiddle2Div2>
                        <StyledMiddle2Div3>
                            <StyledMiddle2Img src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_이미지/FU.png" />
                            <StyledMiddle2Img2 src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_이미지/FU_mobile.png" />
                        </StyledMiddle2Div3>
                    </StyledMiddle2Div2>
                </StyledMiddle2Div>
                <StyledMiddleDiv >
                    <StyledMiddleH2>
                        주요업무
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
                                        기획
                                    </StyledMiddle3InH5>
                                    <StyledMiddle3InUl>
                                        <StyledMiddle3InLi>
                                            일정 설계 및 비용 컨설팅 제공
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            운영 프로세스 기획
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            구매/시공 관련 컨설팅 제공
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            현장 관리직 및 현장직 교육
                                        </StyledMiddle3InLi>
                                    </StyledMiddle3InUl>
                                </StyledMiddle3InDiv3>
                            </StyledMiddle3InDiv2>
                        </StyledMiddle3InDiv>
                    </StyledMiddle3Div2>
                </StyledMiddle3Div>
                <StyledMiddle3Div>
                    <StyledMiddle3Div2>
                        <StyledMiddle3InDiv>
                            <StyledMiddle3InDiv2>
                                <StyledMiddle3InImg src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_사진/management.jpg" />
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
                                            입/출고 재고 관리 및 적재관리
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            설비 도입(DAS, 컨베이어 벨트 등 설비 도입 및 WMS와 연계)
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            프로세스 효율화(병목공정 파악 및 개선)
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            작업동선 설계
                                        </StyledMiddle3InLi>
                                    </StyledMiddle3InUl>
                                </StyledMiddle3InDiv3>
                            </StyledMiddle3InDiv2>
                        </StyledMiddle3InDiv>
                    </StyledMiddle3Div2>
                </StyledMiddle3Div>
                <StyledMiddle3Div>
                    <StyledMiddle3Div2>
                        <StyledMiddle3InDiv>
                            <StyledMiddle3InDiv2>
                                <StyledMiddle3InImg src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_사진/administration.jpg" />
                            </StyledMiddle3InDiv2>
                        </StyledMiddle3InDiv>
                        <StyledMiddle3InDiv>
                            <StyledMiddle3InDiv2>
                                <StyledMiddle3InDiv3>
                                    <StyledMiddle3InH5>
                                        관리
                                    </StyledMiddle3InH5>
                                    <StyledMiddle3InUl>
                                        <StyledMiddle3InLi>
                                            CS 기획 및 운영
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            콜센터 시스템 구축
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            데이터 관리
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            현장 인력 채용 및 관리
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

export default FulfillmentForm;
