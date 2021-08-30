var elForm = document.querySelector('.js-form');
var elFormName = document.querySelector('.js-form-name');
var elFormReletionship = document.querySelector('.js-form-reletionship');
var elFormNumber = document.querySelector('.js-form-number');
var elContactsList = document.querySelector('.js-contact-list');
var contactsArray = []
var id = 0;

if (elForm) {
  elForm.addEventListener('submit', function (evt){
    evt.preventDefault();

    var contactItem = document.createElement('li');
    var contactName = document.createElement('h3');
    var contactRelation = document.createElement('p');
    var contactNumber = document.createElement('a');
    var contact = {
      id : null,
      name : null,
      relation : null,
      phone : null
    }

    contactName.textContent = elFormName.value;
    contactRelation.textContent = elFormReletionship.value;
    contactNumber.textContent = elFormNumber.value;

    contact.id = id;
    contact.name = elFormName.value;
    contact.relation = elFormReletionship.value;
    contact.phone = elFormNumber.value;

    elFormName.value = '';
    elFormReletionship.value = '';
    elFormNumber.value = '';

    contactItem.appendChild(contactName);
    contactItem.appendChild(contactRelation);
    contactItem.appendChild(contactNumber);

    contactItem.classList.add('bg-white', 'w-100', 'p-3', 'rounded', 'border', 'mb-4');
    contactNumber.classList.add('text-decoration-none');
    contactNumber.href="tel:" + elFormNumber.value

    elContactsList.appendChild(contactItem);
    contactsArray.push(contact);


  });
}