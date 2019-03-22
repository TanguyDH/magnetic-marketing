import React, { Component } from 'react'
import Blog from '../../components/Blog/Blog';
import './BlogPage.css';

class BlogPage extends Component {
  render() {
    return (
      <div className='blogPage'>
        <Blog />
      </div>
    )
  }
}



export default BlogPage;