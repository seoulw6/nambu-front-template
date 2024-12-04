import React, { useState, useEffect } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

import { FiPlay } from "react-icons/fi";

import { useSelector } from 'react-redux';
import AddAlbum from '../components/AddAlbum';
//public



const Mypage = () => {
    const { userInfo, token } = useSelector((state) => state.user);
    const [packages, setPackages] = useState([]); // 앨범 데이터를 저장하는 상태
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            setLoading(false);
            setError('로그인이 필요합니다.');
            return () => {
                setTimeout(() => {
                    navigate("/Sign");
                }, 300); // 300ms 딜레이
            };
        }
        // API 호출
        const fetchPackages = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    'https://yfwebapp-eff7epg4dvhrftdv.koreacentral-01.azurewebsites.net/api/albums/my',
                    { headers: { Authorization: `Bearer ${token}` } }
                );

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
        if (token) {
            fetchPackages();
        } else {
            setError("로그인이 필요합니다.2");
        }
    }, [token]);


    // const handleAddPackage = async (packageName) => {
    //     try {
    //         const response = await axios.post(
    //             'https://yfwebapp-eff7epg4dvhrftdv.koreacentral-01.azurewebsites.net/api/albums',
    //             { name: packageName },
    //             { headers: { Authorization: `Bearer ${token}` } }
    //         );
    //         setPackages((prevPackages) => [...prevPackages, response.data]);
    //     } catch (err) {
    //         setError('앨범 추가에 실패했습니다.');
    //     }
    // };

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>에러 발생: {error}</p>;
    if (!Array.isArray(packages)) return <p>데이터를 불러올 수 없습니다.</p>;


    return (
        <div id="mypage" className="container">
            <div className="main-content container learning">
                <h1 className="header-title">
                    <br />
                    <span className="down">My Page</span>
                </h1>
                <h3 className="components-section-title ml-3">{userInfo?.name || '사용자'}님의 Album
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
                        <AddAlbum />
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