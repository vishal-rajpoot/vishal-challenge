# Welcome to Maitretech Solution Coding Challenge:

> Best of Luck for Challenge!!!
> Challenge Compltion Time : 9 hours

## Overview:

To complete this codding challenge, you will need to write a simple React web app using create-react-app (CRA), and provide us buildable the source code files along with the build files. The project should be built and installed without any errors. Please read completely, this README before proceeding.

The purpose of this challenge is to assess your **skills and approach to composing a simple react based web app** given a set of screens and an API feed. We will also review the **written JSX, CSS and JS** output along with the final output.

This challenge is expected to be completed in 9 hours.

## The Challenge:

It's pretty simple. Using the provided screens in the screens directory as a reference, you'll need to build a set of React components to render the app. You'll also need to fetch the data in JSON format and save the data by invoking the API. The images which you may require is already available in the assets directory. 

Although this is a basic exercise, we'll be looking for **simple, well-designed, performant, and error free code** in the submission.

Please update this `README` with any tests or other documentation you created as part of your solution.

Also, add the following info to your `README`:

##################   I have completed the challenge ####################################

## to run this appliaction 

`run npm install`

then

`npm start `

- How did you decide on the technical and architectural choices used as part of your solution?

--- it took long time to deal with using Fetch api, then i drop that idea and get data using import , the after i got stuck in Context api part, where i had write the whole code but still it was not working then i use props and states.

- Are there any improvements you could make to your submission?

--- yes i could make different different components so that i can use those components seperately whenever we want

- What would you do differently if you were allocated more time?

--- Then I will make it more optimize using fetch method and get data from server also make user friendly with proper color combinations 

## Details:

You will need to build the following 4 pages with React:
  - **Sign Up** page
  - **Login** page
  - **GoTo Menu** page
  - **Food Items** page
  - **Order Summary** page
  - **Thank You** page

The deployable solution should be built in a folder named **`dist`** with an entry point file of **`index.html`**.

Please create components for each part of the page (eg. header, content, footer, etc).
Assets are provided in the `assets` folder. Data is provided in `data` folder in the form of JSON file.

The pages should also be responsive and viewable on mobile and tablet devices with decent look and feel..

You can assume that you need to support modern ES6 compatable browsers which have features such as `fetch` or `flexbox` etc. 

### "Sign Up" page
Create a Sign Up Page which allows the user to Sign Up (Register) into the Application. This credentials will be used for loggin into the application. The fields for signing up is Full Name, email and password. The password should be minimum 6 Characters long. The email should be in proper format. The Fields should be properly validated. 

### "Login" page
Create a Login Page which allows the user to Login into the Application. If user tries to access **GoTo Menu**, **Food Items**, **Order Summary** or **Thank You** page without entering valid credentials, he should be redirected to the **Login Page** page. You can use `credentials.json` file for valid credentials and use setInterval to simulate the API or you can use any dummy API for this purpose. The login credentials should be stroed in localStorage. It must be validated on the start of each page.

### "GoTo Menu" Page

Refer to the [screens/Screen1.png](./screens/Screen1.png) screen.

This will be your `index.html` screen.

You will need to display welcome message with a button to go the next Page, which link to the "Food Items" page.

### "Food Items" page

Refer to the [screens/Screen2.png](./screens/Screen2.png) for Food Items Page.

For this page you will need to fetch data from URI `./data/feeds.json` using fetch API. THe data will be in JSON format containing name, price and image of the food items. Please pass 'Content-Type': 'application/json' and 'Accept': 'application/json' as headers :

Then do the follwing:

- Display the name and the price of `entries` as shown in the [screens/Screen2.png](./screens/Screen2.png)
- Where the `+` of the entry is clicked, the Total and Cost should be updated as shown in [screens/Screen2.1.png](./screens/Screen2.1.png).
- When `Cart` icon is clicked, [screens/Screen2.2.png](./screens/Screen2.2.png) is shown, where order can be manupulated by clicking `+` and `-` buttons. IT should also reflect the current quantity. If the item is less than `1`, the item should be removed from the list.
- When the `SAVE AND CHECKOUT` is clicked, the user should be redirected to the the screen [screens/Screen3.png](./screens/Screen3.png)

You will also need to handle the loading and error states of fetching the JSON feeds:

**NOTE** You can use any State Management Library or Context API to accoplish it. 

## Getting Started:

- Please clone this repo.
- Create CRA project within this repo.
- Move assets to your `public` folder for your CRA.
- Please copy `feeds.json` where you can access it from the source.
- Start coding yoru app.

## Code Submission process:

Please only submit error free working code, otherwise you will be disqualified from the coding challenge. In order to submit your working code, please do the following:

- Update this `README` with necessary information.
- Create a new git branch in the format `<your-name>_challenge` for example if your name is `John`, the branch should be `john_challenge`.
- Push the branch for review.

## FAQ:

### What language, framework, build tool... should I use?

You must use React to built using [React](https://reactjs.org/).

We perfer you use Context API for State management. Apart from state management, you can either use redux, redux-toolkit or reoil. Please don't use any other state management library.

Youare are not allowed to use any third party CSS frameworks other then `Tailwind CSS`. If you are not confortable in using `TailwindCSS`, please use plain CSS. However, you can use `scss/sass` if you are aware. 

We also prefer the use of minimal dependencies.

## Other Notes

Please send through any other code or projects that you're proud of and would like to share with us.

Any feedback on the coding challenge once you're done is also appreciated!
