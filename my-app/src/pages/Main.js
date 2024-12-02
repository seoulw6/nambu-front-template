import { Link, NavLink } from 'react-router-dom';
import {links} from '../data';

const Main = () => {
    return (
        <div id="main" className="container">
            <div className="header-content container all">
                <h1 className="header-title">
                    <span className="up">HI!</span>
                    <span className="down">문장영어짱!</span>
                </h1>
                <p className="header-subtitle">나에게 꼭 맞는 영어학습도우미</p>
                <Link to="/learn" className="btn btn-primary">지금 시작하기</Link>
                <br />
                <br />
                <p>외국어 단어는 많이 외웠는데,<br />
                        문장 만드는 게 잘 안돼요.<br />
                        중급 수준에서<br />
                        성장이 더딘 것 같고, 자꾸 까먹어요.<br />
                        <br />
                        “영어 문장을 통째로 외우다 보면<br />
                        어느새 문장 구조를 익히게 되고 말문이 트인다”<br />
                        <br />
                        “뇌는 반복적으로 같은 내용이 들어오면<br />
                        중요하다고 판단한다.<br />
                        같은 정보를 반복해서 입력해야<br />
                        단기기억은 장기기억으로 넘어간다”<br />

                    </p>
                <br />
            </div>
        </div>

    );
}
export default Main;