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

- **HTML pages** - Two HTML page that represent the ability to login and vote.
- **Links** - The login page automatically links to the drinks selection page. This page showing all soda addition options.
- **Text** - Each of the soda options item is represented by a description.
- **Images** - Use of the company logo for branding
- **Login** - Input box and submit button for login.
- **Database** - The drink options represent data pulled from the database.
- **WebSocket** - Able to see realtime updates of users favorite drink order.

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
