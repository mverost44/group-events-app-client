## READ ME
## List of Technologies Used
-javascript -HTML5 -Atom -SCSS -Bootstrap -jQuery/AJAX -GitHub -Ubuntu Bash -web pack (for grunt serve)

## Description of SetSpace
SetSpace is a full stack web application that connects users to public groups and events.  A User has the ability to: -Create and edit a group
-Create and delete events within their groups
-View all public groups
-Join a public group
-View groups that they are a member of
-View groups that they created
-View events posted in public groups
-Join events posted in a public group
-View users that are attending the same event

## Description of SetSpace Client
The SetSpace Client is a front end application created using Bootstrap, Handlebars, JavaScript, jQuery, and AJAX. It functions as a user interface; sending data and requests to an API and displaying the subsequent response in a user friendly manner.  A user can create and view groups using the buttons found on the left side nav.  Other functionality is presented in an appropriate order using Handlebars.  For example: A user can view their options for a group they own only after clicking 'Groups You Manage'.

Other features include a settings dropwdown for account management, and a responsive design that enables usage on mobile devices and various window sizes.

## Planning && Process
My first step towards tackling the SetSpace client was generating a detailed plan of what my app should do, how an API would look, and how the client would interact with the API. Once the API was functional, I added a basic layout to the client and began taking each user action one step at a time.  As the functionality grew, I was able to allocate more time to style and responsiveness.  I found that it is important to test each new feature as you create it and frequently check up on older features to ensure that no new bugs have been introduced.

## Future Iterations
In future versions of this app I want to incorporate mailers, allow users to connect as 'friends', and introduce private groups.

## Link to wireframe

 -Wireframe https://imgur.com/SkWjLUV

## User Stories:
1. As an event planner I want to be able to post an event.
2. As a member I want to view all of my groups events.
3. As a member I want to view all of the events I will be attending.

## Link to API Repo and Heroku App
Repo: https://github.com/mverost44/group-events-app-api

API: https://group-events-app.herokuapp.com/
