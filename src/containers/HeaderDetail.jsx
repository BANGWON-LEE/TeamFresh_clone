// <HeaderDetail.jsx>는 웹페이지 상단의 header 부분을 관리하는 컴포넌트.
import React from "react";
import { useState } from "react";
import { withRouter } from "react-router";
import HeaderForm from "../components/header/HeaderForm";


function HeaderDetail() {

    const [menuState, setMenuState] = useState(false);
    const [menuNum, setMenuNum] = useState(0);
    const [companyMenu, setCompanyMenu] = useState(false);
    const [businessMenu, setBusinessMenu] = useState(false);
    const [noticeMenu, setNoticeMenu] = useState(false);

    function menuBtn(){
        setMenuNum(menuNum + 1)
        if(menuNum % 2 === 0 ){
        setMenuState(true);
        } else {
            setMenuState(false);
        }
    }

    function onNotCompany(){
        setCompanyMenu(false);  
    }

    function onCompany(){
        setCompanyMenu(true); 
    }

    function onNotBusiness(){
        setBusinessMenu(false);  
    }

    function onBusiness(){
        setBusinessMenu(true); 
    }

    function onNotNotice(){
        setNoticeMenu(false);  
    }

    function onNotice(){
        setNoticeMenu(true); 
    }

    //by 이방원 
    // 위의 useState부터 아래의 function onNotice는, header의 목록 dropMenu를 볼 수 있는 기능을 관리한다. 
    //각각의 useState가 false가 default고 각 항목에 마우스를 터치하면 onMouseEnter가 되어 useState가 true로 바뀐다. 
    //그리고 터치하지 않으면 onMouseLeave가 되어 useState가 false로 바뀐다. 
    //삼항연산자를 사용하여 useState가 true일 경우에는 dropMenu가 보이고 false일 때는 보이지 않는다. 
    //2021-10-29
    
   
    

    return(
        <HeaderForm
            onCompany={onCompany}
            onNotCompany={onNotCompany}
            onBusiness={onBusiness}
            onNotBusiness={onNotBusiness}
            onNotice={onNotice}
            onNotNotice={onNotNotice}
            companyMenu={companyMenu}
            businessMenu={businessMenu}
            noticeMenu={noticeMenu}
            menuBtn={menuBtn}
            menuState={menuState}
        />
    )

};

export default withRouter(HeaderDetail);