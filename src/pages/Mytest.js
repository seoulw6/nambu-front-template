import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { FiPause, FiRefreshCcw, FiVolume2 } from 'react-icons/fi';




const Learning = () => {
    const { state } = useLocation();
    const { sentences, albumName } = state || {};
    const [step, setStep] = useState(0);
    const [repeatCount, setRepeatCount] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false); // 재생 상태

    const audioRef = useRef(null); // 오디오 객체 관리

    const handlePlayAudio = () => {
        if (!sentences || sentences.length === 0) return;

        const currentAudioUrl = sentences[step]?.koreanAudioUrl;

        if (audioRef.current) {
            audioRef.current.pause(); // 기존 오디오 중단
        }

        const audio = new Audio(currentAudioUrl);
        audioRef.current = audio;

        const handleAudioEnd = () => {
            if (repeatCount < 2) {
                setRepeatCount((prev) => prev + 1);
                audio.play(); // 다시 재생
            } else {
                setRepeatCount(0); // 반복 횟수 초기화
            }
        };

        audio.addEventListener('ended', handleAudioEnd);

        audio.play()
            .then(() => setIsPlaying(true)) // 재생 성공 시 상태 업데이트
            .catch((err) => console.error('Audio play failed:', err));

        return () => {
            audio.removeEventListener('ended', handleAudioEnd);
            audio.pause();
        };
    };

    useEffect(() => {
        if (isPlaying) {
            handlePlayAudio(); // 오디오 재생 관리
        }
    }, [step, isPlaying]);

    const handleNext = () => {
        if (step < sentences.length - 1) setStep(step + 1);
    };

    const handlePrev = () => {
        if (step > 0) setStep(step - 1);
    };

    if (!sentences || sentences.length === 0) return <p>문장을 로드할 수 없습니다.</p>;

    return (
        <div id="learning" className="container">
            <h1>{albumName}</h1>
            <div className="sentence">
                <p>{sentences[step].koreanText}</p>
                <p>{sentences[step].englishText}</p>
            </div>
            <div className="controls">
                <button onClick={handlePrev} disabled={step === 0}>
                    이전
                </button>
                <button
                    onClick={() => setIsPlaying(true)} // 사용자 상호작용으로 재생 시작
                    disabled={isPlaying}
                >
                    재생
                </button>
                <button onClick={handleNext} disabled={step === sentences.length - 1}>
                    다음
                </button>
            </div>
        </div>
    );
};

export default Learning;