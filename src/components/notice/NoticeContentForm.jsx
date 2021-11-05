//<NoticeContentForm.jsx>는 공지사항의 게시글을 볼 수 있는 컴포넌트이다.
import React from "react";
import HeaderDetail from "../../containers/HeaderDetail";
import StyledBodyDiv from "../body/Styled/StyledBodyDiv";
import FooterForm from "../footer/FooterForm"
import StyledMiddleDiv2 from "./styled/StyledMiddleDiv2";
import StyledMiddleDiv from "./styled/StyledMiddleDiv";
import StyledTitleDiv from "./styled/StyledTitleDiv";
import StyledTitleH2 from "./styled/StyledTitleH2";
import NoticeContent2Form from './NoticeContent2Form';
import boardData from "../../data/BoardData";
import { useRouteMatch } from "react-router";



const NoticeContentForm = ({match}) => {

    // by 이방원
    // 아래의 변수 'no'와 'idx'는 이전 컴포넌트 (NoticeListForm.jsx)에서 특정 게시물의 페이지로 이동할 때 사용한 URL의 값을 담도록 하는 것이다.
    //
    
    const no = useRouteMatch();
    const idx =no.params.num;

    console.log('방번호');
    console.log(no);
    
    return(
        <StyledBodyDiv>
            <HeaderDetail/>
                <StyledTitleDiv style={{marginTop: '5rem'}}>
                    <StyledTitleH2>
                        공지사항
                    </StyledTitleH2>
                </StyledTitleDiv>
                <StyledMiddleDiv>
                    <StyledMiddleDiv2 style={{height: '100%'}}>
                    {boardData.data.filter((board) => {
                        console.log(board.num);
                        const room = board.num
                        
                        console.log(idx)
                        return room === idx 
                    }).map((board) => (
                     
                        
                    <NoticeContent2Form board={board} />
                    ))}
     
                    </StyledMiddleDiv2>
                </StyledMiddleDiv>
            <FooterForm/>
        </StyledBodyDiv>
        )
}

export default NoticeContentForm;
 
    