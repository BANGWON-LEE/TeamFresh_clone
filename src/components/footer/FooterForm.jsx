//<Footer.jsx>는 웹 하단의 내용을 보여준다.
import React from "react";
import { Link } from "react-router-dom";
import StyledContentDiv1 from "./styled/StyledContentDiv1";
import StyledContentDiv2 from "./styled/StyledContentDiv2";
import StyledContentH5 from "./styled/StyledContentH5";
import StyledContentP from "./styled/StyledContentP";
import StyledFooterDiv from "./styled/StyledFooterDiv";
import StyledtextDiv from "./styled/StyledtextDiv";

const FooterForm = () => {

    return(
        <StyledFooterDiv>
            <StyledtextDiv>
                <StyledContentDiv1>
                    <hr/>
                        <StyledContentH5>
                            Timf
                        </StyledContentH5>
                    <hr/>
                    <StyledContentP>
                        상호명: (주)팀프레시
                    </StyledContentP>
                    <StyledContentP>
                        사업자등록번호: 561-88-01138
                    </StyledContentP>
                    <StyledContentP>
                        대표자:이성일
                    </StyledContentP>
                </StyledContentDiv1>
                <StyledContentDiv1>
                    <hr/>
                    <StyledContentH5>
                        Contact us
                    </StyledContentH5>
                    <hr/>
                    <StyledContentP>
                        Tel: 02-423-0525
                    </StyledContentP>
                    <StyledContentP>
                        Fax: 02-3432-0525
                    </StyledContentP>
                    <StyledContentP>
                        E-mail: info@timf.co.kr
                    </StyledContentP>
                    <StyledContentP>
                        서울특별시 송파구 위례성대로 12길 15-1
                    </StyledContentP>
                    <br/>
                    <StyledContentP>
                        영업 및 제휴 문의:
                    </StyledContentP>
                    <StyledContentP>
                        E-mail: sales@timf.co.kr
                    </StyledContentP>
                </StyledContentDiv1>
                <StyledContentDiv1>
                    <hr/>
                        <StyledContentH5>
                            Others
                        </StyledContentH5>
                    <hr/>
                    <a href="/notice/employment" style={{textDecoration: 'none', color:'rgb(213, 213, 213)'}}>
                        <StyledContentP>
                            인재채용
                        </StyledContentP>
                    </a>
                    <a href="/notice/service" style={{textDecoration: 'none', color:'rgb(213, 213, 213)'}}>
                    <StyledContentP>
                        서비스 소개
                    </StyledContentP>
                    </a>
                    <Link style={{textDecoration: 'none', color:'rgb(213, 213, 213)'}}>
                    <StyledContentP>
                        개인정보 처리방침
                    </StyledContentP>
                    </Link>
                    <Link style={{textDecoration: 'none', color:'rgb(213, 213, 213)'}}>
                    <StyledContentP>
                        위치기반 서비스 이용약관
                    </StyledContentP>
                    </Link>
                </StyledContentDiv1>
            </StyledtextDiv>
            <StyledContentDiv2>
                <hr stlye={{width: '100%', marginTop:'0.8rem', marginBottom: '1rem', boxSizing:'content-box'  }} />
                <StyledContentH5>
                    <Link style={{textDecoration: 'none', color:'rgb(213, 213, 213)'}}>
                        © 
                    </Link>
                    TeamFresh All right reserved
                </StyledContentH5>
            </StyledContentDiv2>
        </StyledFooterDiv>
        )
}

export default FooterForm;
