/**
 * Created by vjtc0n on 3/10/17.
 */
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import ComponentA from '../components/componentA';
import '../components/componentA.css'

import * as DemoActions from '../../../actions/demo'
import * as demoSelectors from '../../../selectors/demo'

const mapStateToProps = (state) => ({
  posts: demoSelectors.getPosts(state)
})

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...DemoActions}, dispatch)
  };
}

class ContainerA extends Component {
  componentDidMount() {
    this.props.actions.getPosts((data) => {
      console.log(this.props.posts)
    })
  }
  
  responseFacebook = (response) => {
    console.log(response)
  }
  
  responseGoogle = (response) => {
    console.log(response);
  }
  
  notify = () => {
    //console.log(chrome)
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      let notification = new Notification("Hi there!", {
        type: "basic",
        body: "lmao",
        buttons: [
          {
            title: 'Okay!',
            iconUrl: 'https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/ok.png'
          }
        ]
      });
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          let notification = new Notification("Hi there!");
        }
      });
    }
  }
  
  render() {
    return (
      <div>
        <ComponentA />
        <FacebookLogin
          cssClass="btn facebook_login"
          textButton='Facebook'
          //icon='fa-facebook'
          size='small'
          appId="1649202018438136"
          autoLoad={false}
          fields="name,email,picture.width(200).height(200)"
          scope="public_profile,user_friends,user_actions.books"
          callback={this.responseFacebook}
        />
        <GoogleLogin
          clientId="635609055414-4hiip9vtf8nij2m7h7irf26o9c6j1hav.apps.googleusercontent.com"
          buttonText="Facebook"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
        <button onClick={this.notify}>Notify Me</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerA);
