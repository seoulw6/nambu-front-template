import { useState, useEffect } from 'react';
const Test = () => {
    const [status, setStatus] = useState(1); // 현재 질문 번호
    const [answers, setAnswers] = useState({}); // 사용자의 선택된 답변 저장
    const [tests, setTests] = useState([]); // API에서 가져온 테스트 데이터
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태
    const [result, setResult] = useState(null); // 결과 저장

    // API에서 데이터 가져오기
    useEffect(() => {
        const fetchTests = async () => {
            try {
                const response = await fetch('https://yfwebapp-eff7epg4dvhrftdv.koreacentral-01.azurewebsites.net/api/questions');
                if (!response.ok) {
                    throw new Error('데이터를 불러오는 데 실패했습니다.');
                }
                const data = await response.json();
                setTests(data); // 테스트 데이터 설정
                setLoading(false);
                console.log(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchTests();
    }, []);

    const handleAnswerChange = (id, optionNumber) => {
        setAnswers((prev) => ({
            ...prev,
            [id]: optionNumber, // 질문 ID를 키로 사용해 선택한 답변 저장
        }));
    };


    const handleSubmit = async () => {
        try {
            // 답변을 서버로 제출할 형식으로 변환
            const payload = {
                answers: Object.entries(answers).map(([question_id, answer]) => ({
                    question_id: Number(question_id), // 질문 ID를 숫자로 변환
                    answer,
                })),
            };

            console.log('제출된 데이터:', payload);

            const response = await fetch('https://yfwebapp-eff7epg4dvhrftdv.koreacentral-01.azurewebsites.net/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('결과를 가져오는 데 실패했습니다.');
            }

            const resultData = await response.json();
            setResult(resultData); // 결과 저장
            console.log('결과:', resultData);
        } catch (error) {
            console.error('제출 에러:', error);
            alert('테스트 제출에 실패했습니다.');
        }
    };

    if (loading) {
        return <p>로딩 중...</p>;
    }

    if (error) {
        return <p>에러: {error}</p>;
    }

    if (result) {
        return (
            <div>
                <h2>테스트 결과</h2>
                <pre>{JSON.stringify(result, null, 2)}</pre>
                <button onClick={() => setResult(null)}>다시 시작</button>
            </div>
        );
    }

    const currentQuestion = tests.find((test) => test.id === status);


    return (
        <div id="test" className="container">
            <div className="main-content container learning">
                <h1 className="header-title">
                    <br />
                    <span className="down">레벨 테스트</span>
                </h1>
                <form>
                    {currentQuestion && (
                        <div key={currentQuestion.id}>
                            <p className="header-subtitle">
                                {currentQuestion.id} / {tests.length}
                            </p>
                            <div className="content">
                                <div></div>
                                <div className="question content-ko ">
                                    {currentQuestion.question_text}
                                </div>

                                <div className="answer">
                                    <ul>
                                        {currentQuestion.options.map((option) => (
                                            <li key={option.option_number}>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`test${currentQuestion.id}`}
                                                        value={option.option_number}
                                                        checked={answers[currentQuestion.id] === option.option_number}
                                                        onChange={() =>
                                                            handleAnswerChange(
                                                                currentQuestion.id,
                                                                option.option_number
                                                            )
                                                        }
                                                    />
                                                    {option.option_text}
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="controls">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setStatus((prev) => Math.max(prev - 1, 1))}
                            disabled={status === 1}
                        >
                            이전
                        </button>
                        {status < tests.length ? (
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => setStatus((prev) => Math.min(prev + 1, tests.length))}
                            >
                                다음
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                            >
                                제출
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Test;