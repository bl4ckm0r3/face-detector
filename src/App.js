import React, { Component, Fragment } from "react";
import { Eye, Mouth, Nose, Face } from "./Detection";

export default class App extends Component {
  state = {
    faces: []
  };

  _videoRef = video => {
    this.video = video;
  };

  checkFeatures() {
    if (!navigator.getUserMedia) {
      alert("No webcam!");
      return false;
    }
  
    if (typeof window.FaceDetector === "undefined") {
      alert("No face detection!");
      return false;
    }
    return true;
  }

  async componentDidMount() {
    if (!this.checkFeatures()) {
      return;
    };

    this.faceDetector = new window.FaceDetector();

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true
    });

    this.video.srcObject = stream;

    this.detectFace();
  }

  detectFace = async () => {
    try {
      const faces = await this.faceDetector.detect(this.video);
      this.setState({
        faces
      });
    } catch(e) {
      console.log(e);
    }
    
    window.requestAnimationFrame(this.detectFace);
  };

  renderLandmark(type) {
    if (type === "eye") {
      return Eye;
    }
    if (type === "mouth") {
      return Mouth;
    }
    if (type === "nose") {
      return Nose;
    }
  }

  renderFaceDetails = (face, id) => {
    return (
      <Fragment key={id}>
        <Face boundingBox={face.boundingBox} key={face.boundingBox.x + face.boundingBox.y}/>
        {face.landmarks.map(({ type, location }) => {
          const Landmark = this.renderLandmark(type);
          return <Landmark location={location} key={location.x + location.y}/>;
        })}
      </Fragment>
    );
  };

  render() {
    return (
      <Fragment>
        <video ref={this._videoRef} autoPlay />
        {this.state.faces.map(this.renderFaceDetails)}
      </Fragment>
    );
  }
}
