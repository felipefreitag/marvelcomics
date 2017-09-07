# Marvel Story - Code test

Gets a random Iron Man story from the Marvel API and displays its title, description and characters.

[See a running example here.](https://felipefreitag.github.io/marvelcomics)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/download/) and
[Yarn](https://yarnpkg.com/lang/en/docs/install/) installed on your system.

### Installing

Clone this repository

```
$ git clone https://github.com/felipefreitag/marvelcomics.git
```

Go to the project folder

```
$ cd marvelcomics
```

Install modules

```
$ yarn install
```

Run the server

```
$ yarn start
```

Browse ```localhost:3000``` to see the project running.
Click the ```>``` button or reload the page to fetch another story.


## Running the tests

Run yarn test to activate the test watcher.

```
$ yarn test
```
Press ```a``` to run all tests.


## Deployment to Github Pages

-------
### Warning
NEVER add your .env to the repository in a real project. The API keys are left here to simplify the exercise. In a production scenario, ask the user to provide her own API keys.

-------


Create a new repository at your [Github](https://www.github.com) account.

Set the project to your new repository.

```
$ git remote set-url origin https://github.com/<your-username>/<your-repository>
```

Open ```package.json``` and set the homepage attribute:

```
  "homepage": "https://<your-username>.github.io/<your-repository/",
```

Commit and push your changes.
```
$ git add .
$ git commit -m "Sets homepage"
$ git push -u origin master
```

Go to the repository page on Github. Create a new branch called ```gh-pages```. Do not change it, it will be overwritten when you deploy. Keep using your ```master``` branch for editing.

Deploy

```
$ yarn deploy
```

Done! Browse ```https://<your-username>.github.io/<your-repository>/``` to see your page.


## Built With

* [React](http://facebook.github.io/react)

## Authors

* **Felipe Freitag** - [GitHub](https://github.com/felipefreitag)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
