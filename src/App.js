import "antd/dist/antd.min.css";
import "./App.css";
// import ChildComponent from './child.js';
// import ParentComponent from './parent';
// import TimerComponent from './timer';
import MainPageComponent from "./main";
import UploadPage from "./upload";
import ProductPage from "./product";
import MapPage from "./map";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Button, Layout, Menu } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const { Header } = Layout;

function App() {
  // const text = '변수 사용';
  // const sayHello = function(){
  //   return <h3>함수를 변수에 담아 호출</h3>;
  // }
  // const sayHello2 = function(){
  //   alert('경고창 띄움')
  // }
  const navigate = useNavigate();
  let navItem = ["menu1", "menu2", "menu3"];

  return (
    <Layout>
      <div>
        {/* <h1>테스트</h1>
    <h2>{text}</h2>
    {sayHello()}
    <button onClick={sayHello2}>경고창 띄우는 온클릭 버튼</button>
    <button onClick={function(){
      alert('익명 콜백함수를 넣었지')
    }}>경고창 띄우는 온클릭 버튼</button>
    <ChildComponent/>
    <ChildComponent/>
    <ParentComponent />
    <TimerComponent /> */}
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
          }}
        >
          <div className="logo">
            <Link to="/" className="logoLink">
              Market
            </Link>
          </div>

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={new Array(3).fill(null).map((_, index) => ({
              key: String(index + 1),
              label: `${navItem[index]}`,
            }))}
          />
          <Button
            className="upload-btn"
            size="large"
            onClick={function () {
              //해당 경로로 이동
              navigate("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </Header>

        <div id="header">
          <div id="header-area"></div>
        </div>
        <div id="body">
          <Routes>
            <Route path="/" element={<MainPageComponent />}></Route>
            <Route path="/product/:id" element={<ProductPage />}></Route>
            <Route path="/upload" element={<UploadPage />}></Route>
            <Route path="/map" element={<MapPage />}></Route>
          </Routes>
        </div>
        <div id="footer"></div>
      </div>
    </Layout>
  );
}

export default App;
