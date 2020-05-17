import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import axios from 'axios';
import { getUser, getToken } from './helpers';
import renderHTML from 'react-render-html'
import Logo from './logo-img.jpeg'


const App = () => {
  const [posts, setPosts] = useState([]);


  const fetchPosts = () => {
    axios.get(`${process.env.REACT_APP_API}/posts`)
      .then(response => {
        console.log(response)
        setPosts(response.data)
      })
      .catch(error => alert('Error fetching posts'))
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const deleteConfirm = (slug) => {
    let answer = window.confirm('Are tyou sure you want to delete this post?')
    if (answer) {
      deletePost(slug)
    }
  }

  const deletePost = (slug) => {
    axios
      .delete(`${process.env.REACT_APP_API}/post/${slug}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      }
      )
      .then(response => {
        alert(response.data.message)
        fetchPosts()
      })
      .catch(error => alert('error fdeleting post'))
  }


  return (
    <div className="container pb-5">

      <br />
      <br />
      <h1 style={{ textAlign: 'center' }}>My Quarantine Random Thoughts</h1>
      <br />
      <br />
      <img src={Logo} alt="logo" className="logo-img" />
      <hr />
      {/* {JSON.stringify(posts)} */}
      {
        posts.map((post, i) => (
          <div className="row" key={post._id} style={{ borderBottom: '1px solid silver' }}>
            <div className="col pt-3 pb-2">

              <div className='row'>

                <div className="col-md-10">
                  <Link to={`/post/${post.slug}`}> <h2>{post.title}</h2></Link>
                  <div className="lead pt-3">{renderHTML(post.content.substring(0, 100))}</div>
                  <p>Author <span className="badge">{post.user}</span> Published on {' '}<span className="badge">{new Date(post.createdAt).toLocaleString()}</span></p>
                </div>

                {getUser() && (
                  <div className="col-md-2">
                    <Link to={`/post/update/${post.slug}`} className="btn btn-sm btn-outline-warning">
                      Update
                     </Link>

                    <button onClick={() => deleteConfirm(post.slug)} className="btn btn-sm btn-outline-danger ml-1">Delete</button>

                  </div>
                )}

              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}


export default App;
