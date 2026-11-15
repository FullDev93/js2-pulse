# Pulse

A simple social media front-end built with HTML, CSS and vanilla JavaScript
for the JavaScript 2 course assignment at Noroff. It uses the Noroff API v2.

**Live site:** https://fulldev93.github.io/js2-pulse/

## Features

- Register and log in with a `@stud.noroff.no` email
- See all posts in the feed and search them
- Open a single post
- Create, edit and delete your own posts
- View your own profile and other users' profiles with their posts
- Follow and unfollow other users

Comment and reaction counts are shown on each post. Commenting and reacting
are group-work features in the brief and are not part of this individual project.

## Built with

- HTML and CSS
- JavaScript with ES6 modules (no frameworks)
- [Noroff API v2](https://docs.noroff.dev/docs/v2)

## How to run it locally

1. Clone the repository:

   ```bash
   git clone https://github.com/FullDev93/js2-pulse.git
   cd js2-pulse
   ```

2. Start a local server. ES6 modules do not work when you open the files directly.
   - In VS Code: right-click `index.html` and choose **Open with Live Server**, or
   - In a terminal: run `npx serve .` and open the link it shows.

3. Register or log in with your `@stud.noroff.no` account.

## Formatting

```bash
npm install
npm run format
```
