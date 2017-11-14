// function checkLoginState() {
//     FB.login(function(response) {
//         if (response.status === 'connected') {
//             FB.api('/me?fields=id,name,email,permissions, picture', function(response) {
//                 console.log('Successful login for: ' + response.name);
//                 window.alert(response.name + ": " + response.email)
//             });
//         } else {
//             window.alert("FUCK");
//         }
//     }, {scope: 'email, public_profile'});
// }
//
// window.fbAsyncInit = function() {
//     FB.init({
//         appId      : '1983487948335597',
//         cookie     : true,  // enable cookies to allow the server to access
//                             // the session
//         xfbml      : true,  // parse social plugins on this page
//         version    : 'v2.8' // use graph api version 2.8
//     });
//     checkLoginState();
// };
//
// // Load the SDK asynchronously
// (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = "/resources/facebook-login/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function () {
    FB.init({
        appId: '1983487948335597',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.11'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "/resources/facebook-login/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function onFacebookLoginClicked() {
    FB.login(function(response) {
        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function(response) {
                console.log('Good to see you, ' + response.name + '.');
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    });
}