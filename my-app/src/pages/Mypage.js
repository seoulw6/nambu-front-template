import React from 'react';
import { packages } from '../datapack';
import { blogs } from '../datablog';
import { Link,useNavigate } from 'react-router-dom';
import { FiPlus, FiPlay, FiBookmark } from "react-icons/fi";
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



const Mypage = () => {
    let { user } = useSelector((state) => state.user);
    console.log(isNaN(user));
    return (
        <div id="mypage" className="container">
            <div className="main-content container learning">
                <h1 className="header-title">
                    <br />
                    <span className="down">My Page</span>
                </h1>
                <p className="header-subtitle">나에게 꼭 맞는 문장으로 학습하세요!</p>

                <h3 className="components-section-title ml-3">나의 학습문장 패키지 리스트
                </h3>
                <table className="table table-striped">
                    <tbody>
                        {
                            packages.map(({ name, id }, index) => {
                                return (
                                    <tr key={id}>
                                        <td><Link to={`/package/${id}`} name={name} > <FiPlay /> {name} </Link></td>
                                    </tr>
                                )
                            })
                        }
                        <UserFunc  user={user} />
                    </tbody>
                </table>
                {/* <h3 className="components-section-title ml-3">MY Blog</h3>
                <table className="table">
                    <tbody>
                        {
                            blogs.map(({ id, title, date }, index) => {
                                return (
                                    <tr key={id}>
                                        <td className="left"><Link to={`/BlogDetail/${id}`}><FiBookmark />  {title}</Link></td>
                                        <td className="right">{date}</td>
                                    </tr>
                                )
                            })
                        }
                        <tr><td colSpan="2"><Link to={'/BlogAdd'}>
                            <FiPlus className='form-control' />
                        </Link></td></tr>
                    </tbody>
                </table> */}
            </div>
        </div>
    )
}
export default Mypage;