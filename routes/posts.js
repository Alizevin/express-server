import { Router } from 'express'
import {
    createPost,
    getAll,
    getById,
    removePost,
    updatePost,
    
    
} from '../controllers/posts.js'
const router = new Router()

// Create Post
router.post('/',  createPost)

// Get All Posts
router.get('/', getAll)

//
 
// by id
router.get('/:id', getById)

// Update Post
router.put('/:id',  updatePost)


// Remove Post
router.delete('/:id',  removePost)


export default router
