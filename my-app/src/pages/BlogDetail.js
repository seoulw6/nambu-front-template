import { React } from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../datablog';

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogs.find((item) => item.id === id);
    console.log(blog);
    return (
        <div id="blogdetail" className="container">
            <div className="main-content container learning">
                <h1 className="header-title">
                    <br />
                    <span className="down">BLOG</span>
                </h1>

                <form action="" className="contact-form col-md-10 col-lg-8 m-auto">

                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <input type="text" size="50" className="form-control" placeholder={blog.title} required />
                        </div>

                    </div>

                    <div className="form-row">
                        <div className="form-group col-sm-12">
                            <textarea name="content" id="content" rows="6" className="form-control"
                                placeholder={blog.content}></textarea>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-12 mt-3">
                            <input type="file" />
                        </div>
                    </div>
                    <label></label>
                    <div className="form-row">
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
export default BlogDetail;