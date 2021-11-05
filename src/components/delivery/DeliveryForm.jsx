//<DeliveryForm.jsx>는 사업소개 목록의 새벽배송이 어떤 방식으로 진행되는지 알려주는 컴포넌트이다.
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
import StyledMiddle2Img from "./styled/StyledMiddle2Img";
import StyledMiddle2Img2 from "./styled/StyledMiddle2Img2";
import StyledMiddle3Div from "./styled/StyledMiddle3Div";
import StyledMiddle3Div2 from "./styled/StyledMiddle3Div2";
import StyledMiddle3InDiv from "./styled/StyledMiddle3InDiv";
import StyledMiddle3InDiv2 from "./styled/StyledMiddle3InDiv2";
import StyledMiddle3InDiv3 from "./styled/StyledMiddle3InDiv3";
import StyledMiddle3InH5 from "./styled/StyledMiddle3InH5";
import StyledMiddle3InImg from "./styled/StyledMiddle3InImg";
import StyledMiddle3InLi from "./styled/StyledMiddle3InLi";
import StyledMiddle3InUl from "./styled/StyledMiddle3InUl";
import StyledMiddle4Div from "./styled/StyledMiddle4Div";
import StyledMiddle4Div2 from "./styled/StyledMiddle4Div2";
import StyledMiddle4H4 from "./styled/StyledMiddle4H4";
import StyledMiddle4H4b from "./styled/StyledMiddle4H4b";
import StyledMiddle4H5 from "./styled/StyledMiddle4H5";
import StyledMiddle4P from "./styled/StyledMiddle4P";
import StyledMiddleDiv from "./styled/StyledMiddleDiv";
import StyledMiddleH2 from "./styled/StyledMiddleH2";
import StyledMiddleHr from "./styled/StyledMiddleHr";
import StyledMiddleP from "./styled/StyledMiddleP";



const DeliveryForm = () => {
    return(
        <StyledBodyDiv>
            <HeaderDetail/>
                <StyledImgDiv>
                    <StyledImgDiv2>
                        <StyledImgH1>
                            새벽배송
                        </StyledImgH1>
                    </StyledImgDiv2>
                </StyledImgDiv>
                <StyledMiddleDiv>
                    <StyledMiddleH2>
                        새벽배송
                    </StyledMiddleH2>
                    <StyledMiddleHr />
                    <StyledMiddleP>
                        상품을 거래처에서 센터로 입고/검수 후 배송 권역에 맞게 배차/분류하여 최종 소비자에게 배송하는 TimF 서비스입니다.
                        <br/>
                        당일 입고, 당일 출고로 하여 재고 부담을 감소 시키며, 여러 화주의 물량을 크로스 도킹 형태로 배송함으로써 보다 효율적이고 경제적인
                        배송 시스템을 운영합니다.
                        <br/>
                        또한, 새벽배송 운영 시간에도 운영되는 TIMF CONTROL CENTER를 통해 본사 컨트롤 센터의 즉각적인 대응과 담당자 간 정보공유로 고객 클레임 발생 최소화를 할 수 있습니다.
                    </StyledMiddleP>
                </StyledMiddleDiv>
                <StyledMiddle2Div>
                    <StyledMiddle2Div2>
                        <StyledMiddle2Div3>
                            <StyledMiddle2Img src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_이미지/TS.png" />
                            <StyledMiddle2Img2 src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_이미지/TS_mobile.png"   />
                        </StyledMiddle2Div3>
                    </StyledMiddle2Div2>
                </StyledMiddle2Div>
                <StyledMiddleDiv>
                    <StyledMiddleH2>
                        물류센터 & 냉장차량
                    </StyledMiddleH2>
                    <StyledMiddleHr />
                </StyledMiddleDiv>
                <StyledMiddle3Div>
                    <StyledMiddle3Div2>
                        <StyledMiddle3InDiv>
                            <StyledMiddle3InDiv2>
                                <StyledMiddle3InImg src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_사진/center.jpg" />
                            </StyledMiddle3InDiv2>
                        </StyledMiddle3InDiv>
                        <StyledMiddle3InDiv>
                            <StyledMiddle3InDiv2>
                                <StyledMiddle3InImg src="" />
                                <StyledMiddle3InDiv3>
                                    <StyledMiddle3InUl>
                                        <StyledMiddle3InLi>
                                            주소: 경기도 수원시 권선구 오목천로 132번길 55
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            면적: 6611.57㎡(2,000평) 냉장, 냉동, 분류장 등
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            200대 차량 동시 접안 및 출차가능
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            입고 즉시 분류, 배송이 가능한 Cross Docking Terminal
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            수도권과 30~40km 근접거리 위치
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            수송, 배송 접근력 매우 우수
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            냉장 4℃ / 냉동 -22℃ 온도 유지
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            온도 트래킹 장치, 타코메타(Thachometer) 방식 사용
                                        </StyledMiddle3InLi>
                                    </StyledMiddle3InUl>
                                </StyledMiddle3InDiv3>
                            </StyledMiddle3InDiv2>
                        </StyledMiddle3InDiv>
                    </StyledMiddle3Div2>
                </StyledMiddle3Div>
                <StyledMiddleDiv>
                    <StyledMiddleH2>
                        핵심역량
                    </StyledMiddleH2>
                    <StyledMiddleHr />
                </StyledMiddleDiv>
                <StyledMiddle3Div>
                    <StyledMiddle3Div2>
                        <StyledMiddle3InDiv>
                            <StyledMiddle3InDiv2>
                                <StyledMiddle3InImg src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_사진/cold chain.png" />
                            </StyledMiddle3InDiv2>
                        </StyledMiddle3InDiv>
                        <StyledMiddle3InDiv>
                            <StyledMiddle3InDiv2>
                                <StyledMiddle3InDiv3>
                                    <StyledMiddle3InH5>
                                        Cold Chain
                                    </StyledMiddle3InH5>
                                    <StyledMiddle3InUl>
                                        <StyledMiddle3InLi>
                                            냉장/냉동 면적 2,000평 규모의 물류센터 보유
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            냉장탑차 다수 보유
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            국내 유일 Door to Door Cold Chain Service
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            국내 3PL 기업 중 가장 넓은 배송 권역
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
                                <StyledMiddle3InImg src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_사진/control center.jpg" />
                            </StyledMiddle3InDiv2>
                        </StyledMiddle3InDiv>
                        <StyledMiddle3InDiv>
                            <StyledMiddle3InDiv2>
                                <StyledMiddle3InDiv3>
                                    <StyledMiddle3InH5>
                                        Control Center
                                    </StyledMiddle3InH5>
                                    <StyledMiddle3InUl>
                                        <StyledMiddle3InLi>
                                            새벽시간 중앙 관제 24시간 연락망 구성
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            전문 CS 인력배치 배송사고에 대한 빠른 대처
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
                                <StyledMiddle3InImg src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_사진/license.jpg" />
                            </StyledMiddle3InDiv2>
                        </StyledMiddle3InDiv>
                        <StyledMiddle3InDiv>
                            <StyledMiddle3InDiv2>
                                <StyledMiddle3InDiv3>
                                    <StyledMiddle3InH5>
                                        라이센스
                                    </StyledMiddle3InH5>
                                    <StyledMiddle3InUl>
                                        <StyledMiddle3InLi>
                                            법인 화물 운송업 취득
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            법인 화물 주선업 취득
                                        </StyledMiddle3InLi>
                                        <StyledMiddle3InLi>
                                            배송차량 영업번호판 완비
                                        </StyledMiddle3InLi>
                                    </StyledMiddle3InUl>
                                </StyledMiddle3InDiv3>
                            </StyledMiddle3InDiv2>
                        </StyledMiddle3InDiv>
                    </StyledMiddle3Div2>
                </StyledMiddle3Div>
                <StyledMiddleDiv>
                    <StyledMiddleH2>
                        배송지역
                    </StyledMiddleH2>
                    <StyledMiddleHr />
                </StyledMiddleDiv>
                <StyledMiddle4Div>
                    <StyledMiddle3Div2>
                        <StyledMiddle3InDiv>
                            <StyledMiddle3InDiv2>
                                <StyledMiddle3InDiv3>
                                <StyledMiddle3InImg src="https://www.teamfresh.co.kr/resources/assets/img/홈페이지_이미지/map.png" />
                                </StyledMiddle3InDiv3>
                            </StyledMiddle3InDiv2>
                        </StyledMiddle3InDiv>
                        <StyledMiddle3InDiv>
                            <StyledMiddle4Div2 >
                                <StyledMiddle3InDiv3>
                                    <StyledMiddle4H4>
                                        지역공통사항 : 섬/공단/학교/학교기숙사/병원/관공서는 배송불가
                                    </StyledMiddle4H4>
                                    <StyledMiddle4H4b>
                                        전 지역 가능
                                    </StyledMiddle4H4b>
                                    <StyledMiddle4P>
                                        서울, 안양시, 부천시, 구리시, 성남시, 수원시, 광명시, 의정부시,
                                        안산시, 시흥시(안산시흥 공단지역 제외)
                                    </StyledMiddle4P>
                                    <StyledMiddle4H4b>
                                        일부 가능 지역
                                    </StyledMiddle4H4b>
                                    <StyledMiddle4H5>
                                        광주시
                                    </StyledMiddle4H5>
                                    <StyledMiddle4P>
                                        오포읍
                                    </StyledMiddle4P>
                                    <StyledMiddle4H5>
                                        고양시
                                    </StyledMiddle4H5>
                                    <StyledMiddle4P>
                                        덕양구 – 성사동(성사1~2동), 화정동(화정1~2동), 행신동(행신1~3동), 주교동, 토당동, 도내동, 삼송동, 원흥동, 흥도동, 능곡동, 행주동
                                    </StyledMiddle4P>
                                    <StyledMiddle4P>
                                        일산동구 – 장항동(장항1~2동), 마두동(마두1~2동),
                                        백석동(백석1~2동), 식사동, 풍동, 중산동, 정발산동, 풍산동
                                    </StyledMiddle4P>
                                    <StyledMiddle4P>
                                        일산서구 – 일산동(일산1~3동), 주엽동(주엽1~2동), 가좌동, 덕이동,
                                        대화동, 탄현동, 송산동, 송포동
                                    </StyledMiddle4P>
                                    <StyledMiddle4H5>
                                        과천시
                                    </StyledMiddle4H5>
                                    <StyledMiddle4P>
                                        관문동 제외 전지역
                                    </StyledMiddle4P>
                                    <StyledMiddle4H5>
                                        용인시
                                    </StyledMiddle4H5>
                                    <StyledMiddle4P>
                                        수지구 고기동, 처인구 제외 전지역
                                    </StyledMiddle4P>
                                    <StyledMiddle4H5>
                                        인천광역시
                                    </StyledMiddle4H5>
                                    <StyledMiddle4P>
                                        계양구, 부평구, 남동구, 연수구, 미추홀구, 서구
                                    </StyledMiddle4P>
                                    <StyledMiddle4H5>
                                        하남시
                                    </StyledMiddle4H5>
                                    <StyledMiddle4P>
                                        미사동(미사1~2동), 신장동(신장1~2동), 덕풍동(덕풍1~3동), 망월동,
                                        선동, 풍산동, 창우동, 천현동, 학암동, 위례동
                                    </StyledMiddle4P>
                                    <StyledMiddle4H5>
                                        파주시
                                    </StyledMiddle4H5>
                                    <StyledMiddle4P>
                                        금촌동(금촌1~3동), 운정1~3동, 야동동, 다율동, 와동동, 목동동,
                                        동패동, 문발동, 야당동, 교하동
                                    </StyledMiddle4P>
                                    <StyledMiddle4H5>
                                        화성시
                                    </StyledMiddle4H5>
                                    <StyledMiddle4P>
                                        병점동(병점1~2동), 동탄1~6동, 진안동, 반월동, 기산동, 능동,
                                        반송동, 석우동, 영천동, 청계동, 오산동, 목동, 산척동
                                    </StyledMiddle4P>
                                    <StyledMiddle4H5>
                                        의왕시
                                    </StyledMiddle4H5>
                                    <StyledMiddle4P>
                                        내손동(내손1~2동), 포일동, 오전동, 고천동
                                    </StyledMiddle4P>
                                    <StyledMiddle4H5>
                                        군포시
                                    </StyledMiddle4H5>
                                    <StyledMiddle4P>
                                        군포1~2동, 산본동(산본1~2동), 금정동, 당동, 당정동, 부곡동,
                                        광정동, 궁내동, 수리동, 재궁동, 오금동
                                    </StyledMiddle4P>
                                    <StyledMiddle4H5>
                                        김포시
                                    </StyledMiddle4H5>
                                    <StyledMiddle4P>
                                        양촌읍, 고촌읍, 운양동, 장기동, 구래동, 마산동, 걸포동, 감정동,
                                        사우동, 북변동, 풍무동
                                    </StyledMiddle4P>
                                    <StyledMiddle4H5>
                                        남양주시
                                    </StyledMiddle4H5>
                                    <StyledMiddle4P>
                                        진전읍, 진건읍, 와부읍, 별내면, 퇴계원면, 다산동(다산1~2동),
                                        별내동, 평내동, 호평동, 금곡동, 이패동, 도농동, 지금동
                                    </StyledMiddle4P>
                                    <StyledMiddle4H5>
                                        오산시
                                    </StyledMiddle4H5>
                                    <StyledMiddle4P>
                                        양산동, 세교동, 외삼미동, 금암동, 내삼미동, 수청동, 은계동,
                                        궐동, 서동, 벌음동, 탑동, 누읍동, 갈곶동, 청호동, 고현동,
                                        원동, 부산동, 오산동, 청학동, 가수동
                                    </StyledMiddle4P>
                                    <StyledMiddle4H5>
                                        평택시
                                    </StyledMiddle4H5>
                                    <StyledMiddle4P>                         
                                        고덕면, 팽성읍, 신장동, 독곡동, 지산동, 서정동, 이중동, 장안동,
                                        도일동, 장당동, 가재동, 철괴동, 칠원동, 지제동, 세교동, 통복동,
                                        평택동, 군문동, 합정동, 비전동, 소사동, 용이동, 죽백동, 동삭동                      
                                    </StyledMiddle4P>
                                </StyledMiddle3InDiv3>
                            </StyledMiddle4Div2>
                        </StyledMiddle3InDiv>
                    </StyledMiddle3Div2>
                </StyledMiddle4Div>
            <FooterForm/>
        </StyledBodyDiv>
        )
}

export default DeliveryForm;


