const Post = require('../models/post');
const slugify = require('slugify');


exports.create = (req, res) =>{
    // res.json({
    //     data: "Hello from controllers"
    // })
    
    //console.log(req.body)

    const {title, content, user} = req.body;  //also: req.params  //things we need form req.body
    const slug = slugify(title); //this is going to slugify the title, perfect!Ex My Post >> my-post
    //before create new post we need Validate:
    switch(true){
        case !title:
            return res.status(400).json({error: 'Title is required'});
            break;
        case !content:
            return res.status(400).json({error: 'Content is required'});
            break;    
    }
    //Creating a new Post: method from mongoose:
    Post.create({title, content, user, slug}, (err, post) => {//callback function:: or will present a error, or will present the post:
    if(err){
        console.log(err)
        res.status(400).json({error: 'Duplicated post title. Try another Title.'})
    }
    res.json(post);
 });
}

//SHOW ALL POSTS:
exports.list = (req, res) => {
    Post.find({})
    .limit(10)
    .sort({createdAt: -1}) //to sow the first post first (-1 reverse the order)
    .exec((err, posts) => {  //method from mongoose
        if(err) console.log(err);
            res.json(posts);
    }) 
}

//SHOW SINGLE POST:
exports.read = (req, res) => {
    const {slug} = req.params; //it cams with req.body as well
    console.log(req.params.slug)
    Post.findOne({slug: slug})
    .exec((err, post) => {  //method from mongoose
        if(err) console.log(err);
            res.json(post);
    }) 
}


//UPDATE POST:
exports.update = (req, res) => {
    const {slug} = req.params;
    const {title, content, user} = req.body;
    //second arg is what we wwant to update
    //new: true is to be able to go back to the post after the update
    Post.findOneAndUpdate({slug}, {title, content, user}, {new: true}).exec((err, post) => {
        if(err) console.log(err)
            res.json(post)
    })
}

//DELETE POST:
exports.remove = (req, res) => {
    const {slug} = req.params;
    //second arg is what we wwant to update
    //new: true is to be able to go back to the post after the update
    Post.findOneAndRemove({slug}).exec((err, post) => {
        if(err) console.log(err)
            res.json({
                message: 'Post Deleted'
        })
    })
 }