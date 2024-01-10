import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import axios, { all } from 'axios';
import { serverURL } from '../Services/serverURL';





function Categories({ }) {

    const options = ["Lifestyle", "Technology", "Travel", "Sports", "Entertainments"]

    const [deleteBlogStatus, setDeleteBlogStatus] = useState(false)
    const [allBlogs, setAllBlogs] = useState([])

    const handleCategory = async (category) => {
        
        const response = await axios.get(`${serverURL}/blogs?category=${category}`)
        if (response.status >= 200 && response.status < 300) {
            setAllBlogs(response.data)
        }
        else {
            toast.error("Something Went Wrong")
        }
    }
    


    useEffect(() => {
        setDeleteBlogStatus(false)
    }, [deleteBlogStatus])





    return (
        <>

            <div className='w-100 d-flex justify-content-evenly  align-items-center fs-3 px-5' style={{ margin: '100px 0' }}>
                {options.map((item, index) => (
                    <div style={{ cursor: 'pointer', backgroundColor: 'black', color: 'white' }} className='item mt-5 p-5 rounded-4 w-100 text-center ms-3' key={index} onClick={() => handleCategory(item)} >
                        {item}
                    </div>
                ))}
            </div>
            <div style={{ width: '100%', height: 'auto' }} className='container d-flex justify-content-center align-items-center'>

                <div  >
                    <Row>
                        {allBlogs?.length > 0 ? allBlogs.map((item, index) => (
                            <Col className='p-4' sm={12} md={6} lg={4} xl={4}>
                                <div key={index} className='d-flex flex-column'>
                                    <img style={{ height: '250px', width: '100%' }} className='rounded-4' src={item?.image} alt='cover' />
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/viewblog/${item?.id}`}>

                                        <h3 className='mt-3'>{item?.title}</h3>
                                        <h5>{item?.category}</h5>
                                        <div>{(item?.description).slice(0, 140)}... <span className='text-primary'>read more</span>
                                        </div>
                                    </Link>

                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Link className='blogItem-link text-black' to={`/edit/${item?.id}`}>
                                            <i className="fa-solid fa-edit"></i>
                                        </Link>

                                        <div ><i className='fa-regular fa-heart'></i></div>
                                    </div>
                                </div>
                            </Col>
                        )) : <p></p>
                        }
                    </Row>
                </div>
            </div>

        </>
    )
}

export default Categories