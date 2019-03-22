// import React, { Component } from 'react'
// import './blogList.css';
// import firebase from '../../firebase';
// import BlogItem from './BlogItem/BlogItem';
// import Spinner from '../../Spinner/Spinner';


//  class BlogList extends Component {
//     state = {
//         addBlogRef: firebase.database().ref('blog'),
//         blogs: [],
//         spinner: false
//     }


//    componentDidMount() {
//      let blogArray = [];
//      if(this.state.addBlogRef){
//        this.setState({
//          spinner: true
//        });
//         this.state.addBlogRef.once('value', (snapshot) => {
//            snapshot.forEach((childSnapshot) => {
//              var childKey = childSnapshot.key;
//              var childData = childSnapshot.val();
//              blogArray.push({...childData,childKey});
//            });
//           this.setState({ blogs: blogArray });
//         }).then(() => {
//           this.setState({
//             spinner: false
//           });
//         }).catch((err) => {
//           this.setState({
//             spinner: false
//           });
//         })
    
//       }

//     }
   
    
//   render() {
//     return  this.state.spinner ? <Spinner /> : <div className="blogList"><div>{this.state.blogs.map((blog , index) =>  <BlogItem key={index} blog={blog} /> )}</div></div>;
//   }
// }


// export default BlogList;