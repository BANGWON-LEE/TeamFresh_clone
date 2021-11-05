//<EmploymentForm>는 인재채용을 위한 공고를 올릴 때 사용되는 컴포넌트이다.
import React from "react";
import HeaderDetail from "../../containers/HeaderDetail";
import StyledBodyDiv from "../body/Styled/StyledBodyDiv";
import FooterForm from "../footer/FooterForm"
import StyledMiddleDiv2 from "./styled/StyledMiddleDiv2";
import StyledMiddleDiv from "./styled/StyledMiddleDiv";
import StyledTitleDiv from "./styled/StyledTitleDiv";
import StyledTitleH2 from "./styled/StyledTitleH2";
import StyledMiddleDiv3 from "./styled/StyledMiddleDiv3";
import StyledMiddleDiv4 from "./styled/StyledMiddleDiv4";
import StyledMiddleTable from "./styled/StyledMiddleTable";
import StyledMiddleThead from "./styled/StyledMiddleThead";
import StyledMiddleTh from "./styled/StyledMiddleTh";
import StyledMiddleTbody from "./styled/StyledMiddleTbody";




const EmploymentForm = () => {

    return(
        <StyledBodyDiv>
            <HeaderDetail/>
                <StyledTitleDiv style={{marginTop: '5rem'}}>
                    <StyledTitleH2>
                        인재채용
                    </StyledTitleH2>
                </StyledTitleDiv>
                <StyledMiddleDiv>
                    <StyledMiddleDiv2>
                    <StyledMiddleDiv3>
                            <StyledMiddleDiv4>
                                    
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
                                    </StyledMiddleTbody>
                                </StyledMiddleTable>
                            </StyledMiddleDiv4>
                        </StyledMiddleDiv3>
                    </StyledMiddleDiv2>
                </StyledMiddleDiv>
            <FooterForm/>
        </StyledBodyDiv>
        )
}

export default EmploymentForm;