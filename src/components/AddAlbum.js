import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from "../components/Modal";
import { useSelector } from 'react-redux';
import { FiPlus} from "react-icons/fi";

const AddAlbum = () => {
    const { isLoggedIn, userInfo, token } = useSelector((state) => state.user);
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
        console.log(`앨범명: ${packageName}`);

        closeModal();
    };
    if (isLoggedIn) {
        return (
            <tr><td>
                <button className='form-control' onClick={openModal}>내 앨범 추가하기 <FiPlus /></button>
                <Modal isOpen={isModalOpen} closeModal={closeModal} content={
                    <div>
                        <h2>앨범 선택</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="앨범명" value={packageName}
                                onChange={(e) => setPackageName(e.target.value)} />
                        </form>
                    </div>
                } >
                </Modal>
            </td></tr>
        )
    }
}

export default AddAlbum;