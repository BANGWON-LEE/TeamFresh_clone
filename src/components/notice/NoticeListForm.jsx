//<NoticeListForm>는 공지사항의 리스트를 볼 수 있도록 따로 분류해놓은 컴포넌트이다.
import React from "react";
import { Link } from "react-router-dom";
import StyledMiddleTd from "./styled/StyledMiddleTd";
import StyledMiddleTh2 from "./styled/StyledMiddleTh2";


// by 이방원
// -아래 내용-
// BoardData.js의 데이터들 중 게시글 번호를 가져와 게시글 마다 구분될 수 있도록 url을 만들어 놓았다.
// 2021-11-03

const NoticeListForm = ({data}) => {

    const idx = data.num;
    console.log('리스트에서 보기')
    console.log(idx);

    return(
        <tr style={{cursor:'pointer'}} >
            <StyledMiddleTh2 style={{backgroundColor: '#fff'}}>
                <p style={{margin:'0'}} >
                    {data.num}
                </p>
            </StyledMiddleTh2>
            <StyledMiddleTd style={{backgroundColor: '#fff'}}>
                <Link to={`/notice/notice/${idx}`} style={{textDecoration:'none', color:'rgb(34, 34, 34)'}} > 
                    <p style={{textAlign:"left", margin:'0'}} >
                        {data.title}
                    </p>
                </Link>
            </StyledMiddleTd>
            <StyledMiddleTd style={{backgroundColor: '#fff'}}>
                <p style={{margin:'0'}} >
                    {data.date}
                </p>
            </StyledMiddleTd>
        </tr>
    )
}

export default NoticeListForm;
