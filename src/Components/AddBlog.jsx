import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import Form from 'react-bootstrap/Form';

import { uploadBlogAPI } from '../Services/allAPI';

import { useNavigate} from 'react-router';



function AddBlog() {

    const options = ["Lifestyle", "Technology", "Travel", "Sports", "Entertainments"] 
    const [blog, setBlog] = useState({ title: '', description: '', image: '', category: '' })   
    const { title, description, category, image } = blog
    const navigate = useNavigate()
   

    const getDate = () => {
        let today = new Date()

        const timeStamp = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(today)
        return timeStamp;
    }

    const handleUpload = async (e) => {
        e.preventDefault()

        if (title && description && image && category) {
            const currentDate = getDate()
                const updatedBlogData = { ...blog, date: currentDate }

                const response = await uploadBlogAPI(updatedBlogData)

                if (response.status >= 200 && response.status < 300) {
                    toast.success(`"${response.data.title}" created successfully`)
                } else {
                    error("Uploading failed")
                }         

            setBlog({ title: '', description: '', image: '', category: '' });

            navigate('/allblogs')


        } else {

            alert("Fill all details")

        }
    

    }

    return (
        <div className='d-flex justify-content-center'>
            <div style={{ width: '600px', height: '600px',marginTop:'70px' }} className=''>

                <h1 className='text-center'>Add Blog</h1>
                <Form className='contact-form ' onSubmit={handleUpload}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='mb-3' onChange={(e) => setBlog({ ...blog, title: e.target.value })} type="text" value={title || ""} placeholder="Enter Title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            onChange={(e) => setBlog({ ...blog, description: e.target.value })}
                            as="textarea"
                            value={description || ""}

                            style={{ height: '200px' }}
                        />
                    </Form.Group>

                    <Form.Group className="position-relative mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            onChange={(e) => setBlog({ ...blog, image: e.target.value })}
                           
                            value={image || ""}
                            placeholder="Enter image URL"
                    
                        />

                    </Form.Group>
                    <select style={{ height: '40px', outline: 'none' }} className='w-100 rounded-3' onChange={(e) => setBlog({ ...blog, category: e.target.value })} value={category} >
                        <option>
                            Select Category
                        </option>
                        {options.map((option, index) => (
                            <option key={index} value={option || ""}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <div className='buttons d-flex gap-5 mt-5'>
                        <Button  style={{ margin: '0 0 0 190px' }} className='btn-success fs-5' type='submit'  >Upload</Button>
                        <Button className='btn-danger fs-5' onClick={() => navigate("/")}>Cancel</Button>

                    </div>

                </Form>
            </div>
        </div>
    )
}

export default AddBlog