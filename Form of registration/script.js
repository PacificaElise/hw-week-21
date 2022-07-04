let loginButton = document.querySelector(".login__btn");

loginButton.addEventListener('click', (e) => {
            e.preventDefault();
let user = {
    firstName: document.getElementById("firstName").value,
    lasttName: document.getElementById("lastName").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
}
console.log(user);

            fetch("https://httpbin.org/post",
                {
                    method: 'POST',
                    body: JSON.stringify(user),
                    headers: {
                      'Content-Type': 'application/json; charset=utf-8'
                    }
                })
                .then(response => response.json())
                .then(user => {
                    console.log(user);
                })
                .catch(error => console.log(error));
        });

        
        
        