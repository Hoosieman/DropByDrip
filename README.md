# # DROPBYDRIP

## Description deliverable

### Elevator pitch

Have you ever been craving your favorite soda on a rough day but just do not feel like getting up to go get it? Well do we have a solution for you. introducing: DropbyDrip, the mobile soda machine that will come to wherever you are. Each and every one of our speciality soda machines is hand crafted and built to mantain cool carbonation to refresh your day. Wherever you are, we will come to you and make your fresh dream soda right before your eyes.

### Design

![Login](https://github.com/Hoosieman/DropByDrip/assets/141951470/84b88a62-4790-4ba1-91b0-72ab5ec7861d)



Here is a sequence diagram that shows in what order the user will select their drink options

![Design flow](https://github.com/Hoosieman/DropByDrip/assets/141951470/121a10fd-4a6c-4ad6-ba35-76a9a1ae79cd)

### Key features

- login with dropbydrip account over HTTPS
- Ability to select and save previous drink orders
- Display of choices
- Ability to favorite drinks
- Ability to order multiple items
- Ability to select fast deliver
- Results are persistently stored
- Ability for user to submit ratings

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Two HTML pages. One for login and one for drink selection.
- **CSS** - Application styling that looks good on different devices, use of company logo to show familiarity.
- **JavaScript** - Provides login,drink choices, applying drink changes, show last purchased drink, backend endpoint calls.
- **Service** - Backend service with endpoints for:
  - login
  - retrieving previous drinks
  - inputing options
  - drink suggestions
- **DB** - Store users, drink choices, and orders in database.
- **Login** - Register and login users. Credentials securely stored in database. no orders without account
- **WebSocket** - Ability to shout out your favorite drink to other users
- **React** - Application ported to use the React web framework.

## HTML deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML pages** - Four HTML page that represent the ability to login and vote.
- **Links** - The login page automatically links to the drinks selection page. This page showing all soda addition options.
- **Text** - Each of the soda options item is represented by a text button, about page describing company.
- **Images** - Use of the company logo for branding and each html header.
- **Login** - Input box and submit button for login.
- **Database** - The drink/Addon options represent data pulled from the database. Also the Today Favorite drink will be pulled from database
- **WebSocket** - Able to see realtime updates of users order under "others orders" on the about page

## CSS deliverable

For this deliverable I properly styled the application into its final appearance.

- **Header, footer, and main content body**
- **Navigation elements** - I dropped the underlines and changed the color for anchor elements.
- **Responsive to window resizing** - My app looks great on all window sizes and devices
- **Application elements** - Used good contrast and whitespace
- **Application text content** - Consistent fonts
- **Application images** - Still don't have images and so no styling here. 😔

## JavaScript deliverable

For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

- **login** - login takes you to the "house favorites" page of sodas
- **database** - stores info about the most ordered drink by users
- **WebSocket** - 
- **application logic** - If a user selects a certain soda, suggested adons for that soda pop up

  ## Start-Up Service Deliverable ##

- **Click Counter**  - For this deliverable I set up a server that tracks the amount of clicks that each drink button is getting, to give the user an idea of popular drinks. This server is started and runs on a different port than the web app. These drink click counters are located on the drink order page directly under where you begin selecting your drink.

- **Most Liked Drink** - I also implemented a service that takes the most clicked drink and places it under "Suggested Drink" in the about.html page, helping users see the best option. This feature is running om the same server as the drink click counter deliverable.

- **Past Drinks** -- I added ability to see a list of your pst clicked drinks at the top of the order.html page. I also added the ability to clear this list at any time by clicking a button.

- **Node/Express** - succesfully set up and implemented.

- **Backend Endpoints** - endpoints storing clicked items/amount of times they have clicked. Also pointing to previous drink clicks list.


## Start-Up DB Deliverable

- **Storing Data** - I was able to set up and connect my web application to mongoDB. I implemented backend javascript to connect to mongoDB and pull data from my web app.

- **User Email & # of clicks** - the data being pulled from my web application into mongoDB includes the users emails that they use to log in, and the data for how many clicks each item (drink, addon, cup, size, etc) is getting, giving me an idea of what would be best to promote.

- **Users past drink list** - past clicks of drink buttoms are stores in a list and shown to the user if wanted, this data is also stored and sorted in mongoDB

- **MongoDB** - successful link and stores data

- **Endpoints** - correctly processing various data, sending it to mongo.


## Start-Up Login Service

- **email stored mongo** - For this deliverable I was able to successfully create a login page.
1. login requires a valid email address
2. Login email is linked and stored in MongoDB

- **restricted if no login** -If the user does not login with a valid email, they are unable to proceed from the login page. Ordering a drink/ accessing the other html pages is only possible after valid email authentication.

- **past drink orders** - past drink order list stored for each user.
