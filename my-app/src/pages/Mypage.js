const Mypage = () => {
    return (
        <header id="mypage" class="header">
            <div class="main-content container learning">


                <h1 class="header-title">
                    <br />
                    <span class="down">My Page</span>
                </h1>
                <p class="header-subtitle">나에게 꼭 맞는 문장으로 학습하세요!</p>

                <h3 class="components-section-title">학습문장 패키지 리스트</h3>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <td class="left">생활영어 기초 20문장</td>
                            <td class="right">▶</td>
                        </tr>
                        <tr>
                            <td class="left">my package 1.</td>
                            <td class="right">▶</td>
                        </tr>
                        <tr>
                            <td class="left">my package 2.</td>
                            <td class="right">▶</td>
                        </tr>
                        <tr>
                            <td cols="2">
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

                <h3 class="components-section-title">Blog</h3>
                <table class="table">
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td class="left">I did..</td>
                            <td class="right">2024.11.20</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td class="left">I was...</td>
                            <td class="right">2024.11.19</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td class="left">머지...</td>
                            <td class="right">2024.11.18</td>
                        </tr>
                        <tr>
                            <td cols="3">
                                <div class="form-row">
                                    <div class="form-group col-sm-12 mt-3">
                                        <input type="submit" value="블로그하기" class="btn btn-outline-primary rounded"
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
export default Mypage;