const amount= document.querySelector('#amount');
const int= document.getElementById('interest');
const year= document.getElementById('years');
const monthPay= document.querySelector('.monthly-payment');
const totalPay= document.querySelector('.total-payment');
const totalInt= document.querySelector('.total-interest');

document.getElementById('loan-form').addEventListener('submit',(e)=>{
    e.preventDefault()
    document.querySelector('.lower').style.display= "none";
    document.querySelector('.loading').style.display= "block";

    setTimeout(calculation, 2000)
});

function calculation(){
    const principal= +(amount.value);
    const interest= +(int.value)/100/12;
    const years= +(year.value)*12;
    var x= Math.pow(1+ interest,years)
    var monthlyPay= ((principal*x*interest)/(x-1));

    if(isFinite(monthlyPay)){
        document.querySelector('.lower').style.display= "block";
        document.querySelector('.loading').style.display= "none";
        monthPay.value= monthlyPay.toFixed(2);
        totalPay.value= (monthlyPay*years).toFixed(2);
        totalInt.value= ((monthlyPay*years)-principal).toFixed(2);
    }
    else{
      showError();
    }
    function showError(e){
        const card= document.querySelector('.container');
        const up= document.querySelector('.upper')
        const errorMessage= document.createElement('div');
        errorMessage.className= "errorMessage";
        errorMessage.appendChild(document.createTextNode('Please check all fields'));
        card.insertBefore(errorMessage, up);

        setTimeout(function errorTime(){
            document.querySelector('.errorMessage').remove();
            
        document.querySelector('.loading').style.display= "none";
        // document.querySelector('.lower').style.display= "block";
        }, 3000);
        // e.preventDefault();
    }

};