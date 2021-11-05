//<NoticeContent2Form.jsx>는 이전 컴포넌트 NoticeContentForm.jsx를 통해 선택된 특정 글 내용을 볼 수 있다.
import React from "react";
import StyledMiddleDiv3 from "./styled/StyledMiddleDiv3";
import StyledMiddleDiv4 from "./styled/StyledMiddleDiv4";
import StyledMiddleTable from "./styled/StyledMiddleTable";
import StyledMiddleTh from "./styled/StyledMiddleTh";
import StyledMiddleThead from "./styled/StyledMiddleThead";
import StyledContentDiv from "./styled/StyledContentDiv";
import StyledContentDiv2 from "./styled/StyledContentDiv2";
import StyledContentDiv3 from "./styled/StyledContentDiv3";
import StyledUnderDiv from "./styled/StyledUnderDiv";
import StyledUnderUl from "./styled/StyledUnderUl";
import StyledUnderLi from "./styled/StyledUnderLi";
import { Link } from "react-router-dom";


const NoticeContent2Form = ({board}) => {

    const{title, date, lawContent, no1Content, no2Content, no3Content, no4Content, no5Content, no6Content, no7Content, no8Content, no1LastContent, no2LastContent, company, address } = board

    console.log('data 알아보기');
    console.log(board);
    return(
       
        <StyledMiddleDiv3>
            <StyledMiddleDiv4>
                <StyledMiddleTable style={{marginBottom:'0px'}}>
                    <StyledMiddleThead >
                        <tr>
                            <StyledMiddleTh style={{width:"85%", textAlign:'left', }}>
                                <p style={{margin:'0', marginLeft:'32px'}} >
                                    {title}
                                </p>
                            </StyledMiddleTh>
                            <StyledMiddleTh>
                                <p style={{margin:'0'}} >
                                    {date}
                                </p>
                            </StyledMiddleTh>
                        </tr>
                    </StyledMiddleThead>
                </StyledMiddleTable>
            </StyledMiddleDiv4>
            <StyledContentDiv>
                <StyledContentDiv2>
                    <StyledContentDiv3 style={{textAlign:'center'}} >
                        <br/>
                        <br/>
                        <strong style={{fontSize:'24px'}}>{title}</strong><br/>
                        <br/>
                        <br/>
                        <br/>
                        <p style={{fontWeight:'bold'}}>{lawContent}</p><br/>
                        <br/>
                        <div style={{textAlign:'left', padding: '0 10%'}}>
                        1. {no1Content}<br/>
                        2. {no2Content}<br/>
                        3. {no3Content}<br/>
                        4. {no4Content}<br/>
                        5. {no5Content}<br/>
                        6. {no6Content}<br/>
                        7. {no7Content}<br/>
                        8. {no8Content}<br/>
                        <br/>
                        {no1LastContent}<br/>
                        {no2LastContent}<br/>
                        <br/>
                        </div>
                        {date}<br/>
                        <br/>
                        {company}<br/>
                        <br/>
                        {address}<br/>
                        <br/>
                        대표이사 이 성 일
                    </StyledContentDiv3>
                </StyledContentDiv2>
            </StyledContentDiv>
            <StyledUnderDiv>
                <StyledUnderUl>
                    <StyledUnderLi>
                        <Link to="/notice/notice" style={{textDecoration:'none', color:'rgb(34, 34, 34)', padding: '.5rem .75rem', cursor:'pointer'}}>
                            <span>«</span>
                        </Link>
                    </StyledUnderLi>
                    <StyledUnderLi>
                        <Link to="/notice/notice" style={{textDecoration:'none', color:'rgb(34, 34, 34)',  cursor:'pointer', fontWeight:'700',}}>
                            목록
                        </Link>
                    </StyledUnderLi>
                </StyledUnderUl>
            </StyledUnderDiv>
        </StyledMiddleDiv3>
               
        )
}

export default NoticeContent2Form;
