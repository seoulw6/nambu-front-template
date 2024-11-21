const Contact = () => {
    return (
        <header id="contact" class="header">

            <div class="main-content container learning">
                <h1 class="header-title">
                    <br />
                    <span class="down">CONTACT US</span>
                </h1>

                <form action="" class="contact-form col-md-10 col-lg-8 m-auto">

                    <div class="form-row">
                        <div class="form-group col-sm-12">
                            <input type="email" size="50" class="form-control" placeholder="email" required />
                        </div>

                        <div class="form-group col-sm-12">
                            <textarea name="content" id="content" rows="6" class="form-control"
                                placeholder="Write Something"></textarea>
                        </div>

                        <div class="form-group col-sm-12 mt-3">
                            <input type="submit" value="저장" class="btn btn-outline-primary rounded"
                                onclick="location.href='mypage.html';" />
                        </div>
                    </div>

                </form>
            </div>
        </header>
    )
}
export default Contact;