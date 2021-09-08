// Kontaktlarni joylash uchun bo'sh array ochamiz
var contacts = [];


// DOM
var elNewContactForm = document.querySelector('.js-new-contact-form');
var elNewContactNameInput = elNewContactForm.querySelector('.js-new-contact-name-input');
var elNewContactRelationshipInput = elNewContactForm.querySelector('.js-new-contact-relationship-input');
var elNewContactPhoneInput = elNewContactForm.querySelector('.js-new-contact-phone-input');

var elContacts = document.querySelector('.contacts');
var elContactsList = elContacts.querySelector('.contacts__list');
var elWarningPhone = document.querySelector('.js-warning-text');
var elClearContactButton = document.querySelector('.js-clear__button');



function addContact() {
  contacts.push({
    name: elNewContactNameInput.value.trim(),
    relationship: elNewContactRelationshipInput.value.trim(),
    phone: elNewContactPhoneInput.value.trim(),
  });
}


var elContactListItemTemplate = document.querySelector('#contact-list-item-template').content;
function showContacts () {
  elContactsList.innerHTML = '';
  var elContactsFragment = document.createDocumentFragment();

  for (var contact of contacts) {
    var elNewContactsItem = elContactListItemTemplate.cloneNode(true);

    elNewContactsItem.querySelector('.contact__name').textContent = contact.name;
    elNewContactsItem.querySelector('.contact__relationship').textContent = contact.relationship;
    elNewContactsItem.querySelector('.contact__phone-link').textContent = contact.phone;
    elNewContactsItem.querySelector('.contact__phone-link').href = `tel:${contact.phone}`;

    elContactsFragment.appendChild(elNewContactsItem);
  }

  elContactsList.appendChild(elContactsFragment);
}


// Form bo'lsa
if (elNewContactForm) {
  elNewContactForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var phoneIndex = contacts.findIndex(function(contact){
      return contact.phone === elNewContactPhoneInput.value.trim();
    });

    if (phoneIndex > -1){
      elNewContactPhoneInput.classList.add('is-invalid');
      elWarningPhone.classList.remove('d-none');
      return;
    }else {
      elNewContactPhoneInput.classList.remove('is-invalid');
      elWarningPhone.classList.add('d-none');
    }
    addContact();
    // Add contact to contacts array


    // Reset inputs
    elNewContactNameInput.value = '';
    elNewContactRelationshipInput.value = '';
    elNewContactPhoneInput.value = '';

    showContacts();

  });
}

    // showContacts funksiyasi yordamida HTMLda kontaktlarni ko'rsatamiz
    elContactsList.addEventListener('click', (evn) => {
      if (evn.target.matches('.js-clear__button')) {
        contactIndex = contacts.findIndex(contact => evn.target.closest('.contact').dataset.id === contact.phone);
        contacts.splice(contactIndex, 1);
        showContacts();
      }
    });



// Form submitda amal bajariladi
