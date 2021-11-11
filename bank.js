
var btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    const logArea = document.getElementById('login-area');
    const anoArea = document.getElementById('another-area')
    logArea.style.display = 'none'
    anoArea.style.display = 'block'
    // anoArea.style.display = 'flex'
})
//for diposit   
var addDiposit = document.getElementById('addDeposit');
addDiposit.addEventListener("click",function(){
    // console.log("touched");
    
    let dipositAmount = document.getElementById("dipositAmmount").value;
    let dipositNumber = parseFloat(dipositAmount);
    // console.log(dipositNumber+8);
    let add = document.getElementById('add').innerHTML;
    // console.log(add);
    let addOver = parseFloat(add);
    let total = addOver+dipositNumber;
    document.getElementById('add').innerHTML = total
    console.log(addOver+dipositNumber);
    document.getElementById("dipositAmmount").value = "";
    
})
//for balance
var addammount = document.getElementById('addDeposit');
    addammount.addEventListener('click',function(){
    let dipositAmmount = document.getElementById('dipositAmmount').value;
    let dipositNumber = parseFloat(dipositAmmount);
    let add = document.getElementById('add1').innerHTML;
    let addAmount = parseFloat(add);
    total = dipositNumber + addAmount;
    document.getElementById('add1').innerHTML = total;
    
})

var withdraw = document.getElementById('subWithdraw');
withdraw.addEventListener('click', function(){
    let WithDrawInput = document.getElementById('withdrawAmmount').value;
    let WithDrawInputNumber = parseFloat(WithDrawInput);
    // console.log(WithDrawInputNumber);
    let sub = document.getElementById('add1').innerHTML;
    let subAll = parseFloat(sub);
    let total =  subAll - WithDrawInputNumber; 
    document.getElementById('add1').innerHTML = total;
    let myWithdraw = document.getElementById('add2').innerHTML;
    let myWithdrawNumber = parseFloat(myWithdraw);
    let total2 = WithDrawInputNumber + myWithdrawNumber;
    document.getElementById('add2').innerHTML =total2;

})
