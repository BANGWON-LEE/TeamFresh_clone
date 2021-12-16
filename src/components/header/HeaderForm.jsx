//<Header.jsx> 웹 상단 부분을 보여준다. (메뉴바 등)
import React from "react";
import { Link } from "react-router-dom";
import StyledBrandImg from "./styled/StyledBrandImg";
import StyledBtnSpan from "./styled/StyledBtnSpan";
import StyledButton from "./styled/StyledButton";
import StyledDropMenuDiv from "./styled/StyledDropMenuDiv";
import StyledDropMenuDiv2 from "./styled/StyledDropMenuDiv2";
import StyledNavbar from "./styled/StyledNavbar";
import StyledNavbarLi from "./styled/StyledNavbarLi";
import StyledNavbarUl from "./styled/StyledNavbarUl";
import StyledNavCollapse from "./styled/StyledNavCollapse";
import StyledNavCollapse2 from "./styled/StyledNavCollapse2";
import StyledNavP from "./styled/StyledNavP";

const HeaderForm = ({onCompany, 
                    onNotCompany, 
                    onNotBusiness, 
                    onBusiness, 
                    onNotNotice, 
                    onNotice, 
                    companyMenu, 
                    businessMenu, 
                    noticeMenu,
                    }) => {

                    
    return(
        <StyledNavbar>
            <Link to='/'>
                <StyledBrandImg src='https://www.teamfresh.co.kr/resources/assets/img/logo.png'/>
            </Link>
            <StyledNavCollapse>
                <StyledNavbarUl>
                    <StyledNavbarLi onMouseLeave={onNotCompany} onMouseEnter={onCompany} >
                        <StyledNavP  >
                            회사소개
                        </StyledNavP>    
                            {companyMenu === true ?
                        <StyledDropMenuDiv className="drop">
                            <a href="/company/timf" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    회사소개
                                </StyledDropMenuDiv2>    
                            </a>
                            <a href="/company/partners" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    협력사 소개
                                </StyledDropMenuDiv2>    
                            </a>
                            <a href="/company/customer" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    고객사 소개
                                </StyledDropMenuDiv2>    
                            </a>
                            <a href="/company/location" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    오시는 길
                                </StyledDropMenuDiv2>    
                            </a>
                        </StyledDropMenuDiv>
                            : <div/>} 
                    </StyledNavbarLi>
                    <StyledNavbarLi onMouseLeave={onNotBusiness} onMouseEnter={onBusiness} >
                        <StyledNavP>
                            사업소개
                        </StyledNavP>
                        {businessMenu === true ?
                        <StyledDropMenuDiv>
                            <a href="/business/delivery" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    새벽배송
                                </StyledDropMenuDiv2>    
                            </a>
                            <a href="/business/freight" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    화물주선
                                </StyledDropMenuDiv2>    
                            </a>
                            <a href="/business/fulfillment" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    풀필먼트
                                </StyledDropMenuDiv2>    
                            </a>
                            <a href="/business/grocery" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    그로서리
                                </StyledDropMenuDiv2>    
                            </a>
                        </StyledDropMenuDiv>
                        : <div/>} 
                    </StyledNavbarLi>
                    <StyledNavbarLi onMouseLeave={onNotNotice} onMouseEnter={onNotice} >
                        <StyledNavP>
                            공지사항
                        </StyledNavP>    
                        {noticeMenu === true ?
                        <StyledDropMenuDiv>
                            <a href="/notice/notice" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    공지사항
                                </StyledDropMenuDiv2>    
                            </a>
                            <a href="/notice/employment" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    인재채용
                                </StyledDropMenuDiv2>    
                            </a>
                            <a href="/notice/service" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    서비스소개
                                </StyledDropMenuDiv2>    
                            </a>
                        </StyledDropMenuDiv>
                        : <div/>} 
                    </StyledNavbarLi>
                    <StyledNavbarLi>
                        <a href="/news" style={{textDecoration: 'none'}}>
                            <StyledNavP>
                                보도자료
                            </StyledNavP>    
                        </a>
                    </StyledNavbarLi>
                </StyledNavbarUl>
            </StyledNavCollapse>
            <StyledNavCollapse2 style={{display:'block'}} > 
                <StyledNavbarUl>
                    <StyledNavbarLi onMouseLeave={onNotCompany} onMouseEnter={onCompany} >
                        <StyledNavP  >
                            회사소개
                        </StyledNavP>    
                            {companyMenu === true ?
                        <StyledDropMenuDiv className="drop">
                            <a href="/company/timf" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    회사소개
                                </StyledDropMenuDiv2>    
                            </a>
                            <a href="/company/partners" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    협력사 소개
                                </StyledDropMenuDiv2>    
                            </a>
                            <a href="/company/customer" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    고객사 소개
                                </StyledDropMenuDiv2>    
                            </a>
                            <a href="/company/location" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    오시는 길
                                </StyledDropMenuDiv2>    
                            </a>
                        </StyledDropMenuDiv>
                            : <div/>} 
                    </StyledNavbarLi>
                    <StyledNavbarLi onMouseLeave={onNotBusiness} onMouseEnter={onBusiness} >
                        <StyledNavP>
                            사업소개
                        </StyledNavP>
                        {businessMenu === true ?
                        <StyledDropMenuDiv>
                            <a href="/business/delivery" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    새벽배송
                                </StyledDropMenuDiv2>    
                            </a>
                            <a href="/business/freight" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    화물주선
                                </StyledDropMenuDiv2>    
                            </a>
                            <a href="/business/fulfillment" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    풀필먼트
                                </StyledDropMenuDiv2>    
                            </a>
                            <a href="/business/grocery" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    그로서리
                                </StyledDropMenuDiv2>    
                            </a>
                        </StyledDropMenuDiv>
                        : <div/>} 
                    </StyledNavbarLi>
                    <StyledNavbarLi onMouseLeave={onNotNotice} onMouseEnter={onNotice} >
                        <StyledNavP>
                            공지사항
                        </StyledNavP>    
                        {noticeMenu === true ?
                        <StyledDropMenuDiv>
                            <a href="/notice/notice" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    공지사항
                                </StyledDropMenuDiv2>    
                            </a>
                            <a href="/notice/employment" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    인재채용
                                </StyledDropMenuDiv2>    
                            </a>
                            <a href="/notice/service" style={{textDecoration: 'none'}}>
                                <StyledDropMenuDiv2>
                                    서비스소개
                                </StyledDropMenuDiv2>    
                            </a>
                        </StyledDropMenuDiv>
                        : <div/>} 
                    </StyledNavbarLi>
                    <StyledNavbarLi>
                        <a href="/news" style={{textDecoration: 'none'}}>
                            <StyledNavP>
                                보도자료
                            </StyledNavP>    
                        </a>
                    </StyledNavbarLi>
                </StyledNavbarUl>
            </StyledNavCollapse2>       
        </StyledNavbar>
    
    
    
    
        )
}

export default HeaderForm;
