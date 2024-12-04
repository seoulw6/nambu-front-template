import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { sentences } from '../datasentence';
import { FiPause, FiRefreshCcw, FiVolume2 } from 'react-icons/fi';
import { useSelector } from 'react-redux';

const Frame = ({ id, ko, en }) => {
    return (
        <div className="frame">
            <p className="header-subtitle">{id}/20</p>
            <div className="content">
                <div className="question content-ko ">{ko}</div>
                <div className="question content-en ">{en}</div>

            </div>
        </div>
    )
}

const Learning = () => {
    const { id } = useParams();
    let { packagesName } = useSelector((state) => state.packagesName);
    const data = sentences.filter((item) => item.packageid === id);
    // console.log(data);
    const [step, setStep] = useState(1);

    const handleStatus = (value) => {
        if (step + value < 1 || step + value > 20) {
            return;
        }
        return () => {
            setStep(step + value);
        }
    }
    return (

        <div id="learning" className="container mb-3">

            {
                sentences.filter((item) => item.id === step).map(({ id, ko, en },i) => {
                    return (
                        <div key={i} className="main-content container learning">
                            <h1 className="header-title">
                                <br />
                                <span className="down">{packagesName}</span>
                            </h1>
                            <Frame id={id} ko={ko} en={en} />
                            <div className="answer">
                                <div className="controls">
                                    <button className="btn btn-primary" onClick={handleStatus(-1)}>Prev</button>
                                    <button className="btn btn-primary"><FiRefreshCcw /></button>
                                    <button className="btn btn-primary"><FiVolume2 /> 3</button>
                                    <button className="btn btn-primary"><FiPause /></button>
                                    <button className="btn btn-primary" onClick={handleStatus(1)}>Next</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}
export default Learning;