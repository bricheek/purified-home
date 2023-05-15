
const uuid = require('uuid');
class Submission {
    firstName;
    lastName;
    emailAddress;
    id;

    constructor(firstName, lastName, emailAddress) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.id = uuid.v4(this.emailAddress)
}
}
module.exports = Submission