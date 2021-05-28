// init varables;
var sideNavStatus = screen.width < 500 ? true : false;
var contactId = null;
var tableRowIndex = null;
var modal = null;
var table = null;
var dataNull = null;
var formData = null;
var dataCount = 0;
var data = [
  {
    id: 0,
    name: "albin 0",
    email: "albin@email.com",
    phone: "9999999999",
  },
  {
    id: 1,
    name: "albin 1",
    email: "albin@email.com",
    phone: "9999999999",
  },
  {
    id: 2,
    name: "albin 2",
    email: "albin@email.com",
    phone: "9999999999",
  },
  {
    id: 3,
    name: "albin 3",
    email: "albin@email.com",
    phone: "9999999999",
  },
  {
    id: 4,
    name: "albin 4",
    email: "albin@email.com",
    phone: "9999999999",
  },
  {
    id: 5,
    name: "albin 5",
    email: "albin@email.com",
    phone: "9999999999",
  },
  {
    id: 6,
    name: "albin 6",
    email: "albin@email.com",
    phone: "9999999999",
  },
  {
    id: 7,
    name: "albin 7",
    email: "albin@email.com",
    phone: "9999999999",
  },
  {
    id: 8,
    name: "albin 8",
    email: "albin@email.com",
    phone: "9999999999",
  },
  {
    id: 9,
    name: "albin 9",
    email: "albin@email.com",
    phone: "9999999999",
  },
  {
    id: 10,
    name: "albin 10",
    email: "albin@email.com",
    phone: "9999999999",
  },
  {
    id: 11,
    name: "albin 11",
    email:
      "albinnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn@email.com",
    phone: "9999999999",
  },
  {
    id: 12,
    name: "albin 12",
    email: "albin@email.com",
    phone: "9999999999",
  },
  {
    id: 13,
    name: "albin 13",
    email: "albin@email.com",
    phone: "9999999999",
  },
];
function setData() {
  if (data.length > 0) {
    var counter = 0;
    dataCount = 0;
    for (var contact of data) {
      var row = table.insertRow(counter);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      cell1.innerHTML = contact.name;
      cell2.innerHTML = contact.email;
      cell3.innerHTML = contact.phone;
      cell4.innerHTML = `<button class="del-icon" title="delete" onclick="deleteContact(this, ${contact.id})"><i class='fa fa-trash-o'></i></button>&nbsp;
      <button class="edt-icon" onclick="editContact(this, ${contact.id})" title="edit"><i class="fa fa-edit"></i></button>`;
      cell1.setAttribute("title", contact.name);
      cell2.setAttribute("title", contact.email);
      cell3.setAttribute("title", contact.phone);
      dataCount++;
      counter++;
    }
  } else {
    dataEmptyCase();
  }
}
function addContact() {
  openModalBox("add");
  fname.value = "";
  email.value = "";
  phone.value = "";
}
function editContact(index, id) {
  tableRowIndex = index;
  openModalBox("edit");
  getFormData();
  for (var contact of data) {
    if (id === contact.id) {
      contactId = contact.id;
      formData.fname.value = contact.name;
      formData.email.value = contact.email;
      formData.phone.value = contact.phone;
    }
  }
  formData = null;
}
function insertContact() {
  getFormData();
  if(validation()) {
  data.push({
    id: dataCount,
    name: formData.fname.value,
    email: formData.email.value,
    phone: formData.phone.value,
  });
  formData = null;
  $("#contact-list-id").empty();
  setData();
  closeModalBox();   
  }
}
function updateContact() {
  getFormData();
  if(validation()) {
if (contactId !== null) {
    for (var contact of data) {
      if (contactId === contact.id) {
        contact.name = formData.fname.value;
        contact.email = formData.email.value;
        contact.phone = formData.phone.value;
      }
    }
    table.innerHTML = "";
    setData();
    contactId = null;
    tableRowIndex = null;
    formData = null;
    closeModalBox();
  }  
  }
}
function deleteContact(rowNum, index) {
  if (confirm("Are you sure you want to delete this contact?")) {
    for (var [i, contact] of data.entries()) {
      if (index === contact.id) {
        data.splice(i, 1);
      }
    }
    table.deleteRow(rowNum.parentNode.parentNode.rowIndex);
  } else {
    return;
  }
  dataEmptyCase();
}
function validation() {
  console.log("inside validation");
  formData.fname.classList.remove("form-error");
  formData.email.classList.remove("form-error");
  formData.phone.classList.remove("form-error");
  var formError = {};
  getFormData();
  if(!formData.fname.value) {
    formError.name = true;
    formData.fname.classList.add("form-error");
  }

  //not all regular expression with quotes don't work with test()!!

  var mailformat = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
if(!mailformat.test(formData.email.value)) {
  formError.email = true;
  formData.email.classList.add("form-error");
}
var phoneFormat = "^\\d{10}$";
if(!formData.phone.value.match(phoneFormat)) {
  formError.phone = true;
  formData.phone.classList.add("form-error");
}
  return !(Object.keys(formError).length);
}
function getFormData() {
  formData = {
    fname: document.getElementById("fname"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone"),
  };
}
function openModalBox(mode) {
  if (mode === "add") {
    document.getElementById("contact-edit").style.display = "none";
    document.getElementById("contact-add").style.display = "inline-block";
    document.getElementById("contact-update").style.display = "none";
    document.getElementById("contact-save").style.display = "inline-block";
  } else if (mode === "edit") {
    document.getElementById("contact-edit").style.display = "inline-block";
    document.getElementById("contact-add").style.display = "none";
    document.getElementById("contact-update").style.display = "inline-block";
    document.getElementById("contact-save").style.display = "none";
  }
  modal.style.display = "block";
}
function closeModalBox() {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    closeModalBox();
  }
};
function dataEmptyCase() {
  if (table.rows.length === 0) {
    table.style.display = "none";
    dataNull.style.display = "block";
  }
}
function sideNav() {
  sideNavStatus = !sideNavStatus;
  if (sideNavStatus) {
    document.getElementById("mySidenav").style.width = "250px";
    if (screen.width > 500) {
      document.getElementById("containerId").style.marginLeft = "265px";
    }
  } else {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("containerId").style.marginLeft = "15px";
  }
}
function init() {
  modal = document.getElementById("modal-box-add-contact");
  table = document.getElementById("contact-list-id");
  dataNull = document.getElementById("data-null-id");
  sideNav();
  setData();
  dataEmptyCase();
}
