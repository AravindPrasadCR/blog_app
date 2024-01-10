import { commonApi } from "./commonApi"
import { serverURL } from "./serverURL"



// add blog

export const uploadBlogAPI = async (body) => {
    return await commonApi('POST', `${serverURL}/blogs`, body)
}

// get all blogs

export const getAllBlogsAPI = async () => {
    return await commonApi('GET', `${serverURL}/blogs`, "")
}


// delete a blog

export const deleteABlogAPI = async (id) => {
    return await commonApi('DELETE', `${serverURL}/blogs/${id}`, {})
}




// view a  blog

export const getABlogAPI = async (id) => {
    return await commonApi('GET', `${serverURL}/blogs/${id}`, '')
}


// update blog

export const updateBlogAPI = async (id, body) => {
    return await commonApi('PUT', `${serverURL}/blogs/${id}`, body)
}