import React from 'react';

function TimerComponent(){
    //첫번째 인자값인 time이 0으로 시작함
    //useEffect의 두 번째 인자(배열)에 값이 없으면 딱 한 번만 로딩되고 실행되지 않습니다.
    const [time, setTime] = React.useState(0);
    console.log('Component 업데이트');
    function updateTime(){
        setTime(time+1);
    }
    return (
        <div>
            <h3>{time}초</h3>
            <button onClick = {updateTime}>1씩 올려주세요</button>
        </div>
    )
}

export default TimerComponent;  