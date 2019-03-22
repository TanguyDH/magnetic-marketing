// import React, { Component } from 'react'
// import './Blog.css'
// import firebase from '../../firebase';
// import {withRouter} from 'react-router-dom';
// import Spinner from '../../Spinner/Spinner';
// import BlogLaunchCampaign from "../../components/UI/BlogLaunchCampaign/BlogLaunchCampaign";


// class Blog extends Component {
//   state = {
//     blog: null,
//     spinner: false
//   }
//   componentDidMount() {
//     window.scrollTo(0,0);
//      this.setState({
//          spinner: true
//        });
//        firebase.database().ref('/blog').once('value', (snapshot) => {
//              console.log(snapshot.val());
//              console.log(snapshot);
//             const blog = Object.keys(snapshot.val())
//             .find(blogId =>{
//                return this.props.match.params.id === blogId.replace(/\s/g, "_"); 
//             })
//           const blogObject = snapshot.val()[blog]
//           this.setState({blog: blogObject});
//        }).then(() => {
//          this.setState({
//          spinner: false
//        })
//       }).catch(() => {
//          this.setState({
//          spinner: false
//        });
//        })
//   }
//   render() {
    
//     return this.state.spinner ? <Spinner /> : <div className="blog">
//         <div className="blog__header">
//           <div className="blog__title">
//             <h2>{this.state.blog !== null && this.state.blog.title}</h2>
            
//           </div>
//           <img className="blog__img" src={this.state.blog !== null  ?  this.state.blog.link : null} alt="" />
//         </div>

//         <div className="blog__text">
//             {this.state.blog !== null &&
              
//                Object.keys(this.state.blog.block)
//                .map(index =>{
//                   switch(this.state.blog.block[index][0]){
//                     case 'p':
//                      return  <p className='blog__p' key={index}>{this.state.blog.block[index][1]}</p>;

//                        case 'h3':
//                      return  <h3 className='blog__h3' key={index}>{this.state.blog.block[index][1]}</h3>;

//                         case 'campaignButton':
//                      return <BlogLaunchCampaign />


//                      default: 
//                      return <p key={index}></p>
//                   }
                
//            })
              
//               }
        
//         </div>
//       </div>;
//   }
// }


// export default withRouter(Blog);
