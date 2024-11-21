import React from 'react';

const Learn = () => {
    return (
        <header id="learn" class="header">
            <div class="main-content container learning">

                <h1 class="header-title">
                    <br />
                    <span class="down">READING</span>
                </h1>
                <p></p>
                <p class="header-subtitle">나에게 꼭 맞는 문장으로 학습하세요!</p>

                <h3 class="components-section-title">학습문장 패키지 리스트</h3>

                <hr />
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <td><a href="learningSentence.html">초급 생활회화 20문장</a></td>
                        </tr>
                        <tr>
                            <td><a href="learningSentence.html">중급 생활회화 20문장</a></td>
                        </tr>
                        <tr>
                            <td><a href="learningSentence.html">고급 생활회화 20문장</a></td>
                        </tr>
                        <tr>
                            <td><a href="learningSentence.html">초급 비즈니스 20문장</a></td>
                        </tr>
                    </tbody>
                </table>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <td>
                                <div class="form-controls">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination pagination-sm">
                                            <li class="page-item"><a class="page-link" href="#"><i
                                                class="ti-angle-double-left"></i></a>
                                            </li>
                                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#">4</a></li>
                                            <li class="page-item"><a class="page-link" href="#">5</a></li>
                                            <li class="page-item"><a class="page-link" href="#"><i
                                                class="ti-angle-double-right"></i></a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <div class="form-row">
                                    <div class="form-group col-sm-12 mt-3">
                                        <input type="submit" value="문장 추가하기" class="btn btn-outline-primary rounded"
                                            onclick="location.href='learningadd.html';" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </header>


    )
}
export default Learn;