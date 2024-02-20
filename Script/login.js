document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('email')
    const passwordField = document.getElementById('password')
    const user = emailField.value.toUpperCase()
    const pwd = passwordField.value.toUpperCase()
    console.log(user,pwd)
   

    if (user === 'ADMIN'   ){
        if (pwd === 'ADMIN'){
            window.location.href = '../Bank.html'
        }
        else{
            alert('wrong Password')
        }
        // alert('Login successfully');
        // 
        
    }
    else{
        alert('wrong user name ');
    }
})

// document.getElementById('back-btn').addEventListener('click', function () {
//     console.log('Back')
// })
// document.getElementById('back-btn').addEventListener('click',function(){
//     window.location.href='../index.html'
    
// })
document.getElementById('btn-deposit').addEventListener('click',function(){
    console.log('Deposit Done')
})