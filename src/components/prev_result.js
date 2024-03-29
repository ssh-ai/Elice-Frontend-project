import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

export default function PrevResult(){
    const history = useHistory();
    const location = useLocation();

    function handleClick(){
        history.push({
            pathname : '/result',
            state: {...location.state},
        })
        window.location.href ='/result'
    }

    return(
        <div className="container example">
            <h2 style={{color: 'rgba(0,0,255,0.4)'}}>검사가 완료되었습니다.</h2>
            <br/>
            <p>검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고,</p>
            <p>중요 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.</p>
            <input type="button" className="btn btn-outline-primary" value="결과보기" onClick={handleClick}/> 
        </div>
    )
}
