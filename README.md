# drkatz-armchair
A Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.

##Installation

After downloading, you'll want to install the Inquirer npm package. The Output directory contains an example of a rendered html file, as well as a local file of css styling. When you run the program yourself, it will overwrite the existing html file.

You can also check out the example site here: https://drive.google.com/file/d/14BYnjwHFutwgRpNMnlLSEpF_AiEOY2iK/view?usp=sharing.

##Usage

Run `node app.js` in Git Bash or Terminal and answer the prompts. The application will generate the file "output/team.html".
For each employee, you'll be required to provide name, email, an ID number, and one of three roles: Manager, Engineer or Intern. You'll also be required to input information specific to each role. When you're finished adding employees to the team, the application will render the `"output/team.html"` file.

##License

Released under the MIT license.

##Author

Kat Yeary

##Tests

Tests are available for each of the template modules (Employee, Engineer, Intern, and Manager). Run `npm run tests` to execute.

