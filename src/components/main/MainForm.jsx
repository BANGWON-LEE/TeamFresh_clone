// <MainForm.jsx>는 메인페이지를 보여준다.
import React from "react";
import HeaderDetail from "../../containers/HeaderDetail";
import MainImgDetail from "../../containers/MainImgDetail";
import StyledBodyDiv from "../body/Styled/StyledBodyDiv";
import FooterForm from "../footer/FooterForm"
import StyledBusinessDiv from "./styled/StyledBusinessDiv";
import StyledBusinessDiv2 from "./styled/StyledBusinessDiv2";
import StyledBusinessDiv3 from "./styled/StyledBusinessDiv3";
import StyledBusinessH1 from "./styled/StyledBusinessH1";
import StyledCardDiv from "./styled/StyledCardDiv";
import StyledCardDiv2 from "./styled/StyledCardDiv2";
import StyledCardImg from "./styled/StyledCardImg";
import StyledCardsDiv from "./styled/StyledCardsDiv";
import StyledCardsDiv2 from "./styled/StyledCardsDiv2";
import StyledCardTextA from "./styled/StyledCardTextA";
import StyledCardTextDiv from "./styled/StyledCardTextDiv";
import StyledCardTextH4 from "./styled/StyledCardTextH4";
import StyledCardTextP from "./styled/StyledCardTextP";
import StyledConnectDiv from "./styled/StyledConnectDiv";
import StyledConnectDiv2 from "./styled/StyledConnectDiv2";
import StyledConnectDiv3 from "./styled/StyledConnectDiv3";
import StyledConnectH2 from "./styled/StyledConnectH2";
import StyledConnectSnsPath from "./styled/StyledConnectSnsPath";
import StyledConnectSnsA from "./styled/StyledConnectSnsA";
import StyledConnectSnsDiv from "./styled/StyledConnectSnsDiv";
import StyledConnectSnsSvg from "./styled/StyledConnectSnsSvg";
import StyledMainDiv2 from "./styled/StyledMainDiv2";
import StyledMainDiv2Inner from "./styled/StyledMainDiv2Inner";
import StyledMainDiv2Inner2 from "./styled/StyledMainDiv2Inner2";
import StyledMainDiv2LeadP from "./styled/StyledMainDiv2LeadP";
import StyledMainDiv2LeadP2 from "./styled/StyledMainDiv2LeadP2";
import StyledNoticeA from "./styled/StyledNoticeA";
import StyledNoticeDiv from "./styled/StyledNoticeDiv";
import StyledNoticeDiv2 from "./styled/StyledNoticeDiv2";
import StyledNoticeDiv3 from "./styled/StyledNoticeDiv3";
import StyledNoticeH2 from "./styled/StyledNoticeH2";
import StyledNoticeH5 from "./styled/StyledNoticeH5";
import StyledNoticeImg from "./styled/StyledNoticeImg";
import StyledNoticeInDiv from "./styled/StyledNoticeInDiv";
import StyledNoticeInDiv2 from "./styled/StyledNoticeInDiv2";
import StyledConnectSnsPath2 from "./styled/StyledConnectSnsPath2";
import MainBoardForm from "./MainBoardForm";
import BoardData from "../../data/BoardData";

const MainForm = () => {
    return(
        <StyledBodyDiv>
            <HeaderDetail/>
                <MainImgDetail/>
                <StyledMainDiv2>
                    <StyledMainDiv2Inner>
                        <StyledMainDiv2Inner2>
                            <StyledMainDiv2LeadP>
                                대한민국 No.1 Cold-Chain Platform
                            </StyledMainDiv2LeadP>
                            <StyledMainDiv2LeadP2>
                            팀프레시는 국내 유일 Door to Door Cold Chain 통합물류 서비스를 제공합니다. 입출고 – 주문처리 - 새벽배송 전 과정에 신선도 유지를 위한 설비/역량을 보유하고 있습니다.
                            </StyledMainDiv2LeadP2>
                        </StyledMainDiv2Inner2>
                    </StyledMainDiv2Inner>
                </StyledMainDiv2>
                <StyledBusinessDiv>
                    <StyledBusinessDiv2>
                        <StyledBusinessDiv3>
                            <StyledBusinessH1>
                                TIMF BUSINESS
                            </StyledBusinessH1>
                            <hr/>
                        </StyledBusinessDiv3>
                    </StyledBusinessDiv2>
                </StyledBusinessDiv>
                <StyledCardsDiv>
                    <StyledCardsDiv2>
                        <StyledCardDiv>
                            <StyledCardDiv2>
                                <StyledCardImg src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/main_card1.png"/>
                                <StyledCardTextDiv>
                                    <StyledCardTextH4>
                                        새벽배송
                                    </StyledCardTextH4>
                                    <StyledCardTextP>
                                        팀프레시는 당일 입고 및 출고를 원칙으로 새벽배송 망을 운영 중입니다. 배송 기사님들은 팀프레시 배송매니저 앱을 사용해 아침 7시까지 배송을 완료합니다.
                                    </StyledCardTextP>
                                    <StyledCardTextA href="/business/delivery">
                                        더 알아보기
                                    </StyledCardTextA>
                                </StyledCardTextDiv>
                            </StyledCardDiv2>
                        </StyledCardDiv>
                        <StyledCardDiv>   
                            <StyledCardDiv2>
                                <StyledCardImg src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/main_card2.png"/>
                                <StyledCardTextDiv>
                                    <StyledCardTextH4>
                                        화물주선
                                    </StyledCardTextH4>
                                    <StyledCardTextP>
                                        화물주선은 화물차량이 필요한 곳에 차량을 보내드리는 서비스입니다. 팀프레시의 데이터베이스를 활용해 차량의 원활한 수급이 가능하도록 도와드립니다.
                                    </StyledCardTextP>
                                        <StyledCardTextA href="/business/freight">
                                            더 알아보기
                                        </StyledCardTextA>
                                </StyledCardTextDiv>
                            </StyledCardDiv2>
                        </StyledCardDiv>
                        <StyledCardDiv>   
                            <StyledCardDiv2>
                                <StyledCardImg src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/main_card3.jpg"/>
                                <StyledCardTextDiv>
                                    <StyledCardTextH4>
                                        풀필먼트
                                    </StyledCardTextH4>
                                    <StyledCardTextP>
                                        풀필먼트는 재고관리, 주문처리, CS 업무 등을 자체적으로 해결하기 어려운 기업을 위한 서비스입니다.
                                        각 화주사별 요구사항을 매뉴얼화해 관리합니다.
                                    </StyledCardTextP>
                                        <StyledCardTextA href="/business/freight">
                                            더 알아보기
                                        </StyledCardTextA>
                                </StyledCardTextDiv>
                            </StyledCardDiv2>
                        </StyledCardDiv>
                        <StyledCardDiv>    
                            <StyledCardDiv2>
                                <StyledCardImg src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%82%AC%EC%A7%84/main_card4.jpg"/>
                                <StyledCardTextDiv>
                                    <StyledCardTextH4>
                                        그로서리
                                    </StyledCardTextH4>
                                    <StyledCardTextP>
                                        급식·외식·온라인 커머스 등의 고객사에 식자재를 공급하는 서비스입니다. 기존 물류망을 활용헤 식자재를 일괄 공급함으로써 비용 효율화가 가능하도록 합니다.
                                    </StyledCardTextP>
                                        <StyledCardTextA href="/business/grocery" >
                                            더 알아보기
                                        </StyledCardTextA>
                                </StyledCardTextDiv>
                            </StyledCardDiv2>
                        </StyledCardDiv>
                    </StyledCardsDiv2>
                </StyledCardsDiv>
                <StyledNoticeDiv>
                    <hr style={{borderTop: '1px solid rgba(0,0,0,.1)', marginTop: '1.5rem!important', marginBottom: '1.5rem!important'}} />
                    <StyledNoticeDiv2>
                        {BoardData &&
                        <StyledNoticeDiv3>
                            <StyledNoticeH2>
                                공지사항
                            </StyledNoticeH2>
                            <StyledNoticeInDiv>
                                <StyledNoticeInDiv2>
                                    <StyledNoticeH5>
                                        Notice
                                    </StyledNoticeH5>
                                    <StyledNoticeA>
                                        <StyledNoticeImg src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%95%84%EC%9D%B4%EC%BD%98/icon_plus.png" />
                                    </StyledNoticeA>
                                </StyledNoticeInDiv2>
                                <hr style={{borderTop: '1px solid rgba(0,0,0,.1)', marginTop: '1.5rem!important', marginBottom: '1.5rem!important'}} />
                        {BoardData.data.map((data) => (
                            <MainBoardForm data={data}/>
                            ))} 
                            </StyledNoticeInDiv>
                        </StyledNoticeDiv3>
                        }
                        <StyledNoticeDiv3>
                            <StyledNoticeH2>
                                보도자료
                            </StyledNoticeH2>
                            <StyledNoticeInDiv>
                                <StyledNoticeInDiv2>
                                    <StyledNoticeH5>
                                        TimF News
                                    </StyledNoticeH5>
                                    <StyledNoticeA>
                                        <StyledNoticeImg src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%95%84%EC%9D%B4%EC%BD%98/icon_plus.png" />
                                    </StyledNoticeA>
                                </StyledNoticeInDiv2>
                                <hr style={{borderTop: '1px solid rgba(0,0,0,.1)', marginTop: '1.5rem!important', marginBottom: '1.5rem!important'}} />
                            </StyledNoticeInDiv>
                        </StyledNoticeDiv3>
                    </StyledNoticeDiv2>
                    <hr style={{marginBottom:'0 !important'}} />
                </StyledNoticeDiv>
                <StyledConnectDiv>
                    <StyledConnectDiv2>
                        <StyledConnectDiv3>
                            <StyledConnectH2>
                                Connect
                            </StyledConnectH2>
                        </StyledConnectDiv3>    
                        <StyledConnectSnsDiv>                     
                            <StyledConnectSnsA href="https://www.facebook.com/teamfresh.timf">
                                <StyledConnectSnsSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                                    <StyledConnectSnsPath/>                                    
                                </StyledConnectSnsSvg>
                            </StyledConnectSnsA>
                            <StyledConnectSnsA href="https://www.youtube.com/watch?v=vlXzU-1Oec4">
                                <StyledConnectSnsSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                                    <StyledConnectSnsPath2/>                                    
                                </StyledConnectSnsSvg>
                            </StyledConnectSnsA>
                        </StyledConnectSnsDiv>
                    </StyledConnectDiv2>
                </StyledConnectDiv>
            <FooterForm/>
        </StyledBodyDiv>
    
    
        )
}

export default MainForm;
