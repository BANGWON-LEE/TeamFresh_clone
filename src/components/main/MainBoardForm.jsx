//<MainBoardForm.jsx>는 메인페이지의 게시판 부분을 보여주는 컴포넌트이다.
import React from "react";
import StyledNoticeDetailA from "./styled/StyledNoticeDetailA";
import StyledNoticeDetailA2 from "./styled/StyledNoticeDetailA2";
import StyledNoticeDetailDiv from "./styled/StyledNoticeDetailDiv";
import StyledNoticeImg from "./styled/StyledNoticeImg";



const MainBoardForm = ({data}) => {
    const num = data.num;
    return(      
            <a href={`/notice/notice/${num}`} style={{textDecoration: "none"}} >
                <StyledNoticeDetailDiv>
                    <StyledNoticeDetailA>
                        {data.title}
                    </StyledNoticeDetailA>
                    <StyledNoticeDetailA2>
                        <StyledNoticeImg src="https://www.teamfresh.co.kr/resources/assets/img/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%95%84%EC%9D%B4%EC%BD%98/icon_clock.png" 
                        style={{marginRight: '0.5rem'}}
                        />
                        {data.date}
                    </StyledNoticeDetailA2>
                </StyledNoticeDetailDiv>
            </a>
        )
}

// by 이방원
// BoardData.js에 있는 json 구조의 데이터를 불러와 게시판을 볼 수 있도록 구성하였다.

export default MainBoardForm;
