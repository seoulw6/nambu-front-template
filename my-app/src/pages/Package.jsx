import React from 'react';
import { useParams } from 'react-router-dom';
import { packages } from '../datapack';
import { sentences } from '../datasentence';
import { dataref } from '../dataref';
import { FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Package = ({ name }) => {
    let { id } = useParams();
    let { packagesName } = useSelector((state) => state);
    // const  [...pack]  = packages.find((item) => item.id === id);
    return (
        <div id="Package" className="container">
            <div className="main-content container learning">
                <h1 className="header-title">
                    <br />
                    <span className="down">{id}:{packagesName}</span>
                    <br></br>
                    <Link to={`/learning/${id}`} >
                        학습 시작 <FiPlay />
                    </Link>
                </h1>
                {dataref.map(({ owner, packageid, sentenceid, id, date }) => {
                    return (
                        <div className="form-row" key={id}>
                            <div className="form-group col-sm-12">
                                <input value={sentenceid} type="text" size="50" className="form-control" readOnly />
                                {date} {owner} {packageid}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Package;