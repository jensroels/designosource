/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
  var webview = Titanium.UI.createWebView({url:'http://www.designosource.be/avatar'
  ,disableBounce:true,
  navBarHidden:true,
  tabBarHidden:true});
    var window = Titanium.UI.createWindow({
    	tabBarHidden:true,
	navBarHidden: true
    });
    window.add(webview);
    window.open({modal:true});
