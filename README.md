# Sprint Challenge: Authentication - Dad Jokes

## Description

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are locked out.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment, please work on it alone. It is an opportunity to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

If the instructions are not clear, please seek support from your TL and Instructor on Slack.

The Minimum Viable Product must be completed in three hours.

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add your _Team Lead_ as collaborator on Github.
- [x] Clone your forked version of the Repository.
- [x] Create a new Branch on the clone: git checkout -b `firstName-lastName`.
- [x] Implement the project on this Branch, committing changes regularly.
- [x] Push commits: git push origin `firstName-lastName`.

Follow these steps for completing your project.

- [x] Submit a Pull-Request to merge `firstName-lastName` branch into `master` on your fork. **Please don't make Pull Requests against Lambda's repository**.
- [x] Please don't merge your own pull request.
- [x] Add your _Team Lead_ as a Reviewer on the Pull-request
- [x] Your _Team Lead_ will count the challenge as done by merging the branch into _master_.

## Commits

Commit your code regularly and use descriptive messages. This helps both you (in case you ever need to return to old code) and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [x] What is the purpose of using _sessions_?

HTTP is stateless by default, thus sessions and cookies are used as a way of identifying users across multiple requests to the server.

- [x] What does bcrypt do to help us store passwords in a secure manner.

Bcrypt is a library used to hash strings. It uses the blowfish algorithm internally to perform this hashing operation.

- [x] What does bcrypt do to slow down attackers?

A random salt is generated whenever the hashing operation is performed this ensures that hashes are secure, and it also defeats the use of a rainbow table. It is also a slow algorithm as the hashing operation is performed multiple times, this greatly slows down brute-force attacks.

- [x] What are the three parts of the JSON Web Token?

- Header ⇒ Typically contains the algorithm used
- Payload ⇒ Contains both private and public claims
- Signature ⇒ A hash of the header + payload + a secret key

## Minimum Viable Product

Implement an User Authentication System. Hash user's passwords before saving them to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

- [x] Implement the `register` and `login` functionality inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- [x] Implement the `authenticate` middleware inside `/auth/authenticate-middleware.js`.
- [x] Write a **minimum o 2 tests** per API endpoint. Write more tests if you have time.

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

## Stretch Problem

Build a front end to show the jokes.

- [ ] Add a React client that connects to the API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- [ ] Once you have the functionality down, style it!
