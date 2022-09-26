/*global kakao*/ 
import React, { useEffect } from 'react'

const Map=()=>{

  useEffect(()=>{
    var container = document.getElementById('map'); // 지도 표시 div
    var options = {
      center: new kakao.maps.LatLng(37.36526452, 127.10676860117488), // 지도 좌표
      level: 5 // 지도 확대 레벨
    };
    var map = new kakao.maps.Map(container, options); // 지도 생성
    // 클릭 위치에 표시할 마커
    var marker = new kakao.maps.Marker({
        position: map.getCenter() // 지도 중심에 기본 위치 설정
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
    }
    )

    return (
        <div>
            <header>
                header
            </header>
            <body>
                body
                <div id="map" style={{width:"500px", height:"400px"}}></div>
                <p><em>원하는 위치에 마커를 클릭하세요!</em></p>
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