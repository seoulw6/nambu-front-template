import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Join = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleSubmit = async (event) => {
        event.preventDefault();
        // 유효성 검사
        if (password !== passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }

        if (!name || !email || !password) {
            setError('모든 필드를 채워주세요.');
            return;
        }

        // 데이터 제출 로직 (예: 서버에 데이터 전송)
        // 데이터 준비
        const userData = {
            name: name.trim(),
            email: email.trim(),
            password: password,
        };
        try {
            const response = await fetch('https://yfwebapp-eff7epg4dvhrftdv.koreacentral-01.azurewebsites.net/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || '회원가입에 실패했습니다.');
                return;
            }

            const result = await response.json();
            setSuccess('회원가입이 성공적으로 완료되었습니다!');
            console.log('서버 응답:', result);

            // 폼 초기화
            setName('');
            setEmail('');
            setPassword('');
            setPasswordConfirm('');

            // 추가 작업 (예: 로그인 페이지로 이동)

            navigate('/sign'); // React Router 사용 시
        } catch (error) {
            setError('서버와 통신 중 문제가 발생했습니다.');
            console.error('에러:', error);
        }
    };


    return (
        <div id="join" className="container">

            <div className="main-content container learning">
                <h1 className="header-title">

                    <br />
                    <span className="down">회원가입</span>
                </h1>
                <p className="header-subtitle">나에게 꼭 맞는 문장으로 학습하세요!</p>

                <form onSubmit={handleSubmit} className="contact-form col-md-10 col-lg-8 m-auto">
                    <label>회원 이름을 입력해주세요.</label>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input value={name}
                                onChange={(e) => setName(e.target.value)} type="text" size="50" className="form-control" placeholder="Your Name" required />
                        </div>

                    </div>
                    <label>로그인할 이메일을 입력해주세요.</label>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Email" required />
                        </div>
                    </div>
                    <label>비밀번호를 설정해주세요.</label>
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <input type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} size="50" className="form-control" placeholder="Your Password" required />
                        </div>
                        <div className="form-group col-sm-6">
                            <input type="password"
                                value={passwordConfirm}
                                onChange={(e) => setPasswordConfirm(e.target.value)} className="form-control" placeholder="Your Password Confirm" required />
                        </div>
                    </div>

                    {error && <p className="text-danger">{error}</p>}
                    {success && <p className="text-success">{success}</p>}

                    <div className="form-row">
                        <div className="form-group col-sm-12 mt-3">
                            <input type="submit" value="회원 가입" className="btn btn-outline-primary rounded" />
                        </div>
                    </div>
                    <label>테스트를 하면 본인 수준에 맞는 문장패키지를
                        받을 수 있어요.</label>
                    <div className="form-row">
                        <div className="form-group col-sm-12 mt-3">
                            <Link to={'/test'} className="btn btn-outline-primary rounded">레벨테스트 하러가기</Link>
                        </div>
                    </div>
                    <label>이제 문장으로 학습을 시작해보세요.</label>
                    <div className="form-row">
                        <div className="form-group col-sm-12 mt-3">
                            <Link to={'/learn'} className="btn btn-outline-primary rounded">학습 하러가기</Link>
                        </div>
                    </div>
                    <label>1 Day 1 Blog 해보세요.</label>
                    <div className="form-row">
                        <div className="form-group col-sm-12 mt-3">
                            <Link to={'/blog'} className="btn btn-outline-primary rounded">BLOG 하러가기</Link>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default Join;