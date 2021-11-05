//<NotceForm.jsx>는 공지사항을 관리하는 컴포넌트이다.
import React from "react";
import HeaderDetail from "../../containers/HeaderDetail";
import StyledBodyDiv from "../body/Styled/StyledBodyDiv";
import FooterForm from "../footer/FooterForm"
import StyledMiddleDiv2 from "./styled/StyledMiddleDiv2";
import StyledMiddleDiv3 from "./styled/StyledMiddleDiv3";
import StyledMiddleDiv4 from "./styled/StyledMiddleDiv4";
import StyledMiddleTable from "./styled/StyledMiddleTable";
import StyledMiddleTh from "./styled/StyledMiddleTh";
import StyledMiddleThead from "./styled/StyledMiddleThead";
import StyledMiddleDiv from "./styled/StyledMiddleDiv";
import StyledTitleDiv from "./styled/StyledTitleDiv";
import StyledTitleH2 from "./styled/StyledTitleH2";
import StyledMiddleTbody from "./styled/StyledMiddleTbody";


import boardData from "../../data/BoardData";
import NoticeListForm from "./NoticeListForm";


const NoticeForm = () => {
    return(
        <StyledBodyDiv>
            <HeaderDetail/>
                <StyledTitleDiv style={{marginTop: '5rem'}}>
                    <StyledTitleH2>
                        공지사항
                    </StyledTitleH2>
                </StyledTitleDiv>
                <StyledMiddleDiv>
                    <StyledMiddleDiv2>
                        <StyledMiddleDiv3>
                            <StyledMiddleDiv4>
                                    {boardData &&
                                <StyledMiddleTable>
                                    <StyledMiddleThead>
                                        <tr>
                                            <StyledMiddleTh>
                                                <p style={{margin:'0'}} >
                                                    #
                                                </p>
                                            </StyledMiddleTh>
                                            <StyledMiddleTh style={{width:"85%"}}>
                                                <p style={{margin:'0'}} >
                                                    제목
                                                </p>
                                            </StyledMiddleTh>
                                            <StyledMiddleTh>
                                                <p style={{margin:'0'}} >
                                                    날짜
                                                </p>
                                            </StyledMiddleTh>
                                        </tr>
                                    </StyledMiddleThead>
                                    <StyledMiddleTbody>
                                        {boardData.data.map((data) => (
                                            <NoticeListForm data={data}/>
                                            ))}
                                    </StyledMiddleTbody>
                                </StyledMiddleTable>
                        }
                            </StyledMiddleDiv4>
                        </StyledMiddleDiv3>
                    </StyledMiddleDiv2>
                </StyledMiddleDiv>
            <FooterForm/>
        </StyledBodyDiv>
        )
}

export default NoticeForm;
