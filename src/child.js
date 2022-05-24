function ChildComponent(props) {
    // const name = props.name;
    // const age = props.age;
    const{name, age} = props;
    return(
    <div>
        <h3>자식 컴포넌트가 리턴시, 무엇을 리턴하냐, 부모컴포넌트에서 자식컴포넌트로부터 물려준 props객체를 리턴함</h3>
        <p>{name}</p>
        <p>{age}</p>
    </div>);
}

export default ChildComponent;