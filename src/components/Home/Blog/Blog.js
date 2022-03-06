import React from 'react';
import './Blog.css';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png'
import BlogCard from './BlogCard/BlogCard';

const Blog = () => {

    const blogCardData = [
        {
            image: people1,
            name: 'Rashed Kabir',
            date: '22 Aug 2018',
            title: 'Check atleast a doctor in a year for your teeth',
            description: 'It is a long established fact that by the readable content of a lot layout. The point '
        },
        {
            image: people2,
            name: 'Dr. Caudi',
            date: '23 Apr 2019',
            title: '2 times of brush in a day can Keep you healthy',
            description: 'It is a long established fact that by the readable content of a lot layout. The point '
        },
        {
            image: people3,
            name: 'Dr. John Mitchel',
            date: '23 Apr 2019',
            title: 'The tooth cancer is taking a challenge',
            description: 'It is a long established fact that by the readable content of a lot layout. The point '
        }
    ]
    return (
        <section className="container">
            <div className="blog-title text-center mb-5 pb-5">
                <h6>OUR BLOG</h6>
                <h1>From our Blog News</h1>
            </div>

            <div className="d-flex justify-content-center">
                <div className="row">
                    {
                        blogCardData.map(blogData => <BlogCard blogData={blogData}></BlogCard>)
                    }
                </div>
            </div>
            
        </section>
    );
};

export default Blog;