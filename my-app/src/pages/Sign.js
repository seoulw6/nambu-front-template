const Sign = () => {
    return (
        <header id="sign" class="header">

            <div class="main-content container learning">
                <h1 class="header-title">

                    <br />
                    <span class="down">회원가입</span>
                </h1>
                <p class="header-subtitle">나에게 꼭 맞는 문장으로 학습하세요!</p>

                <form action="" class="contact-form col-md-10 col-lg-8 m-auto">
                    <label>회원 이름을 입력해주세요.</label>
                    <div class="form-row">
                        <div class="form-group col-sm-12">
                            <input type="text" size="50" class="form-control" placeholder="Your Name" required />
                        </div>

                    </div>
                    <label>로그인할 이메일을 입력해주세요.</label>
                    <div class="form-row">
                        <div class="form-group col-sm-12">
                            <input type="email" class="form-control" placeholder="Enter Email" requried />
                        </div>
                    </div>
                    <label>비밀번호를 설정해주세요.</label>
                    <div class="form-row">
                        <div class="form-group col-sm-6">
                            <input type="password" size="50" class="form-control" placeholder="Your Password" required />
                        </div>
                        <div class="form-group col-sm-6">
                            <input type="password" class="form-control" placeholder="Your Password Confirm" required />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-sm-12 mt-3">
                            <input type="submit" value="회원 가입" class="btn btn-outline-primary rounded" />
                        </div>
                    </div>
                    <label>테스트를 하면 본인 수준에 맞는 문장패키지를
                        받을 수 있어요.</label>
                    <div class="form-row">


                        <div class="form-group col-sm-12 mt-3">
                            <input type="submit" value="레벨테스트 하러가기" class="btn btn-outline-primary rounded"
                                onclick="location.href='testing.html';" />
                        </div>
                    </div>
                    <label>이제 문장으로 학습을 시작해보세요.</label>
                    <div class="form-row">

                        <div class="form-group col-sm-12 mt-3">
                            <input type="submit" value="바로 학습 하러가기" class="btn btn-outline-primary rounded"
                                onclick="location.href='learning.html';" />
                        </div>
                    </div>
                    <label>1 Day 1 Blog 해보세요.</label>
                    <div class="form-row">
                        <div class="form-group col-sm-12 mt-3">
                            <input type="submit" value="BLOG 하러가기" class="btn btn-outline-primary rounded"
                                onclick="location.href='blogging.html';" />
                        </div>
                    </div>

                </form>
            </div>
        </header>
    )
}
export default Sign;