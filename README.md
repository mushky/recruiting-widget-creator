### Feature Request

1. Fork the main branch to your github account
2. Create a new branch
3. Add validation to the `Widget` class so that the name must be present and unique, and the purpose must be present if the widget is active.
4. Add error messages to the form so that if the record fails validation, the user is shown what to fix, and user values that the user entered are not lost.
5. Create a pull request against your forked main (in your repo, not beezwax's).

### Notes:

I realize that there is middleware (express-validator) that can do a lot of the heavy lifting for form validation in express, however, I chose not to use any middleware for 2 reasons:

1. I wasn't 100% sure if we could add any new npm packages to the project.
2. The validations are simple and may not require adding a whole package to the project.


### PR

Responded to first batch of comments.