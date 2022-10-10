const Employee=require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, phone){
    super( name, id, email);
     this.phone = phone;
    this.role = 'Manager';
};
getRole(){
    return this.role;
};
};

module.exports = Manager;