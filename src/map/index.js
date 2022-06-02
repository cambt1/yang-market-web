import React, { useEffect, useState } from "react";
// css적용
import "./index.css";
import { Radio, Layout } from "antd";
import MapContainer from "./MapContainer";

const { Content } = Layout;

function MapPage() {
  let categories = ["한식", "중식", "양식", "일식"];
  let [modal, setModal] = useState(false);

  let [tab, setTab] = useState(0);
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
            {categories.map((category, index) => {
              return (
                <Radio.Button
                  key={index}
                  value="{category}"
                  onClick={() => {
                    setTab(index);
                  }}
                >
                  {category}
                </Radio.Button>
              );
            })}
          </Radio.Group>
        </Content>
        <h3
          onClick={() => {
            setModal(!modal);
          }}
        >
          지도 펼치기
        </h3>
        <div>{modal === true ? <Modal /> : null}</div>
        <TabContent tab={tab} />
      </Layout>
    </>
  );
}

function TabContent({ tab }) {
  let [fade, setFade] = useState("");
  //탭 state가 변할 때 end 부착
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    //useEffect실행 전에 실행시키고 싶을 때
    return () => {
      setFade("");
    };
  }, [tab]);
  return (
    <div className={`start ${fade}`}>
      {
        [
          <div>한식마커</div>,
          <div>중식마커</div>,
          <div>양식마커</div>,
          <div>일식마커</div>,
        ][tab]
      }
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <p>날짜</p>
      <MapContainer></MapContainer>
    </div>
  );
}

export default MapPage;
