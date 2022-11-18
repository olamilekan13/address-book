// Business Logic for AddressBook ---------
function AddressBook() {
    this.contacts = {};
    this.currentId = 0;
  }
  
  AddressBook.prototype.addContact = function(contact) {
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
  };
  
  AddressBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  };
  
  AddressBook.prototype.findContact = function(id) {
    if (this.contacts[id] != undefined) {
      return this.contacts[id];
    }
    return false;
  };
  
  AddressBook.prototype.deleteContact = function(id) {
    if (this.contacts[id] === undefined) {
      return false;
    }
    delete this.contacts[id];
    return true;
  };
  
  // Business Logic for Contacts ---------
  function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
  
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  };


let firstName = "Mori";
wife = {...wife,firstName};

function update(arg){
    

}

// let skillet = {
//     person: {
//         name    : {
//             first: '',
//             last : ''
//         },
//         age     : {
//             current: ''
//         },
//         birthday: {
//             day  : '',
//             month: '',
//             year : ''
//         }
//     }
// };

// let update = {
//     person: {
//         name: {
//             first: 'blah',
//             last : 'ha'
//         }
//     }
// };

// let result = Object.assign(skillet.person, update.person);

// console.log(result);