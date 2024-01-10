import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
    <div  className=' bg-light'>
    <div style={{margin:'50px 200px'}} className="footer-content d-flex justify-content-between gap-5">
        <div style={{width: '400px'}} className="title">
            <h3 className='d-flex mt-4'>Focus</h3>
            <p style={{textAlign: 'justify'}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae tempore inventore, ex esse nesciunt, dicta ducimus ratione deserunt similique minima voluptate qui itaque maiores accusantium aspernatur officia totam quibusdam nemo.</p> 
        </div>

        <div className="guides d-flex flex-column">
            <h3 className='mt-4'>Links</h3>
            <a style={{color: 'black'}} className='text-decoration-none' href="" >Services</a>
            <a style={{color: 'black'}} className='text-decoration-none' href="">Policy</a>
            <a style={{color: 'black'}} className='text-decoration-none' href="">Rewards</a>
            <a style={{color: 'black'}} className='text-decoration-none' href="">More</a>
        </div>
        <div style={{ color: 'black' }} className="icons d-flex flex-column">
                    <h3 className='mt-4'>Follow</h3>
                    <div className='d-flex gap-2 justify-content-between'>
                        <a href=""><i style={{height: '50px', color: 'black' }} class="fa-solid fa-envelope fa-2x"></i></a>
                        <a href=""><i style={{height: '50px', color: 'black' }} class="fa-brands fa-twitter fa-2x"></i></a>
                        <a href=""><i style={{height: '50px', color: 'black' }} class="fa-brands fa-github fa-2x"></i></a>
                        <a href=""><i style={{height: '50px', color: 'black' }} class="fa-brands fa-facebook fa-2x"></i></a>
                        <a href=""><i style={{height: '50px', color: 'black' }} class="fa-brands fa-instagram fa-2x"></i></a>
                    </div>
                </div>

            </div>
            <p className='pt-4 text-center'>Copyright &copy; 2023. Built with React</p>
        </div>
  )
}

export default Footer