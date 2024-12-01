const Contact = () => {
    return (
        <div id="contact" className="container">

            <div className="main-content container learning">
                <h1 className="header-title">
                    <br />
                    <span className="down">CONTACT US</span>
                </h1>

                <form action="" className="contact-form col-md-10 col-lg-8 m-auto">

                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input type="email" size="50" className="form-control" placeholder="Your email" required />
                        </div>

                        <div className="form-group col-sm-12">
                            <textarea name="content" id="content" rows="6" className="form-control"
                                placeholder="Write Something"></textarea>
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