# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links
- Live Site URL: [https://javierb256.github.io/Time-Management-Dashboard/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library


### What I learned

One thing that I learned from working on this project is to better plan out the state flow that my react components will follow. At one point I wanted to filter the results that the user would see but since the component was a child component
that wasn't related to the data that was being displayed, there wasn't any way to easily change the state. This is why I had to restructure the react component hierarchy so that the filter and the data displayed would share the same ancestor
and be able to change the states easily.



### Continued development

For future developments I want to focus more on the planning for which I would oultine better the structure of my project so that I can pass the proper states to child components.
I would also try a mobile first development strategy first to see if I would better understand the website structure by doing so.


### Useful resources

- [freeCodeCamp](https://www.freecodecamp.org/news/what-is-lifting-state-up-in-react/) - This article helped me better understand react state structure and how to lift states upward to pass in changes within child components.


## Author

- Website - [Javier Barrera](https://github.com/javierb256)


