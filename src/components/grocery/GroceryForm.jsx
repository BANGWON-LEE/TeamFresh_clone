//<GroceryForm.jsx>는 사업소개 목록에 그로서리에 대해서 설명하는 컴포넌트이다.
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
import StyledMiddle2Img from "./styled/StyledMiddle2Img";
import StyledMiddle3InH5 from "./styled/StyledMiddle3InH5";
import StyledMiddle2Div4 from "./styled/StyledMiddle2Div4";
import StyledMiddle2P from "../companyIntro/styled/StyledMiddle2P";
import StyledMiddle2b from "./styled/StyledMiddle2b";
import StyledMiddle4Div from "./styled/StyledMiddle4Div";
import StyledMiddle4Div2 from "./styled/StyledMiddle4Div2";
import StyledMiddleSvg from "./styled/StyledMiddleSvg";
import StyledMiddlePath from "./styled/StyledMiddlePath";
import StyledMiddle4Div3 from "./styled/StyledMiddle4Div3";
import StyledMiddleArrowSvg from "./styled/StyledMiddleArrowSvg";
import StyledMiddleArrowPath from "./styled/StyledMiddleArrowPath";
import StyledMiddlePath2 from "./styled/StyledMiddlePath2";
import StyledMiddlePath3 from "./styled/StyledMiddlePath3";
import StyledMiddlePath4 from "./styled/StyledMiddlePath4";
import StyledMiddlePath5 from "./styled/StyledMiddlePath5";
import StyledMiddlePath6 from "./styled/StyledMiddlePath6";
import StyledMiddleP2 from "./styled/StyledMiddleP2";
import StyledUnderDiv from "./styled/StyledUnderDiv";
import StyledUnderDiv2 from "./styled/StyledUnderDiv2";
import StyledUnderH5 from "./styled/StyledUnderH5";
import StyledUnderInDiv from "./styled/StyledUnderInDiv";
import StyledUnderInP from "./styled/StyledUnderInP";


const GroceryForm = () => {
    return(
        <StyledBodyDiv>
            <HeaderDetail/>
                <StyledImgDiv>
                    <StyledImgDiv2>
                        <StyledImgH1>
                            그로서리
                        </StyledImgH1>
                    </StyledImgDiv2>
                </StyledImgDiv>
                <StyledMiddleDiv >
                    <StyledMiddleH2>
                        그로서리
                    </StyledMiddleH2>
                    <StyledMiddleHr />
                    <StyledMiddleP>
                        그로서리 사업부는 급식/외식/온라인 식품 커머스 등 고객사에 식자재를
                        공급하는 사업부로, 각 고객사의 비즈니스 모델에 적합한 식자재 큐레이션
                        서비스를 제공하고 있습니다. 
                        <br/>
                        식자재 및 부자재 협력사와 SCM Network를 구축하고 기존 물류먕을 통해 제조
                        고객사에 식자재/부자재를 일괄 공급함으로써 구매력이 부족한 중소 고객사에
                        좋은 식자재를 더욱 합리적인 가격으로 제공하고 있습니다.
                    </StyledMiddleP>
                </StyledMiddleDiv>
                <StyledMiddleDiv >
                    <StyledMiddleH2>
                        식자재 구매 경쟁력
                    </StyledMiddleH2>
                    <StyledMiddleHr />
                    <StyledMiddleP>
                        한 곳에서, 한번에, 간편하게 대기업 유통사 제품 단일 시스템 발주가 가능합니다. 
                        <br/>
                        안정적으로, 저렴하게, 품질유지까지 시세에 민감한 농산/청과 품목을 시장 경매 및 산지 직거래까지 한번에 확인 가능합니다.
                        <br/>
                        더 싸게, 더 편하게, 더 탄력적으로 당사 물류 센터 활용을 통한 재고 매입으로 단가 경쟁력을 확보했습니다. 
                        <br/>
                        단가경쟁력, 운영안정성, 발주유연성의 중간 유통과정 없는 공산품 직거래 매입으로 구매 경쟁력이 있습니다.
                    </StyledMiddleP>
                </StyledMiddleDiv>
                <StyledMiddle2Div>
                    <StyledMiddle2Div2>
                        <StyledMiddle2Img src="https://www.teamfresh.co.kr/resources/assets/img//홈페이지_이미지/gr1.png" />
                        <StyledMiddle2Div4 > 
                            <StyledMiddle2P>
                                <StyledMiddle2b>                                  
                                    대기업 유통사   
                                <br/>
                                    매입
                                </StyledMiddle2b>
                                    을 통한 상품 구색력 강화
                            </StyledMiddle2P>
                        </StyledMiddle2Div4>
                    </StyledMiddle2Div2>
                    <StyledMiddle2Div2>
                        <StyledMiddle2Img src="https://www.teamfresh.co.kr/resources/assets/img//홈페이지_이미지/gr2.png" />
                        <StyledMiddle2Div4 > 
                            <StyledMiddle2P>
                                <StyledMiddle2b>                                  
                                    시세에 민감한 품목(농산/청과)   
                                </StyledMiddle2b>
                                    시장 경매를 통한 매입
                            </StyledMiddle2P>
                        </StyledMiddle2Div4>
                    </StyledMiddle2Div2>
                    <StyledMiddle2Div2>
                        <StyledMiddle2Img src="https://www.teamfresh.co.kr/resources/assets/img//홈페이지_이미지/gr3.png" />
                        <StyledMiddle2Div4 > 
                            <StyledMiddle2P>
                                당사 물류센터를 활용하여 
                                <StyledMiddle2b>                                  
                                    거래처별 맞춤 품목
                                </StyledMiddle2b>
                                재고 매입
                            </StyledMiddle2P>
                        </StyledMiddle2Div4>
                    </StyledMiddle2Div2>
                    <StyledMiddle2Div2>
                        <StyledMiddle2Img src="https://www.teamfresh.co.kr/resources/assets/img//홈페이지_이미지/gr4.png" />
                        <StyledMiddle2Div4 > 
                            <StyledMiddle2P>
                                <StyledMiddle2b>                                  
                                    거래처별 상위 출하 품목
                                </StyledMiddle2b>
                                    제조사 직거래 매입
                            </StyledMiddle2P>
                        </StyledMiddle2Div4>
                    </StyledMiddle2Div2>
                </StyledMiddle2Div>
                <StyledMiddleDiv >
                    <StyledMiddleH2>
                        물류 경쟁력
                    </StyledMiddleH2>
                    <StyledMiddleHr />
                    <StyledMiddleP>
                        전 과정 Cold Chain System으로 냉장/냉동시설 및 온도조절기 부착하여 더욱 신선하게 식자재를 제공해드립니다.  
                        <br/>
                        TMS 운송관리_공급정보/배차 관련 다양한 기준을 제시하여 빠른 배차 조정이 가능합니다.
                        <br/>
                        GPS 위치추적 및 실시간 차량 관제가 가능하여 위치정보, 운행 중 온도관리 등 배송 차량의 실시간 관리가 가능합니다.
                    </StyledMiddleP>
                </StyledMiddleDiv>
                <StyledMiddle4Div>
                    <StyledMiddle2Div2>
                        <StyledMiddle4Div2>
                            <StyledMiddleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <StyledMiddlePath />
                            </StyledMiddleSvg>
                            <StyledMiddle4Div3>
                                <StyledMiddle3InH5>
                                    입고
                                </StyledMiddle3InH5>
                            </StyledMiddle4Div3>
                        </StyledMiddle4Div2>
                        <StyledMiddleP>  
					        주문상품 센터입고
                        </StyledMiddleP>    
                    </StyledMiddle2Div2>
                    <StyledMiddleArrowSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <StyledMiddleArrowPath/>
                    </StyledMiddleArrowSvg>
                    <StyledMiddle2Div2>
                        <StyledMiddle4Div2>
                            <StyledMiddleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <StyledMiddlePath2 />
                            </StyledMiddleSvg>
                            <StyledMiddle4Div3>
                                <StyledMiddle3InH5>
                                    검수/검품
                                </StyledMiddle3InH5>
                            </StyledMiddle4Div3>
                        </StyledMiddle4Div2>
                        <StyledMiddleP>  
					        상품의 수량/품질확인
                        </StyledMiddleP>    
                    </StyledMiddle2Div2>
                    <StyledMiddleArrowSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <StyledMiddleArrowPath/>
                    </StyledMiddleArrowSvg>
                    <StyledMiddle2Div2>
                        <StyledMiddle4Div2>
                            <StyledMiddleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <StyledMiddlePath3 />
                            </StyledMiddleSvg>
                            <StyledMiddle4Div3>
                                <StyledMiddle3InH5>
                                    이동/보관
                                </StyledMiddle3InH5>
                            </StyledMiddle4Div3>
                        </StyledMiddle4Div2>
                        <StyledMiddleP2>  
					        창고 및 분류장으로 이동/보관
                        </StyledMiddleP2>    
                    </StyledMiddle2Div2>
                    <StyledMiddleArrowSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <StyledMiddleArrowPath/>
                    </StyledMiddleArrowSvg>
                    <StyledMiddle2Div2>
                        <StyledMiddle4Div2>
                            <StyledMiddleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <StyledMiddlePath4 />
                            </StyledMiddleSvg>
                            <StyledMiddle4Div3>
                                <StyledMiddle3InH5>
                                    분류/피킹
                                </StyledMiddle3InH5>
                            </StyledMiddle4Div3>
                        </StyledMiddle4Div2>
                        <StyledMiddleP2>  
                            출고예정상품에 대해 분류 및 창고 내 pick-up
                        </StyledMiddleP2>    
                    </StyledMiddle2Div2>
                    <StyledMiddleArrowSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <StyledMiddleArrowPath/>
                    </StyledMiddleArrowSvg>
                    <StyledMiddle2Div2>
                        <StyledMiddle4Div2>
                            <StyledMiddleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <StyledMiddlePath5 />
                            </StyledMiddleSvg>
                            <StyledMiddle4Div3>
                                <StyledMiddle3InH5>
                                    검수/상차
                                </StyledMiddle3InH5>
                            </StyledMiddle4Div3>
                        </StyledMiddle4Div2>
                        <StyledMiddleP2>  
                            2차검수 및 배송차량 상품 적재
                        </StyledMiddleP2>    
                    </StyledMiddle2Div2>
                    <StyledMiddleArrowSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <StyledMiddleArrowPath/>
                    </StyledMiddleArrowSvg>
                    <StyledMiddle2Div2>
                        <StyledMiddle4Div2>
                            <StyledMiddleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <StyledMiddlePath6 />
                            </StyledMiddleSvg>
                            <StyledMiddle4Div3>
                                <StyledMiddle3InH5>
                                    배송/추적
                                </StyledMiddle3InH5>
                            </StyledMiddle4Div3>
                        </StyledMiddle4Div2>
                        <StyledMiddleP2>  
                            배송차량 실시간 위치/온도 관제
                        </StyledMiddleP2>    
                    </StyledMiddle2Div2>
                </StyledMiddle4Div>
                <StyledMiddleDiv >
                    <StyledMiddleH2>
                        고객지원 서비스
                    </StyledMiddleH2>
                    <StyledMiddleHr />
                    <StyledMiddleP>
                        에네스푸드넷 온라인 발주시스템을 통해 대기업매입, 시장매입, 재고매입, 직거래 매입이 한번에 가능합니다.  
                        <br/>
                        클레임 발생을 대비하여 VOC담당자가 사전, 사후 관리 서비스를 제공합니다.
                    </StyledMiddleP>
                </StyledMiddleDiv>
                <StyledUnderDiv>
                    <StyledUnderDiv2>
                        <StyledUnderH5>
                            ① 사전관리
                        </StyledUnderH5>
                        <StyledUnderInDiv>
                            <StyledUnderInP>
                                CS팀 상시관리
                                <br/>
                                조기출근 주말대응
                            </StyledUnderInP>
                        </StyledUnderInDiv>
                    </StyledUnderDiv2>
                    <StyledUnderDiv2>
                        <StyledUnderH5>
                            ② 클레임 발생
                        </StyledUnderH5>
                        <StyledUnderInDiv>
                            <StyledUnderInP>
                                영업사원 / CS사원 
                                <br/>
                                접수 및 응대 
                                <br/>
                                (오입고, 미입고, 품질불량 등)
                            </StyledUnderInP>
                        </StyledUnderInDiv>
                    </StyledUnderDiv2>
                    <StyledUnderDiv2>
                        <StyledUnderH5>
                            ③ 클레임 처리
                        </StyledUnderH5>
                        <StyledUnderInDiv>
                            <StyledUnderInP>
                                원인 분석 및 확인 
                                <br/>
                                1시간 이내 해결
                                <br/>
                                (교환, 반품, 재입고 등)
                            </StyledUnderInP>
                        </StyledUnderInDiv>
                    </StyledUnderDiv2>
                    <StyledUnderDiv2>
                        <StyledUnderH5>
                            ① 사후관리
                        </StyledUnderH5>
                        <StyledUnderInDiv>
                            <StyledUnderInP>
                                피드백 관리
                                <br/>
                                재발방지 교육 실시
                            </StyledUnderInP>
                        </StyledUnderInDiv>
                    </StyledUnderDiv2>
                </StyledUnderDiv>
            <FooterForm/>
        </StyledBodyDiv>
        )
}

export default GroceryForm;
