import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { FiPause, FiVolume2 } from 'react-icons/fi';

const Frame = ({ id, ko, en, total }) => {
    return (
        <div className="frame">
            <p className="header-subtitle">{id}/{total} </p>
            <div className="content">
                <div className="question content-ko ">{ko}</div>
                <div className="question content-en ">{en}</div>
            </div>
        </div>
    )
}


const Learning = () => {
    const { state } = useLocation();
    const { sentences, albumName } = state || {};
    const [step, setStep] = useState(0); // 현재 단계
    const [isPlaying, setIsPlaying] = useState(false); // 재생 상태
    const repeatCountRef = useRef(0); // 반복 횟수 관리
    const audioTypeRef = useRef('korean'); // 현재 재생 중인 오디오 타입
    const audioRef = useRef(null); // 오디오 객체 관리


    const [repeatCount, setRepeatCount] = useState(2); // 반복 횟수




    const handlePlayAudio = () => {
        if (!sentences || sentences.length === 0) return;

        const currentAudioUrl =
            audioTypeRef.current === 'korean'
                ? sentences[step]?.koreanAudioUrl
                : sentences[step]?.englishAudioUrl;
        //const currentAudioUrl = sentences[step]?.englishAudioUrl;

        if (audioRef.current) {
            audioRef.current.pause(); // 기존 오디오 중단
        }

        const audio = new Audio(currentAudioUrl);
        audioRef.current = audio;
        // console.log('step:', step);

        const handleAudioEnd = () => {
            console.log('type:', audioTypeRef.current);
            console.log('current:', repeatCountRef.current);

            if (repeatCountRef.current <= repeatCount*2) {
                if (audioTypeRef.current === 'korean') {
                    audioTypeRef.current = 'english';
                    audio.src = sentences[step]?.englishAudioUrl;
                } else if (audioTypeRef.current === 'english') {
                    audioTypeRef.current = 'korean';
                    audio.src = sentences[step]?.koreanAudioUrl;
                }
                repeatCountRef.current += 1;
                audio.play();
            } else {
                repeatCountRef.current = 0; // 반복 횟수 초기화
                setStep((prev) => (prev < sentences.length - 1 ? prev + 1 : prev));
            };
        }

        audio.addEventListener('ended', handleAudioEnd);

        audio.play()
            .then(() => setIsPlaying(true)) // 재생 성공 시 상태 업데이트
            .catch((err) => console.error('Audio play failed:', err));

        return () => {
            audio.removeEventListener('ended', handleAudioEnd);
            audio.pause();
        }
    };

    const handlePauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause(); // 현재 재생 중인 오디오 중단
            setIsPlaying(false); // 재생 상태 변경
        }
    };

    useEffect(() => {
        if (isPlaying) {
            handlePlayAudio(); // 오디오 재생 관리
        }
    }, [step, isPlaying]);

    const handleNext = () => {
        repeatCountRef.current = 0; // 반복 횟수 초기화
        if (step < sentences.length - 1) setStep(step + 1);
    };

    const handlePrev = () => {
        repeatCountRef.current = 0; // 반복 횟수 초기화
        if (step > 0) setStep(step - 1);
    };

    if (!sentences || sentences.length === 0) return <p>문장을 로드할 수 없습니다.</p>;


    return (
        <div id="learning" className="container">
            <div className="main-content container learning">
                <h1 className="header-title">
                    <br />
                    <span className="down"> {albumName}</span>
                </h1>
                <Frame id={step + 1} ko={sentences[step].koreanText} en={sentences[step].englishText} total={sentences.length} />
                <div className="controls">
                    <button onClick={handlePrev} disabled={step === 0} className='btn btn-primary' >
                        이전
                    </button>
                    <button className='btn btn-primary'>
                        <FiVolume2 /> <span onClick={() => {
                            let cnt = repeatCount;
                            if (cnt === 2) cnt = -1;
                            setRepeatCount(cnt + 1);
                        }}>{repeatCount + 1}</span>
                    </button>
                    <button
                        onClick={() => setIsPlaying(true)} // 사용자 상호작용으로 재생 시작
                        disabled={isPlaying}
                        className='btn btn-primary'
                    >
                        재생
                    </button>
                    <button className='btn btn-primary'
                        onClick={handlePauseAudio} // 멈춤 동작 추가
                        disabled={!isPlaying}
                    >
                        <FiPause /> 멈춤
                    </button>
                    <button onClick={handleNext} disabled={step === sentences.length - 1} className='btn btn-primary' >
                        다음
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Learning;