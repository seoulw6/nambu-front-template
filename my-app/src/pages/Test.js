const Test = () => {
    return (
        <header id="test" class="header">
            <div class="overlay"></div>
            <div class="main-content container learning">

                <div class="title">
                    <h1 class="header-title">
                        <span class="up">Level Test</span><br />

                    </h1>
                    <span class="down">1/20</span>
                </div>
                <div class="content">
                    <div>아래 문장에 해당하는 정확한 해석을 고르시요.</div>
                    <div class="question content-ko ">I live in Seoul.</div>
                    <div class="answer">
                        <ul>
                            <li> <input type="radio" id="levelanswer01" name="test" value="1" />나는 서울에 산다.</li>
                            <li> <input type="radio" id="levelanswer01" name="test" value="2" />나는 서울에 살 것이다.</li>
                            <li> <input type="radio" id="levelanswer01" name="test" value="3" />나는 서울에 들렀다.</li>
                            <li> <input type="radio" id="levelanswer01" name="test" value="4" />나는 서울에 살았다.</li>
                        </ul>
                    </div>
                </div>
                <div class="controls">
                    <button class="btn btn-primary">Prev</button>
                    <button class="btn btn-primary">Next</button>
                </div>

            </div>
        </header>
    )
}
export default Test;