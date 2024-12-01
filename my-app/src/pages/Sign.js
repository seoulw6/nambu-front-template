import {Link} from 'react-router-dom';
const Sign = () => {
    return (
        <div id="sign" className="container">
            <div className="main-content container learning">
                <h1 className="header-title">
                    <br />
                    <span className="down">로그인</span>
                </h1>
                <form action="" className="contact-form col-md-10 col-lg-8 m-auto">
                    <label>가입한 이메일을 입력해주세요.</label>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input type="email" className="form-control" placeholder="Enter Email" requried />
                        </div>
                    </div>
                    <label>비밀번호를 입력해주세요.</label>
                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input type="password" size="50" className="form-control" placeholder="Your Password" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-12 mt-3">
                            <input type="submit" value="로그인" className="btn btn-outline-primary rounded mr-1" />
                            <Link to={'/join'} className="btn btn-outline-primary rounded">회원가입</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Sign;