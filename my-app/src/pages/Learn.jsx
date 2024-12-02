import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { packages } from '../datapack';
import { FiPlay, FiPlus } from "react-icons/fi";
import { AiTwotoneSmile } from "react-icons/ai";
import { useState } from "react";
import Modal from "../components/Modal";
import { useSelector } from 'react-redux';

const UserFunc = ({ user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate(); // useNavigate 훅 사용
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        navigate("/LearnAdd");
    }

    if (isNaN(user)) {
        return (
            <tr><td>
                <Link to="/mypage">내 패키지 관리</Link>
            </td></tr>
        )
    } else {
        return (
            <tr><td>
                <FiPlus className='form-control' onClick={openModal} />
                <Modal isOpen={isModalOpen} closeModal={closeModal} content={
                    <div>
                        <h2>패키지 선택</h2>
                        <form>
                            <input type="text" placeholder="패키지명" />
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


    return (
        <div id="learn" className="container">
            <div className="main-content container learning">
                <div className='greeting'>
                    <h2><AiTwotoneSmile /></h2>
                    <div className='greeting-text'>Hi!,  {userInfo?.name || '사용자'}님  {userInfo?.visitCount || '1'}번째 방문이시네요!<br />오늘도 활기차게 학습해요!</div>
                </div>
                <h1 className="header-title">
                    <br />
                </h1>
                <h3 className="components-section-title ml-3">학습문장 패키지 리스트</h3>
                <hr />
                <table className="table table-striped">
                    <tbody>
                        {
                            packages.map(({ name, id }, i) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                            <Link to={`/package/${id}`} name={{ name }} > <FiPlay /> {name} </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        <UserFunc user={userInfo?.name || '사용자'} />
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Learn;