// Strict mode
'use strict';

class Quote {
    constructor() {
        let form = document.getElementById('form');

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            submitForm();
        });

        function submitForm() {
            let name = $("#name").val();
            let firstname = $("#firstname").val();
            let email = $("#email").val();
            let datas = new FormData();

            datas.append("name", name);
            datas.append("firstname", firstname);
            datas.append("email", email);

            ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote!data", datas, function (reponse) {
                console.log("Name = " + name + ", Firstname = " + firstname + ", Email = " + email);
            });
        }
    }
}
