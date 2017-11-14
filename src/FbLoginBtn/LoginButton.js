/*global FB*/
import React, { Component } from 'react';

const configs = {
	'fb-login-api-key': 1654955204555606,
	'fb-login-version': 'v2.11',
	'fb-login-sdk-path': '/facebook-login/sdk.js'
}

class LoginButton extends Component {
	constructor(props) {
		super(props)
		window.fbAsyncInit = function() {
	      FB.init({
	        appId      : configs['fb-login-api-key'],
	        cookie     : true,
	        xfbml      : true,
	        version    : configs['fb-login-version']
	      });
	      // FB.AppEvents.logPageView();
	      FB.getLoginStatus(function(response) {
	        if (response.status === 'connected') {
	        	console.log('user connected');
	            // FB.api('/me?fields=id,name,email,permissions, picture', function(response) {
	            //     console.log('Successful login for: ' + response.name);
	            //     window.alert(response.name + ": " + response.email)
	            // });
	        } else {
	        	console.log('user unconnected');
	            // window.alert("login fail");
	        }
	    });	

	  	var finished_rendering = function() {
			console.log("finished rendering plugins");
			var spinner = document.getElementById("spinner");
			spinner.removeAttribute("style");
			spinner.removeChild(spinner.childNodes[0]);
		}
		FB.Event.subscribe('xfbml.render', finished_rendering);
	    };

	    // Load the SDK asynchronously
	    (function(d, s, id) {
	      var js, fjs = d.getElementsByTagName(s)[0];
	      if (d.getElementById(id)) return;
	      js = d.createElement(s); js.id = id;
	      js.src = configs['fb-login-sdk-path'];
	      fjs.parentNode.insertBefore(js, fjs);
	    }(document, 'script', 'facebook-jssdk'));
	}

	render() {
		var style = {
			'background': '#4267b2',
	        'borderRadius': '10px',
	        'color': 'white',
	        'height': '40px',
	        'textAlign': 'center',
	        'width': '250px'
		}
		return(
			<div id="spinner"
			    style={style}>
			    Loading
			    <div
				    className="fb-login-button"
				    data-width={this.props.width}
				    data-max-rows="1"
				    data-size="large"
				    data-button-type="login_with"
				    data-show-faces="false"
				    data-auto-logout-link="false"
				    data-use-continue-as="true"
				    data-scope={this.props.dataScope}
				    ></div>
			</div>
		);
	}
}

export default LoginButton;