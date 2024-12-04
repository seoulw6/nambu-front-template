import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FiPlay } from "react-icons/fi";
const Album = ({ name }) => {
    let { id } = useParams(); // 44
    const [sentences, setSentences] = useState([]);
    const [albumName, setAlbumName] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // 페이지 이동을 위한 hook

    useEffect(() => {
        const fetchSentences = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    `https://yfwebapp-eff7epg4dvhrftdv.koreacentral-01.azurewebsites.net/api/albums/public/${id}/sentences`
                );
                const { album, sentences } = response.data;
                setAlbumName(album.name); // 앨범 이름 설정
                setSentences(sentences); // 문장 데이터 설정
            } catch (err) {
                console.error('Error fetching sentences:', err.message);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSentences();
    }, [id]);

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>에러 발생: {error}</p>;

    // 학습 시작 버튼 클릭 시 이동
    const handleStartLearning = () => {
        navigate(`/learning/${id}`, { state: { sentences, albumName } });
    };

    return (
        <div id="sentences" className="container">
            <div className="main-content container learning">
                <h1 className="header-title">
                    <br />
                    <span className="down">{albumName}</span>
                    <br></br>
                    <Link to={`/learning/${id}`} > </Link>
                    <button onClick={handleStartLearning} className='btn btn-primary'>학습 시작 <FiPlay /></button>
                </h1>
                <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>한국어</th>
                        <th>영어</th>
                        <th className='mobilehidden'>한국어 오디오</th>
                        <th className='mobilehidden'>영어 오디오</th>
                    </tr>
                </thead>
                <tbody>
                    {sentences.map(({  id, koreanText, englishText, koreanAudioUrl, englishAudioUrl}, index) => {
                        return (
                            <tr key={id}>
                                <td> {index+1}</td>
                                <td>{koreanText} </td>
                                <td> {englishText}</td>
                                <td className='mobilehidden'>
                                <audio controls>
                                    <source src={koreanAudioUrl} type="audio/wav" />
                                    브라우저가 오디오를 지원하지 않습니다.
                                </audio>
                            </td>
                            <td className='mobilehidden'>
                                <audio controls>
                                    <source src={englishAudioUrl} type="audio/wav" />
                                    브라우저가 오디오를 지원하지 않습니다.
                                </audio>
                            </td>
                            </tr>
                        )
                    })}</tbody>
                </table>
            </div>


        </div>
    )
}
export default Album;