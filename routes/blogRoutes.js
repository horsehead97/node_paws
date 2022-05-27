const express=require('express')
const router=express.Router()
const blogController=require('../controllers/blogController')



router.get('/', blogController.blog_index)
router.get('/create', blogController.blog_create_get)
router.get('/:id', blogController.blog_details)
router.post('/', blogController.blog_create_post)
router.delete('/:id', blogController.blog_delete)
router.use((req,res)=>{
    res.status(404).render('404',{ title: '404' })
})

module.exports=router