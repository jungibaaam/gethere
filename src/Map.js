/*global kakao*/ 
import React, { useState, useEffect } from 'react'
const Map=()=>{
    useEffect(()=>{
        var container = document.getElementById('map'), // 지도 표시 div
            options = {
            center: new kakao.maps.LatLng(37.49974025012375, 126.920682048173), // 지도 좌표
            level: 4 // 지도 확대 레벨
        };
        var map = new kakao.maps.Map(container, options); // 지도 생성
        // 지도에 추가된 지도타입정보를 가질 변수
        var currentTypeId;

        function Header(props){
            return <header>
                <h1><a href="/" onclick={(event) => {
                    event.preventDefault();
                    props.onChangeMode();
                }}>{props.title}</a></h1>
            </header>
        }

        // 버튼 클릭 시 호출되는 함수
        // function setOverlayMapTypeId(maptype) {
        //     var changeMaptype;
        //     if(maptype === 'traffic') {
        //         changeMaptype = kakao.maps.MapTypeId.TRAFFIC;
        //     } else if(maptype === 'roadview') {
        //         changeMaptype = kakao.maps.MapTypeId.ROADVIEW;
        //     } else if(maptype === 'terrain') {
        //         changeMaptype = kakao.maps.MapTypeId.TERRAIN;
        //     } else if(maptype === 'use_district') {
        //         changeMaptype = kakao.maps.MapTypeId.USE_DISTRICT;
        //     }
        //     if(currentTypeId) {
        //         map.removeOverlayMapTypeId(currentTypeId);
        //     }
        // }
        // map.addOverlayMapTypeId(changeMaptype);
        // currentTypeId = changeMaptype;

        var marker = new kakao.maps.Marker({
            position: map.getCenter()
        });
        marker.setMap(map); // 지도에 마커 표시
        //지도에 클릭 이벤트 등록, 클릭 시 마지막 파라미터로 넘어온 함수 호출
        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
            var latlng = mouseEvent.latLng; // 클릭 위치의 위도, 경도 정보 가져오기
            marker.setPosition(latlng); // 마커 위치를 클릭 위치로 이동
            var message = '해당 위치의 경도는 ' + latlng.getLat() + ' 이고, ';
            message += '경도는 ' + latlng.getLng() + ' 입니다';
            var resultDiv = document.getElementById('clickLatlng');
            resultDiv.innerHTML = message;
        })
    })
    return(
    <div>
        {/* <Header title="ReactTutor" onChangeMode={() => {
            alert('Header');
            }}></Header> */}
        <body>
            body
            <div id="map" style={{width:"500px", height:"400px"}}></div>
            <p><em>원하는 위치에 마커를 클릭하세요!</em></p>
            {/* <p>
            <button onClick="setOverlayMapTypeId('traffic')">교통 정보</button>
            <button onClick="setOverlayMapTypeId(roadview)">로드뷰 도로정보</button>
            <button onClick="setOverlayMapTypeId(terrain)">지형 정보</button>
            <button onClick="setOverlayMapTypeId(use_district)">지적편집도 정보</button>
            </p> */}
            <div id="clickLatlng"></div>
            body2
        </body>
        <footer>
            footer
        </footer>
    </div>
    )
}
export default Map;