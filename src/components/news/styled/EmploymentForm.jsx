import React from "react";
import HeaderDetail from "../../containers/HeaderDetail";
import StyledBodyDiv from "../body/Styled/StyledBodyDiv";
import FooterForm from "../footer/FooterForm"
import StyledMiddleDiv2 from "./styled/StyledMiddleDiv2";

import StyledMiddleDiv from "./styled/StyledMiddleDiv";
import StyledTitleDiv from "./styled/StyledTitleDiv";
import StyledTitleH2 from "./styled/StyledTitleH2";


// import { Link } from "react-router-dom";
// import StyledMiddleTd from "./styled/StyledMiddleTd";
// import StyledMiddleTh2 from "./styled/StyledMiddleTh2";





const EmploymentForm = () => {
  

    
 
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
                   
                    </StyledMiddleDiv2>
                </StyledMiddleDiv>
            <FooterForm/>
        </StyledBodyDiv>
        )
}

export default EmploymentForm;