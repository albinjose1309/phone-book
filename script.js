// init varables;
var sideNavStatus = screen.width < 500 ? true: false;
var contactList = false;
var contactId = null;
var tableRowIndex = null;
var modal = null;
var table = null;
var dataNull = null;
var formData = null;
var data = [];
function setData() {
  if(data.length > 0) {
    for(var contact of data) {
      var row = table.insertRow(contact.id);
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
    } 
  } else {
    table.style.display = "none";
    dataNull.style.display = "";    
  }
}
function addContact() {
  openModalBox("add");
}
function editContact(index, id) {
  tableRowIndex = index;
  openModalBox("edit");
  getFormData();
  for(var contact of data) {
    if(id === contact.id) {
      contactId = contact.id;
      formData.fname.value = contact.name;
      formData.email.value = contact.email;
      formData.phone.value = contact.phone;
    }
  } 
  formData = null;
}
function updateContact() { 
  getFormData();
  if(contactId !== null) {
    for(var contact of data) {
      if(contactId === contact.id) {
        contact.name = formData.fname.value;
        contact.email = formData.email.value;
        contact.phone = formData.phone.value;
      }
    }
    tableRowIndex.parentNode.parentNode.cells[0].innerHTML = formData.fname.value;
    tableRowIndex.parentNode.parentNode.cells[1].innerHTML = formData.email.value;
    tableRowIndex.parentNode.parentNode.cells[2].innerHTML = ormData.phone.value;
    contactId = null;
    tableRowIndex = null;
    formData = null;
    closeModalBox(); 
  } 
}
function deleteContact(rowNum, index) {
  if (confirm("Are you sure you want to delete this contact?")) {
    for( var [i, contact] of data.entries()) {
      if(index === contact.id) {
        data.splice(i, 1);
      }
    }
    table.deleteRow(rowNum.parentNode.parentNode.rowIndex);
  } else {
    return;
  }
  if(table.rows.length === 0) {
    table.style.display = "none";
    dataNull.style.display = "";
  }
}
function getFormData() {
  formData = {
    fname: document.getElementById("fname"),
    email: document.getElementById("email"),
    phone: document.getElementById("phone")
  }
}
function openModalBox(mode) {
  if(mode === "add") {
    document.getElementById("contact-edit").style.display = "none";
    document.getElementById("contact-add").style.display = "inline-block";
    document.getElementById("contact-update").style.display = "none";
    document.getElementById("contact-save").style.display = "inline-block";
  } else if(mode === "edit") {
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
window.onclick = function(event) {
  if (event.target == modal) {
    closeModalBox();
  }
}
function sideNav() {
  sideNavStatus = !sideNavStatus;
  if(sideNavStatus) {
    document.getElementById("mySidenav").style.width = "250px";
    if(screen.width > 500) {
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
}
