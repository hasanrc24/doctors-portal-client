import React from 'react';
import './BlogCard.css';
import arrow from '../../../../images/arrow.png'

const BlogCard = ({blogData}) => {
    return (
            <div className="col-md-4 mb-5 pb-5">
                <div className="blog-card-shadow blog-card">
                    <div className="card-body padd">
                        <div className="d-flex mt-4 mb-4">
                            <img className="img-fluid img-height me-4" src={blogData.image} alt="" />
                            <div className="">
                                <h6>{blogData.name}</h6>
                                <h6 className="card-desc">{blogData.date}</h6>
                            </div>
                        </div>
                        <div className="card-title mb-3">{blogData.title}</div>
                        <h6 className="card-desc">{blogData.description}</h6>
                    </div>

                    <div className="blog-hover">
                        <div className="blog-hover-inner text-white">
                            <h6>{blogData.name}</h6>
                            <small>{blogData.date}</small>
                            <div className="card-title mt-4 me-5">{blogData.title}</div>
                            <img className="img-fluid arr" src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default BlogCard;