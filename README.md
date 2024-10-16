# TuringKey - Password Generator
## Description

Turing Key is a password generator that creates random passwords combining letters and numbers. It also allows users to easily copy the generated password to the clipboard.

## Planning

#### Backend:
* Receive password length from frontEnd.
* Generate password:
    * Random letters.
    * Random numbers.
    * Shuffle characters.
* Return password.

#### Frontend:
* Display range input.
* Post request with inputted value.
* Display password.
* Use Clipboard API.

**The Clipboard API** was utilized in the frontend to copy the generated password directly to the clipboard when the user clicks the "Copy" button. By adding this feature, I improved the usability of the application, reducing steps that the users needs to take to copy a password.

## Ways of work
This project is being managed using a Kanban Board on GitHub Projects. The board tracks the progress of tasks in various stages, including:
* **Ready:** Tasks ready to be picked up.
* **In progress:** Tasks actively being worked on.
* **Done:** Tasks that have been completed.


You can find the Kanban Board on GitHub Projects here: [Turing Key GitHub Repository](https://github.com/users/carolinnemelo/projects/3/views/1)