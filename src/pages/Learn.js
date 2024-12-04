import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { FiPlay, FiPlus } from "react-icons/fi";
import { AiTwotoneSmile } from "react-icons/ai";

import Modal from "../components/Modal";
import { useSelector } from 'react-redux';

const UserFunc = ({ user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate(); // useNavigate 훅 사용
    const [packageName, setPackageName] = useState('');
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        if (!packageName) return;
        setTimeout(() => {
            navigate("/LearnAdd");
        }, 300); // 300ms 딜레이
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`앨범: ${packageName}`);

        closeModal();
    };
    if (user) {
        //     return (
        //         <tr><td>
        //             <Link to="/mypage">로그인하여 내 앨범 관리하기</Link>
        //         </td></tr>
        //     )
        // }
        return (
            <tr><td>
                <button className='form-control' onClick={openModal}>내 앨범 추가하기 <FiPlus /></button>
                <Modal isOpen={isModalOpen} closeModal={closeModal} content={
                    <div>
                        <h2>앨범 선택</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="앨범" value={packageName}
                                onChange={(e) => setPackageName(e.target.value)} />
                        </form>
                    </div>
                } >
                </Modal>
            </td></tr>
        )
    }
}


const Learn = () => {
    const { isLoggedIn, userInfo, visitCount } = useSelector((state) => state.user);
    const [packages, setPackages] = useState([]); // 앨범 데이터를 저장하는 상태
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태
    useEffect(() => {
        // API 호출
        const fetchPackages = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://yfwebapp-eff7epg4dvhrftdv.koreacentral-01.azurewebsites.net/api/albums/public');
                console.log(response.data);
                if (Array.isArray(response.data.albums)) {
                    setPackages(response.data.albums);
                } else {
                    throw new Error("올바른 데이터 형식이 아닙니다.");
                }

            } catch (err) {
                setError(err.message);


            } finally {
                setLoading(false);
            }
        };
        fetchPackages();
    }, []);

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>에러 발생: {error}</p>;
    if (!Array.isArray(packages)) return <p>데이터를 불러올 수 없습니다.</p>;

    return (
        <div id="learn" className="container">
            <div className="main-content container learning">
                <div className='greeting'>
                    <h2><AiTwotoneSmile /></h2>
                    <div className='greeting-text'>
                        Hi!,  {userInfo?.name || '사용자'}님  {userInfo?.visitCount || '1'}번째 방문이시네요!<br />오늘도 활기차게 학습해요!</div>
                </div>
                <h1 className="header-title">
                    <br />
                </h1>
                <h3 className="components-section-title ml-3">학습문장 앨범 리스트</h3>
                <hr />
                <table className="table table-striped">
                    <tbody>
                        {
                            packages.map(({ name, id }, i) => {
                                if (id==44)
                                return (
                                    <tr key={i}>
                                        <td>
                                            <Link to={`/album/${id}`} name={{ name }} > <FiPlay /> {name} </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        <UserFunc user={userInfo?.name || ''} />
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Learn;