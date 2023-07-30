This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##Run Proxy to avoid CORS error during local development 
Example with `local-cors-proxy` package: 
`npm i -g local-cors-proxy`

Start proxy for the specific domain if it’s giving you issues:
`lcp --proxyUrl http://164.68.123.40:8080/public-api`

add to .env file  
`REACT_APP_PUBLIC_API_PATH=http://localhost:8010/proxy`

.env file have to be created at the root of the project



#Deploy
build docker image

`docker-compose build`

Load image to server: 

`docker save frontend_techaim-frontend | bzip2 | pv |ssh root@164.68.123.40 docker load`

login to server

`ssh root@164.68.123.40`


stop previous container if needed(`docker stop #container_id`)

run container

`docker run --rm -d -it  -p 80:80 frontend_techaim-frontend`
