import React, { Component } from 'react'
import  './BlogsList.css' ;
import BlogList from '../../components/BlogList/BlogList';


class BlogsList extends Component {
   
  render() {
    return (
      <div className='blogsList'>
            <BlogList />
      </div>
    )
  }
}


export default BlogsList;