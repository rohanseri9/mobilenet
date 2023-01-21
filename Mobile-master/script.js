let btn=document.getElementById("btn");
btn.addEventListener('click',(e)=>{
    e.preventDefault();
  
    let amount=document.querySelector("#loan_amount").value;
   
    let intrate=document.querySelector("#interest_rate").value;
   
    let months=document.querySelector("#months").value;
    let btn=document.getElementById("btn");

    let res=document.getElementById('months');
    let interest=((amount*(intrate/100))*(months/12));
    
    let out=parseInt((parseInt(interest)+parseInt(amount))/months);
    let emi=document.getElementById("amu");
    emi.innerHTML=out;
    console.log(emi);

})

