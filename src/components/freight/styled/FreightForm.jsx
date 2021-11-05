import React from "react";
import { Link } from "react-router-dom";
import HeaderDetail from "../../containers/HeaderDetail";
import StyledBodyDiv from "../body/Styled/StyledBodyDiv";
import FooterForm from "../footer/FooterForm"
import StyledImgDiv from "./styled/StyledImgDiv";
import StyledImgDiv2 from "./styled/StyledImgDiv2";
import StyledImgH1 from "./styled/StyledImgH1";

const MainForm = () => {
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
            <FooterForm/>
        </StyledBodyDiv>
    
    
        )
}

export default MainForm;
