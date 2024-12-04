
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { login, logout } from '../userSlice'; // login 액션 가져오기

const LogoutButton = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        alert('로그아웃 되었습니다.');
    };
    return <button className="btn btn-outline-primary rounded" onClick={handleLogout}>로그아웃</button>;
};

const UserInfomation = () => {
    const { isLoggedIn, userInfo } = useSelector((state) => state.user);
    if (isLoggedIn) {
        const { name, lastVisit, visitCount } = userInfo || {};
        return (
            <div>
                <br /><br />
                <h2>환영합니다, {name || '사용자'}님!</h2>
                <p>방문일: {new Date(lastVisit).toLocaleDateString('ko-KR') || '방문 기록 없음'}</p>
                <p>방문횟수: {visitCount || 0}</p>
                <LogoutButton />
            </div>
        );
    }
}
const Sign = () => {
    const { isLoggedIn, userInfo } = useSelector((state) => state.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://yfwebapp-eff7epg4dvhrftdv.koreacentral-01.azurewebsites.net/api/users/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "로그인 실패");
            }
            const data = await response.json();
            // Redux에 사용자 정보 저장
            //dispatch(login(data));
            dispatch(
                login({
                    name: data.name,
                    lastVisit: data.lastVisit,
                    visitCount: data.visitCount,
                    token: data.token,
                })
            );
            //console.log("로그인 성공:", data);
            // 로그인 성공 시 리다이렉션
            navigate("/mypage"); // 성공 시 이동할 페이지                
        } catch (err) {
            console.error("로그인 오류:", err);
            setError(err.message);
        }
    };


    if (!isLoggedIn) {
        return (
            <div id="sign" className="container">
                <div className="main-content container learning">
                    <h1 className="header-title">
                        <br />
                        <span className="down">로그인</span>
                    </h1>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <form onSubmit={handleSubmit} className="contact-form col-md-10 col-lg-8 m-auto">
                        <label>가입한 이메일을 입력해주세요.</label>
                        <div className="form-row">
                            <div className="form-group col-sm-12">
                                <input type="email"
                                    className="form-control"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                        </div>
                        <label>비밀번호를 입력해주세요.</label>
                        <div className="form-row">
                            <div className="form-group col-sm-12">
                                <input type="password"
                                    size="50"
                                    className="form-control"
                                    placeholder="Your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-sm-12 mt-3">
                                <input type="submit" value="로그인" className="btn btn-outline-primary rounded mr-1" />
                                <Link to={'/join'} className="btn btn-outline-primary rounded">회원가입</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    } else {
        return <UserInfomation />;
    }
}
export default Sign;