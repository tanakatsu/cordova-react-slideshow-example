## Cordova React BGM slideshow sample

### How to run

1. Edit config.xml depending on your configuration
	- Application name: `<name>YourAppName</name>`
	- Application identifier: `<widget id="YourAppIdentifier" ...>`

1. Install dependencies

	```
   $ cd react_app
   $ yarn install 
	```
	
1. Place your favorite pictures into `react_app/public/images/slick/`

    Then, create pictures.json
	```
   $ node create_pictures_json.js 
	```
	
1. Publish React app

	```
   $ npm run build
	```
	
1. Add platforms for mobile 

	```
   $ cd ../
   $ cordova platform add ios --save
   $ cordova platform add android --save
   ```
   
1. Build Cordova app

	```
	$ cordova build [ios|android]
	```
	
1. Run Cordova app

	```
   $ cordova emulate [ios|android]
	```
