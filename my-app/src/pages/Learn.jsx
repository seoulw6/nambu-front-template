import React from 'react';
import { Link } from 'react-router-dom';
import { packages } from '../datapack';
import { FiPlay, FiPlus } from "react-icons/fi";
import { AiTwotoneSmile } from "react-icons/ai";
import { useState } from "react";
import Modal from "../components/Modal";
import { useSelector } from 'react-redux';


const Learn = () => {
    let { user } = useSelector((state) => state.user);
    console.log(user);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div id="learn" className="container">


            <div className="main-content container learning">

                <div className='greeting'>
                    <h2><AiTwotoneSmile /></h2>
                    <div className='greeting-text'>Hi!, {user}님 몇번째 방문이시네요!<br />오늘도 활기차게 학습해요!</div>
                </div>
                <h1 className="header-title">
                    <br />

                </h1>
                <h3 className="components-section-title ml-3">학습문장 패키지 리스트</h3>
                <hr />
                <table className="table table-striped">
                    <tbody>
                        {
                            packages.map(({ name, id },i) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                            <Link to={`/package/${id}`} name={{ name }} > <FiPlay /> {name} </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        <tr><td>
                            <FiPlus className='form-control' onClick={openModal} />
                            <Modal isOpen={isModalOpen} closeModal={closeModal} content={
                                <div>
                                    <h2>hi</h2>
                                    <p>it's me</p>
                                </div>
                            } >

                            </Modal>
                        </td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Learn;