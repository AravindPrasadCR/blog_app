import React, { useEffect, useState } from 'react'
import { getAllBlogsAPI } from '../Services/allAPI'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { serverURL } from '../Services/serverURL'


function HomeBlog({ id }) {

    const [data, setData] = useState([])


    const getAllUploadedBlogs = async () => {
        // make api call
        const newBlogs = await getAllBlogsAPI()
        const start = newBlogs.data.length - 2;
        const end = newBlogs.data.length
        const response = await axios.get(`${serverURL}/blogs?_start=${start}&_end=${end}`)

        if (response.status >= 200 && response.status < 300) {
            setData(response.data)
            // set server response
        } else {
            toast.error("Something Went Wrong")
        }


    }


    const excerpt = (str) => {

        if (str.length > 50) {
            str = str.substring(0, 180) + "..."

        }
        return str;
    }


    useEffect(() => {
        getAllUploadedBlogs()
    }, [])

    return (
        <section className='home_blog w-100 mt-5' data-aos="fade-up" >
            <div>
                <div className='d-flex justify-content-center align-items-center flex-column pt-5' style={{ marginTop: '50px' }}>
                    <h1>Recent Blogs</h1>

                </div>

                {data?.length > 0 ? data.map((item, index) =>
                    <div key={index} className='d-flex justify-content-center align-items-center flex-column'>
                        <Link style={{ textDecoration: 'none' }} className='recent' to={`/viewblog/${item?.id}`}>
                            <div className='mt-4 shadow' style={{ height: '270px', width: '1100px' }} data-aos="fade-up">
                                <div className='d-flex justify-content-between align-items-center w-100' >
                                    <div className='p-2'> <img width={'240px'} height={'250px'} src={item?.image} alt="" />
                                    </div>
                                    <div className='d-flex justify-content-between  flex-column ms-5'>
                                        <div className='d-flex justify-content-between flex-column text-black'>
                                            <h2>{item?.title}</h2>
                                            <p style={{ textDecoration: 'none' }} className='home-desc'>{excerpt(item?.description)}
                                                <Link className='text-black' to={`/viewblog/${item?.id}`}>Read More</Link></p>
                                            <hr />
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p className='text-secondary'>{item?.category}</p>

                                            <div className='text-danger px-4'><i className='fa-regular fa-heart'></i></div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </Link>




                    </div>
                ) : <p className='text-center'>No Blogs</p>
                }

               



            </div>
        </section>
    )
}

export default HomeBlog