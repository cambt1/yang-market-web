import ChildComponent from "./child";
function ParentComponent(){
    return(
        <div>
            <h3>부모 컴포넌트</h3>
            <div>
                <h1>자식 컴포넌트 소개</h1>
                <ChildComponent />
                <ChildComponent name="민수" age={27}/>
                <ChildComponent name="그랩" age={28}/>
            </div>
        </div>
    );
}
export default ParentComponent;