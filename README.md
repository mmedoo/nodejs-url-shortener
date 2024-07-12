# URL Shortener

A simple and efficient URL shortener application that allows users to shorten long URLs and easily use them.
## Table of Contents

- [Introduction](#introduction)
- [Environment](#environment)
- [Run Locally](#runlocally)
- [Usage](#usage)
- [Configuration (optional)](#configuration (optional))
## Introduction

This URL shortener is a web application that allows users to convert long URLs into short, manageable links. It also provides analytics for tracking the number of clicks on each shortened URL.

## Environment

- **Server**: [Node.js](https://nodejs.org/), [Exress.js](https://www.npmjs.com/package/express)
- **Database**: Sqlite3
- **View Engine**: [EJS](https://www.npmjs.com/package/ejs).
- **ORM**: [Sequelize.js](https://www.npmjs.com/package/sequelize)

## Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/)

No need to install sqlite on your local environment, sqlite npm package will do the job.

### Steps
- Clone the project

```bash
  git clone https://github.com/mmedoo/url-shortener.git
```

- Go to the project directory

```bash
  cd url-shortener
```

- Install dependencies

```bash
  npm install
```

- Start the server

```bash
  npm start
```
## Usage

Once the app run, output will look like this:

```bash
Server is listening on http://localhost:1234
```

1. Open your browser and go to [`http://localhost:1234`](http://localhost:1234).
2. Enter the long URL you want to shorten.
3. Click the "Shorten" button to get the short URL.
4. Click on displayed URL to copy.
5. Paste it in your browser.

Congrats, you're redirected to your super long URL.

## Configuration (optional)

The application can be configured using environment variables. Here are the available options:

- `PORT`: The port on which the application will run (default: 1234).
- `FORCE_DROP`: Boolean value to determine wether the `links` database table is forcably dropped everytime the app initializes connection with the database (this determines if the data will be saved after closing the app) (default: false).

### Here is how to create .env file to change these settings:

### Linux

- Create the .env File:
Open the terminal in app folder and run command:
```bash
touch .env
```
- Open the .env File for Editing:
You can use any text editor of your choice, here is a way through the terminal:
```bash
nano .env
```
- Add environment variables and set them as you like:
```md
PORT=1234
FORCE_DROP=false
```

### Windows

- Create the .env File:
Open the terminal in app folder and run command:
```bash
echo.>.env
```
- Open the .env File for Editing:
You can use notepad or any text editro to open and edit the .env file.
```bash
notepad .env
```
- Add environment variables and set them as you like:
```md
PORT=1234
FORCE_DROP=false
```

