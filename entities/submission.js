// currently not being used
const uuid = require('uuid');
class Submission {
    firstName;
    lastName;
    emailAddress;

    constructor(firstName, lastName, emailAddress) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
}
}
module.exports = Submission