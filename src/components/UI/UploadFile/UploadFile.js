import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import './UploadFile.css';
import {Icon, Progress} from 'semantic-ui-react';
 
class UploadFile extends Component {
  state = {
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: this.props.value ? this.props.value : ""
  };
 
  handleChangeUsername = event =>
    this.setState({  });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({ avatarURL: url })
        this.props.handleFile(url);
      } );
  };
 
  render() {
    return (
      <div className='UploadFile'>
        <form>
        {/* <label>Username:</label>
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleChangeUsername}
          />
          <label>Avatar:</label> */}
          {this.state.isUploading && <Progress percent={this.state.progress} color='green' />}
          {this.state.avatarURL && <img className='UploadFile__img' src={this.state.avatarURL} />}
          <label className='UploadFile__button'>
        {this.state.avatarURL ?  <Icon name='edit' /> : <Icon name='add' />  }
    <FileUploader
      hidden
      accept="image/*"
      storageRef={firebase.storage().ref('images')}
      onUploadStart={this.handleUploadStart}
      onUploadError={this.handleUploadError}
      onUploadSuccess={this.handleUploadSuccess}
      onProgress={this.handleProgress}
    />
  </label>
        </form>
      </div>
    );
  }
}

 
export default UploadFile;