
var form1 = document.querySelector('#form1');
document.querySelector("#depositInput").value = "";
var depositForm = document.querySelector('#form2');
var signInBtn = document.querySelector("#ebank-btn1");
var balance = document.querySelector('#balance');
var depositBtn = document.querySelector("#ebank-btn2");
var signOutBtn = document.querySelector("#signOut");
depositBtn.addEventListener('click', makeDeposit);

logInCheck();

signInBtn.addEventListener('click', function(){
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;
    if (username =="" && password==""){
      alert("Please type your username and password");
    }
    else if (username==""){
      alert("Please type your username");
    }
    else if (password==""){
      alert("Please type your password");
    }
    else{
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('balance', '0.00');
      logInCheck();
    } 
  })

function logInCheck(){
  if(localStorage.getItem('username') != "null" && localStorage.getItem('username') != null){
    document.querySelector("#welcomeMessage").innerText = "Welcome " + localStorage.getItem('username');
    form1.style.display = "none";
    depositForm.style.display = "block";
    balance.innerText = localStorage.getItem('balance');
    signOutBtn.style.visibility = "visible";
  }
  else{
    depositForm.style.display = "none";
  } 
}


function signOut(){
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  localStorage.removeItem('balance')
  form1.style.display = "block";
  document.querySelector("#welcomeMessage").innerText = "Welcome to Quarsh Online Personal Banking"
  depositForm.style.display = "none";
  location.reload();
}

function makeDeposit(){
  var depositAmount;
  var initialBalance = parseFloat(localStorage.getItem('balance'));
  var amountInp = document.querySelector("#depositInput");
  if(amountInp.value == "" | parseFloat(amountInp.value) < 0){
    depositAmount = 0.00;
  }
  else depositAmount = parseFloat(amountInp.value);
  localStorage.setItem('balance', (depositAmount + initialBalance));
  balance.innerText = localStorage.getItem("balance");
  amountInp.value = "";
  alert("Deposit of Ghs " + depositAmount + " made.\nNew balance is Ghs " + localStorage.getItem("balance"));
}
