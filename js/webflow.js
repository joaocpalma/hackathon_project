document.addEventListener('click', function () {
    
     const emailInput = document.getElementById("field");
    const passwordInput = document.getElementById("field-3");
    
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', login);
    
    const registerButton = document.getElementById('registerButton');
    registerButton.addEventListener('click', validateEmail)

    const email = emailInput.value;
    const password = passwordInput.value;

    function gettingInfo() {
        console.log("teste 5")
        console.log(email);
        console.log(password);
        if (validateEmail(email)) {
            console.log("Email is valid: " + email);
        } else {
            console.error("Invalid email: " + email);
        }
    }

    const users = [{
        name: "catarina",
        email: "ola@gmail.com",
        password: "ola"
    },
    {
        name: "hugo",
        email: "hugohugo@hugo",
        password: "hugo"
    }]

    var currentClient;

    function login() {
        console.log('function called')
        const validateEmail = emailInput.value;
        const validatePassword = passwordInput.value;
        for (var i = 0; i < users.length; i++) {
            console.log('i=' + i)
            if (validateEmail === users[i].email &&
                validatePassword === users[i].password) {
                console.log("nice thing")
                currentClient = users[i]
                window.location = 'user-profile.html'
            }
        }
        {
            console.log("fuk this shit")
        }
    }

    function validateEmail() {
        users.push({
            email: emailInput.value,
            password: passwordInput.value
        })
    }
    
});