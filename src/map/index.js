import { React, useState } from "react";
// css적용
import "./index.css";
import { Link } from "react-router-dom";
import { Radio, Layout } from "antd";

const { Content } = Layout;

function MapPage() {
  let categories = ["한식", "중식", "양식", "일식"];
  let [modal, setModal] = useState(false);
  return (
    <>
      <Layout>
        <Content>
          <Radio.Group
            defaultValue="미정"
            buttonStyle="solid"
            style={{
              marginTop: 16,
            }}
          >
            {categories.map((category) => {
              return <Radio.Button value="{category}">{category}</Radio.Button>;
            })}
          </Radio.Group>
          {/* <div id="map" style="width:500px;height:400px;"></div> */}
        </Content>
        <h3
          onClick={() => {
            setModal(true);
          }}
        >
          지도 펼치기
        </h3>
        <div>{modal == true ? <Modal /> : null}</div>
      </Layout>
      {/* <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c60f26c68e16e9bdf81d8b3fe3948ebe"
      ></script>
      <script type="text/javascript" src="./map.js"></script> */}
    </>
  );
}

function Modal() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  return (
    <div className="modal">
      <h4>{글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default MapPage;
