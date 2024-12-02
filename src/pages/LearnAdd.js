import { FiPlus } from "react-icons/fi";
import { useSelector } from 'react-redux';

const LearnAdd = () => {
    return (
        <div id="LearnAdd" className="container">
            <div className="main-content container learning">
                <h1 className="header-title">
                    <br />
                    <span className="down">문장추가하기 </span>
                </h1>
                <p className="header-subtitle">나에게 꼭 맞는 문장으로 학습하세요!</p>
                <form action="" className="contact-form col-md-10 col-lg-8 m-auto">
                    <label>패키지명</label>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input type="text" size="50" className="form-control" placeholder="Package Name" readOnly />
                        </div>

                    </div>
                    <label>문장을 입력해주세요.</label>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input type="sentence" className="form-control" placeholder="Enter Sentence" />
                            <FiPlus className="form-control" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-12 mt-3">
                            <input type="submit" value="문장 등록" className="btn btn-outline-primary rounded" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LearnAdd;