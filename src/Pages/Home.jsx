import React from 'react'
import RecentBlog from '../Components/RecentBlog'
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax'
import bg from '../images/bg-2.jpg'
import write from '../images/new.png'
import { Button } from 'react-bootstrap';


function Home() {

    return (


        <section >
            <div id='home' style={{ width: '100%' }}>
                <h2>h1 </h2>
                <h6>h3</h6>


                <div>
                    <Parallax style={{ width: '100%', height: '600px' }} strength={500} className='parallax w-100 mb-5' bgImage={bg}>


                        <div className='text-white mt-3'>
                            <h1 style={{ margin: '150px', fontSize: '60px' }}>Welcome <br /> to the <br />
                                World of<br />News & Stories</h1>
                        </div>



                    </Parallax>

                    <hr />

                    <div className='d-flex me-5 gap-5 justify-content-center  '>

                        <div className='d-flex flex-column justify-content-center '>
                            <br />
                            <p className=' fs-1'>What's in your mind <br />Post it now !!! </p>

                            <Link to={'/add'}>

                                <button className=' bg-secondary fs-3 rounded-4 p-3' style={{ color: "white" }}>Write new blog</button>
                            </Link>

                        </div>
                        <img className='ms-5' width={"300px"} height={"300px"} src={write} alt="" />

                    </div>

                    <hr />

                    <div style={{ paddingTop: '150px' }}>
                        <RecentBlog />
                    </div>

                    <Link style={{ textDecoration: 'none' }} to={'/allblogs'}>
                        <div className='text-center p-5'>
                            <Button className='fs-3 btn-secondary' >View all</Button>
                        </div>
                    </Link>

                    <hr />
                </div>

                <div id='subscribe' className='d-flex pt-4 gap-5 justify-content-center  '>


                    <p className=' fs-1 me-5'>Subscribe to get <br /> latest Posts</p>

                    <div className='subscribe-sec d-flex  justify-content-center align-items-center ms-5'>


                        <input style={{ width: '200px', height: '50px' }} type='text' id='subscribe' placeholder='email' className='p-3 border ' />
                        <button className='w-100 bg-dark d-flex justify-content-center  align-items-center px-3' style={{ color: "white", height: '50px' }}>Subscribe</button>



                    </div>
                </div>
                <hr />
            </div>
        </section>

    )
}

export default Home