//<LocationIntroForm.jsx>는 회사 및 센터의 장소를 알려주는 컴포넌트입니다.
import React, { useEffect } from "react";
import HeaderDetail from "../../containers/HeaderDetail";
import StyledBodyDiv from "../body/Styled/StyledBodyDiv";
import FooterForm from "../footer/FooterForm"
import StyledImgDiv from "./styled/StyledImgDiv";
import StyledImgDiv2 from "./styled/StyledImgDiv2";
import StyledImgH1 from "./styled/StyledImgH1";
import StyledMapDiv from "./styled/StyledMapDiv";
import StyledMapDiv2 from "./styled/StyledMapDiv2";
import StyledMapH2 from "./styled/StyledMapH2";
import StyledMapP from "./styled/StyledMapP"


const LocationIntroForm = ({}) => {

    /* global kakao */
    
    useEffect(()=>{
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(37.51217, 127.12234),
            level: 3
        };
        var map = new kakao.maps.Map(container, options);

        var markerPosition  = new kakao.maps.LatLng(37.51217, 127.12234); 
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);

        }, [])

        useEffect(()=>{
            var container = document.getElementById('map2');
            var options = {
                center: new kakao.maps.LatLng(37.24238, 126.97576),
                level: 3
            };
            var map = new kakao.maps.Map(container, options);
    
            var markerPosition  = new kakao.maps.LatLng(37.24238, 126.97576); 
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
    
            }, [])

            useEffect(()=>{
                var container = document.getElementById('map3');
                var options = {
                    center: new kakao.maps.LatLng(37.47463, 127.12599),
                    level: 3
                };
                var map = new kakao.maps.Map(container, options);
        
                var markerPosition  = new kakao.maps.LatLng(37.47463, 127.12599); 
                var marker = new kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);
        
                }, [])


    return(
        <StyledBodyDiv>
            <HeaderDetail/>
                <StyledImgDiv>
                    <StyledImgDiv2>
                        <StyledImgH1>
                            오시는 길
                        </StyledImgH1>
                    </StyledImgDiv2>
                </StyledImgDiv>
                <StyledMapDiv>
                    <StyledMapH2>
                        본사
                    </StyledMapH2>
                    <StyledMapDiv2 id="map" />
                    <StyledMapP >
                        서울특별시 송파구 위례성대로 12길 15-1
                    </StyledMapP>
                </StyledMapDiv>
                <StyledMapDiv>
                    <StyledMapH2>
                        TS
                    </StyledMapH2>
                    <StyledMapDiv2 id="map2" />
                    <StyledMapP >
                        서울특별시 송파구 위례성대로 12길 15-1
                    </StyledMapP>
                </StyledMapDiv>
                <StyledMapDiv>
                    <StyledMapH2>
                        LF
                    </StyledMapH2>
                    <StyledMapDiv2 id="map3" />
                    <StyledMapP >
                        서울특별시 송파구 위례성대로 12길 15-1
                    </StyledMapP>
                </StyledMapDiv>
            <FooterForm/>
        </StyledBodyDiv>
    
    
        )
}

export default LocationIntroForm;
