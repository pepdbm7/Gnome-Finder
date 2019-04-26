# Gnome Finder

## Introduction

This App is made for the Altran Front End Developer technical test. It is a searcher that allows you to find Gnomes information in a smooth and pretty styled app. Some gnomes have friends (which are links) and clicking on one friend the information shown is from this friend.

The data is retrieved by using javascript fetch method and the info is all from a unique route, but I created a couple extra queries with the js 'find' method.


### How to run the app

Install the dependecies:
- `npm i`

Open the app:

- open index.html in the browser


### Running the tests

- `npm t`


# Technical Description

It is separated by layers (Logic, View and Main), the logic is accessible for view and main, and the view is accessible only to main, while main is where all the app starts running.  

I preferred to make it with Vanilla JS instead of using the framework React as I think to know Vanilla JS is the basics to use the frameworks, and it is more challenging to do it without a framework help.


## Used Technologies 

ES6, CSS, Babel and Jest.