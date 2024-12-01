import { tests } from '../datatest';
import { useState } from 'react';
const Test = () => {
    const [status, setStatus] = useState(1);
    let anwers = [];
    const handleStatus = (value) => {
        if (status + value < 1 || status + value > 20) {
            return;
        }
        return () => {
            setStatus(status + value);
        }
    }

    return (
        <div id="test" className="container">
            <div className="main-content container learning">
                <h1 className="header-title">
                    <br />
                    <span className="down">레벨 테스트</span>
                </h1>
                <form method="post" action="">
                    {
                        tests
                            .map(({ question, answer, id }, index) => {
                                return (
                                    <div key={index}>
                                        <p className="header-subtitle">{id}/20</p>
                                        <div className="content">
                                            <div>아래 문장에 해당하는 정확한 해석을 고르시요.</div>
                                            <div className="question content-ko ">{question}</div>

                                            <div className="answer">
                                                <ul>
                                                    <li><input type="radio" id={`test${id}`} name={`test${id}`} value="a" />{answer['a']}</li>
                                                    <li><input type="radio" id={`test${id}`} name={`test${id}`} value="b" />{answer['b']}</li>
                                                    <li><input type="radio" id={`test${id}`} name={`test${id}`} value="c" />{answer['c']}</li>
                                                    <li><input type="radio" id={`test${id}`} name={`test${id}`} value="d" />{answer['d']}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }

                    <div className="controls">
                        {/* <button type="button" className="btn btn-primary" onClick={handleStatus(-1)}>Prev</button> */}
                        <button type="button" className="btn btn-primary" onClick={handleStatus(1)}>제출</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default Test;