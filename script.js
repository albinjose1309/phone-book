var sideNavStatus = screen.width < 500 ? true: false;
var contactList = false;
var data = [{
  id: 0,
  name: "albin 0",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  id: 1,
  name: "albin 1",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  id: 2,
  name: "albin 2",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  id: 3,
  name: "albin 3",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  id: 4,
  name: "albin 4",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  id: 5,
  name: "albin 5",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  id: 6,
  name: "albin 6",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  id: 7,
  name: "albin 7",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  id: 8,
  name: "albin 8",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  id: 9,
  name: "albin 9",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  id: 10,
  name: "albin 10",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  id: 11,
  name: "albin 11",
  email: "albinnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn@email.com",
  phone: "9999999999"
},
{
  id: 12,
  name: "albin 12",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  id: 13,
  name: "albin 13",
  email: "albin@email.com",
  phone: "9999999999"
}];
function setData() {
  var table = document.getElementById("contact-list-id");
  for(var contact of data) {
    var row = table.insertRow(contact.id);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = contact.name;
    cell2.innerHTML = contact.email;
    cell3.innerHTML = contact.phone;
    cell4.innerHTML = `<button class="del-icon" title="delete" onclick="deleteContact(this, ${contact.id})"><i class='fa fa-trash-o'></i></button>&nbsp<button class="edt-icon" onclick="edit(index) title="edit"><i class="fa fa-edit"></i></button>`;
    cell1.setAttribute("title", contact.name);
    cell2.setAttribute("title", contact.email);
    cell3.setAttribute("title", contact.phone);
  }
}
function deleteContact(rowNum, index) {
  console.log("row number >>>>", rowNum.parentNode.parentNode.rowIndex);
  for( var [i, contact] of data.entries()) {
    if(index === contact.id) {
      data.splice(i, 1);
    }
  }
  console.log("index >>>>", index);
  console.log(data);
  document.getElementById("contact-list-id").deleteRow(rowNum.parentNode.parentNode.rowIndex);
}
function addContact() {
  console.log("clicked")
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
  sideNav();
  setData();
  if(contactList) {
    document.getElementById("contact-list-id").style.display = "none";
    document.getElementById("data-null-id").style.display = "";
  } else {
    document.getElementById("contact-list-id").style.display = "";
    document.getElementById("data-null-id").style.display = "none";
  }
}
