const Blog = () => {
    return (
        <header id="blog" class="header">

            <div class="main-content container learning">
                <h1 class="header-title">
                    <br />
                    <span class="down">BLOG</span>
                </h1>

                <form action="" class="contact-form col-md-10 col-lg-8 m-auto">

                    <div class="form-row">
                        <div class="form-group col-sm-12">
                            <input type="text" size="50" class="form-control" placeholder="title" required />
                        </div>

                    </div>

                    <div class="form-row">
                        <div class="form-group col-sm-12">
                            <textarea name="content" id="content" rows="6" class="form-control"
                                placeholder="Write Something"></textarea>
                        </div>
                    </div>
                    <label>Image</label>

                    <div class="form-row">
                        <div class="form-group col-sm-12 mt-3">
                            <input type="file" />
                        </div>
                    </div>
                    <label></label>
                    <div class="form-row">

                        <div class="form-group col-sm-12">
                            <textarea name="comment" id="comment" rows="6" class="form-control"
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
export default Blog;