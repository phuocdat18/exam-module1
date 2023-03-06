class Staff {
    constructor(fullname, email) {
        this.fullname = fullname;
        this.email = email
    }
    setFullname = function (fullname) {
        this.fullname = fullname;
    }
    getFullname = function() {
        return this.fullname;
    }
    setEmail = function(email) {
        this.email = email;
    }
    getEmail = function() {
        return this.email;
    }
    toString = function() {
        return console.log(` Ông ${this.getFullname()} có email là ${this.getEmail()}`);
    }
}
let staff = new Staff("David", "david@gmail.com")
staff.setFullname("David Do");
staff.setEmail("david.do@gmail.com");
staff.toString();
let staffs = [
    new Staff("Tony", "tony@gmail.com"),
    new Staff("Gary", "gary@gmail.com"),
    new Staff("Jonhson", "johnson@gmail.com")
]
function showStaff() {
    for(let i =0; i < staffs.length; i++) {
        staffs[i].toString();
    }
}
showStaff();
// console.log(staffs[1].fullname);