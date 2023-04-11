# IE3100R SDP Group 9 - Financed Emissions Estimation Research

## Interactive Web Poster

### About the poster
This poster was built on react.js with six different pages conneted though a react boostrap navigation bar. 

The six pages are
1. Home - Homepage of the web poster
2. Motivations - Motivations of our project
3. Methodology - Preprocessing, feature selection, models and cross validation
4. Results - Model performance and recommendations for SCB
5. Emissions Calculator - A built-in multiple linear regression model based on our recommended features to estimate the emissions of a given company
6. About - An introduction to our project group, with our thoughts on the project and ESG as a whole

## Launching the poster

To launch the poster, load the project into a suitable environment for JS and JSX (eg. vscode) and ensure you have node.js and react.js installed:
````bash
npm install -g npm
npm i react
````
Then, start the project: 
```bash
npm start
```
The poster should launch on your internet browser, running locally. It should display the home page by default, but if not, click on the 'Home' or the NUS/SCB logo on the left to access the home page. 

As the project utilises packages such as flexbox, boostrap etc, there may be errors if you do not have these packages installed. Kindly install the packages using the following code snippets and rerun the project
````bash
npm install react-flexbox --save
npm i react-bootstrap
````
Should the elements in the webapp not fit your screen, do zoom in and out to adjust the fit appropriately.
In the future, should this page be launched on the internet, the link will be updated here. 
