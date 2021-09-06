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



function addContact() {
  contacts.push({
    name: elNewContactNameInput.value.trim(),
    relationship: elNewContactRelationshipInput.value.trim(),
    phone: elNewContactPhoneInput.value.trim()
  });
}


function showContacts() {
  elContactsList.innerHTML = '';
  var elContactsFragment = document.createDocumentFragment();

  for (var contact of contacts) {
    var elNewLi = document.createElement('li');
    elNewLi.classList.add('list-group-item', 'p-3');

    var elNewHeading = document.createElement('h3');
    elNewHeading.classList.add('h5');
    elNewHeading.textContent = contact.name;
    elNewLi.appendChild(elNewHeading);

    var elNewRelDiv = document.createElement('div');
    elNewRelDiv.classList.add('mb-2');
    elNewRelDiv.textContent = contact.relationship;
    elNewLi.appendChild(elNewRelDiv);

    var elNewPhoneLink = document.createElement('a');
    elNewPhoneLink.classList.add('btn', 'btn-outline-success', 'btn-sm');
    elNewPhoneLink.href = contact.phone;
    elNewPhoneLink.textContent = contact.phone;
    elNewLi.appendChild(elNewPhoneLink);
    elContactsFragment.appendChild(elNewLi);
    elContactsList.appendChild(elContactsFragment);
  }
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
    }
    addContact();
    // Add contact to contacts array


    // Reset inputs
    elNewContactNameInput.value = '';
    elNewContactRelationshipInput.value = '';
    elNewContactPhoneInput.value = '';

    showContacts();
    // addContact funksiyasi yordamida yangi kontaktni contactsga qo'shiladi
    // showContacts funksiyasi yordamida HTMLda kontaktlarni ko'rsatamiz

  });
}
// Form submitda amal bajariladi
