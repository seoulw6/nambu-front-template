import React, { useState } from "react";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Email:", email);
        console.log("Message:", content);
        // 서버로 데이터를 보내거나 추가 작업 수행
    };
    return (
        <div id="contact" className="container">

            <div className="main-content container learning">
                <h1 className="header-title">
                    <br />
                    <span className="down">CONTACT US</span>
                </h1>

                <form  onSubmit={handleSubmit}  className="contact-form col-md-10 col-lg-8 m-auto">

                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input type="email"  value={email}
                                onChange={(e) => setEmail(e.target.value)} size="50" className="form-control" placeholder="Your email" required />
                        </div>

                        <div className="form-group col-sm-12">
                            <textarea  value={content}
                                onChange={(e) => setContent(e.target.value)} name="content" id="content" rows="6" className="form-control"
                                placeholder="Write Something" ></textarea>
                        </div>

                        <div className="form-group col-sm-12 mt-3">
                            <input type="submit" value="저장" className="btn btn-outline-primary rounded"
                                />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default Contact;