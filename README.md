# lorem-ipsum

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/rfarine/lorem-ipsum)

---

Notes...

- Add ui components
- Pages
  - Login form
  - Dashboard (must be logged in)
    - Displays all lorem ipsum lists you've created
    - Ability to log out
  - List of Lorem Ipsums (do not need to be logged in)
  - Create Lorem Ipsum form (ability to make private/public)
  - Lorem Ipsum display page (maybe need to be logged in)
    - Shareable link
    - If it's your's, it's got an edit button


So...pages folder structure:
pages/
  - login.js
  - dashboard.js -- user's dashboard
  - create.js -- form to create
  - edit.js -- form to edit existing
  - show.js -- lorem ipsum
  - all.js -- list of lorem ipsum's
