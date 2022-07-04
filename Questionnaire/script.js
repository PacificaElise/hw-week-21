let submitButton = document.querySelector(".submit-button");
    submitButton.onclick = function (e) {
                    e.preventDefault();
        let name = document.getElementById("name").value;
        let fio = document.getElementById("fio").value;
        let phone = document.getElementById("phone").value;
        let city = document.getElementById("city").value;
        let street = document.getElementById("street").value;
        let house = document.getElementById("house").value;
        let flat = document.getElementById("flat").value;
        let email = document.getElementById("email").value;
        let comments = document.getElementById("comments").value;
        let breed = document.getElementById("breed").options[document.getElementById("breed").selectedIndex].value;
        let sexes = document.querySelectorAll('input[type="radio"]');
        let sex;
        for (const s of sexes) {
          if (s.checked) {
            sex = s.value
          }
        }
    
        let food = [];

        let feeds = document.querySelectorAll(".feed");
        for (let i = 0; i < feeds.length; i++) {
                if (feeds[i].checked) {
                    food.push(feeds[i].value);
                } 
        }

        let photo = document.getElementById("photo");
        file = photo.files[0];
        

        let data = new FormData();
        data.append('name', name);
        data.append('fio', fio);
        data.append('phone', phone);
        data.append('city', city);
        data.append('street', street);
        data.append('house', house);
        data.append('flat', flat);
        data.append('email', email);
        data.append('comments', comments);
        data.append('breed', breed);
        data.append('file', file);
        data.append('food', food);
        data.append('sex', sex);
        
            fetch("https://httpbin.org/post",
                        {
                            method: 'POST',
                            body: data,
                        })
                        .then(response => response.json())
                        .then(response => {
                            console.log(response);
                        })
                        .catch(error => console.log(error));
                }