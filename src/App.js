import "antd/dist/antd.min.css";
import "./App.css";
// import ChildComponent from './child.js';
// import ParentComponent from './parent';
// import TimerComponent from './timer';
import MainPageComponent from "./main";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  // const text = '변수 사용';
  // const sayHello = function(){
  //   return <h3>함수를 변수에 담아 호출</h3>;
  // }
  // const sayHello2 = function(){
  //   alert('경고창 띄움')
  // }
  const navigate = useNavigate();
  return (
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
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" alt="logo" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              //해당 경로로 이동
              navigate("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Routes>
          <Route path="/" element={<MainPageComponent />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
          <Route path={"/upload"} element={<UploadPage />}></Route>
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
