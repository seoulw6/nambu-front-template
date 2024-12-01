import { React } from 'react';
import { blogs } from '../datablog';
import { Link } from 'react-router-dom';
import { FiBookmark, FiPlus } from "react-icons/fi";

const Blog = () => {
    return (
        <div id="blog" className="container">
            <div className="main-content container learning">
                <h1 className="header-title">
                    <br />
                    <span className="down">BLOG</span>
                </h1>
                <table className="table table-striped">
                    <tbody>
                        {
                            blogs.map(({ title, id, content, date, writer }) => {
                                return (
                                    <tr key={id}>
                                        <td>
                                            <Link to={`/BlogDetail/${id}`}>
                                                <FiBookmark />  {title} <br />
                                                <p>{content}</p>

                                                <div className="right"> 👍 0<br /> {writer} <br />{date}</div>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        <tr><td><Link to={'/BlogAdd'}>
                            <FiPlus className='form-control' />
                        </Link></td></tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}
export default Blog;