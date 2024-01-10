import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { getABlogAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';

function View() {

    const [blogs, setBlogs] = useState()
    const { id } = useParams();


    useEffect(() => {

        getSingleBlog(id)
    }, [id])

    const getSingleBlog = async (id) => {
        const resp = await getABlogAPI(id)



        if (resp.status >= 200 && resp.status < 300) {

            setBlogs(resp.data);


        } else {
            toast.error('Something went wrong')
        }
    }

    return (
        <>
            <div style={{ margin: '10% 19%' }} className='d-flex flex-column justify-content-center  ' >
                <div >
                    
                        <p className='text-secondary'>{blogs?.date}</p>
                       

                    <h1>{blogs?.title}</h1>
                    <p className='fs-8' style={{marginLeft:'90%'}}>{blogs?.category}</p>
                    </div>
                    <img src={blogs?.image} alt='cover' />
                    <p className='blog-desc mt-4 fs-5'>{blogs?.description}</p>

                <ToastContainer position='top-center'
                    theme='colored' autoClose={2000} />
            </div>
        </>
    )
}

export default View