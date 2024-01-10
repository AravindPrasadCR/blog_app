import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteABlogAPI, getAllBlogsAPI } from '../Services/allAPI';
import { Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';



function Blog({ }) {

    const [deleteBlogStatus, setDeleteBlogStatus] = useState(false)
    const [allBlogs, setAllBlogs] = useState([])

    const getAllUploadedBlogs = async () => {
        const response = await getAllBlogsAPI()
        if (response.status >= 200 && response.status < 300) {
            setAllBlogs(response.data)
        } else {
            console.log("Something Went Wrong");
        }
    }

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure to delete the blog")) {
            const response = await deleteABlogAPI(id)
            setDeleteBlogStatus(true)
            if (response.status >= 200 && response.status < 300) {
                toast.success('Blog Deleted successfully')
                getAllUploadedBlogs()
            }
        } else {
            console.log("Something Went Wrong");
        }
    }


    useEffect(() => {
        getAllUploadedBlogs()
        setDeleteBlogStatus(false)
    }, [deleteBlogStatus])


    return (
        <>

            <div className='p-5 mt-5'>

                
                    <h4 className='fs-1 text-center'>You can check all blogs here !!!</h4>


                <div className='mt-5' >
                    <Row>
                        {allBlogs?.length > 0 ? allBlogs.map((item, index) => (
                            <Col className='p-4' sm={12} md={6} lg={4} xl={4}>
                                <div key={index} className='d-flex flex-column'>
                                    <img style={{ height: '250px', width: '100%' }} className='rounded-4' src={item?.image} alt='cover' />
                                    <div className='d-flex justify-content-between mt-3'>
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/categories`}>
                                        <h6>{item?.category}</h6></Link>
                                        <i className='fa-regular fa-heart'></i>
                                        </div>
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/viewblog/${item?.id}`}>

                                        <h3 className='mt-1'>{item?.title}</h3>

                                        <div >{(item?.description).slice(0, 170)}... <span className='text-primary'>read more</span>


                                        </div>
                                    </Link>

                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Link className='blogItem-link text-black' to={`/edit/${item?.id}`}>
                                            <i className="fa-solid fa-edit"></i>
                                        </Link>

                                        <div style={{ cursor: 'pointer' }} className='delete' onClick={() => handleDelete(item?.id)}><i className="fa-solid fa-trash"></i></div>
                                    </div>
                                </div>
                            </Col>
                        )) : <p className='text-center'>No Blogs</p>
                        }
                    </Row>
                </div>
            </div>

        </>
    )
}

export default Blog