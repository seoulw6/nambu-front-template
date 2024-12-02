import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { sentences } from '../datasentence';
import { FiPlay } from "react-icons/fi";
const LearnList = () => {
    return (
        <div id="learnlist" className="container">
            <div className="main-content container learning">
                <h1 className="header-title">
                    <br />
                    <span className="down">READING</span>
                </h1>
                <h3 className="components-section-title ml-3">학습 패키지 문장리스트</h3>
                <hr />
                <table className="table table-striped">
                    <tbody>
                        {
                            sentences.map(({ id, ko, en }) => {
                                return (
                                    <tr key={id}>
                                        <td>
                                            <div>
                                                {ko}
                                            </div>
                                            <div>
                                                {en}
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <td>
                                <div className="form-controls">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination pagination-sm">
                                            <li className="page-item"><a className="page-link" href="#"><i
                                                className="ti-angle-double-left"></i></a>
                                            </li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                                            <li className="page-item"><a className="page-link" href="#"><i
                                                className="ti-angle-double-right"></i></a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div className="form-row">
                                    <div className="form-group col-sm-12 mt-3">
                                        <Link to='/LearnAdd' className="btn btn-outline-primary rounded">문장 추가하기</Link>

                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default LearnList;