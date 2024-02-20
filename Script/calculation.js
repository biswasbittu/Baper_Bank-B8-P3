
document
    .getElementById("back-btn")
    .addEventListener("click", function () {
        window.location.href = "../index.html";
    });

document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositField = document.getElementById('deposit-field').value;
    
    console.log(depositField)


})

document.getElementById('btn-withdrow').addEventListener('click', function () {
    const withdrowField = document.getElementById('withdraw-field').value;
    console.log(withdrowField);



})