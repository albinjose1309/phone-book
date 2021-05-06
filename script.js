var sideNavStatus = screen.width < 500 ? true: false;
var contactList = false;
var data = [{
  name: "albin jose",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  name: "albin jose",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  name: "albin jose",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  name: "albin jose",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  name: "albin jose",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  name: "albin jose",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  name: "albin jose",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  name: "albin jose",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  name: "albin jose",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  name: "albin jose",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  name: "albin jose",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  name: "albin jose",
  email: "albinnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn@email.com",
  phone: "9999999999"
},
{
  name: "albin jose",
  email: "albin@email.com",
  phone: "9999999999"
},
{
  name: "albin jose",
  email: "albin@email.com",
  phone: "9999999999"
}];
function setData() {
  var table = document.getElementById("contact-list-id");
  for(var contact of data) {
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = contact.name;
    cell2.innerHTML = contact.email;
    cell3.innerHTML = contact.phone;
    cell4.innerHTML = `<button class="del-icon"><i class='fa fa-trash-o'></i></button>&nbsp<button class="edt-icon"><i class="fa fa-edit"></i></button>`;
    cell1.setAttribute("title", contact.name);
    cell2.setAttribute("title", contact.email);
    cell3.setAttribute("title", contact.phone);
    cell4.setAttribute("title", contact.name);
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
