// <HeaderDetail.jsx>는 웹페이지 상단의 header 부분을 관리하는 컴포넌트.
import React from "react";
import { useState } from "react";
import HeaderForm from "../components/header/HeaderForm";


function HeaderDetail() {
    // HeaderDetail은 페이지 상단 Header 메뉴들의 동작을 관리하는 목적으로 만들어졌다. 

    const [companyMenu, setCompanyMenu] = useState(false); //회사소개, 처음에는 false로 되어있어 회사소개 메뉴의 하위 메뉴들이 보이지 않도록 한다. 
    const [businessMenu, setBusinessMenu] = useState(false); //사업소개, 설명은 위와 같다. 
    const [noticeMenu, setNoticeMenu] = useState(false); // 공지사항, 설명은 위와 같다.


    function onCompany(){ //companyMenu의 상태가 true로 바뀌도록 해준다. 
        setCompanyMenu(true); 
    }

    function onNotCompany(){ //companyMenu의 상태가 true인 것을 다시 false로 바뀌도록 해준다.
        setCompanyMenu(false);  
    }

    function onNotBusiness(){ //businessMenu의 상태가 true로 바뀌도록 해준다.
        setBusinessMenu(false);  
    }

    function onBusiness(){ //businessMenu의 상태가 true인 것을 다시 false로 바뀌도록 해준다.
        setBusinessMenu(true); 
    }

    function onNotNotice(){ //noticeMenu 상태가 true로 바뀌도록 해준다.
        setNoticeMenu(false);  
    }

    function onNotice(){ //noticeMenu 상태가 true인 것을 다시 false로 바뀌도록 해준다.
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
            
        />
    )

};

export default HeaderDetail;
// by 이방원
// 이전에 withRouter로 export 했지만 history 또는 Link를 사용하여 페이지를 이동하지 않기 때문에
// 수정하였다.
// 2021-11-15