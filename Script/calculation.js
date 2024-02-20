
document
    .getElementById("back-btn")
    .addEventListener("click", function () {
        window.location.href = "../index.html";
    });

document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositField = document.getElementById('deposit-field').value;
    const currentDeposit = document.getElementById('deposit-current');
    const dipositTotal = currentDeposit.innerText;
    // console.log(dipositTotal)
    // currentDeposit.innerText = depositField;
    currentDeposit.innerText = parseInt(dipositTotal)+parseInt(depositField);
    const balenceTotalField = document.getElementById('belance-total');
    const totalBelance = balenceTotalField.innerText;
    balenceTotalField.innerText = parseInt(totalBelance) + parseInt(depositField)


})

document.getElementById('btn-withdrow').addEventListener('click', function () {
    const withdrowField = document.getElementById('withdraw-field').value;
    const currentWithdrow = document.getElementById('withdraw-current');
    const withdrowAmount = currentWithdrow.innerText;
    currentWithdrow.innerText = parseInt(withdrowField) + parseInt(withdrowAmount)
    const balenceTotalField = document.getElementById('belance-total');
    const totalBelance = balenceTotalField.innerText;
    balenceTotalField.innerText = parseInt(totalBelance) - parseInt(withdrowField)
    console.log(withdrowAmount)

})