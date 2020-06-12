// Strict mode
'use strict';

class Quote {
    constructor() {
        this.form_1 = document.getElementById('form-1');

        this.form_1.addEventListener("submit", (e) => {
            e.preventDefault();
            this.submitForm1();
        });
    }

    submitForm1() {
        let name = document.getElementById('name').value;
        let firstname = document.getElementById('firstname').value;
        let email = document.getElementById('email').value;
        let datas = new FormData();

        if (name !== "") {
            if (firstname !== "") {
                if (email !== "") {
                    datas.append("name", name);
                    datas.append("firstname", firstname);
                    datas.append("email", email);

                    ajaxPost("http://localhost:8080/perso_portfolio/public/index.php?action=quote!data", datas, function () {
                        console.log("Name = " + name + ", Firstname = " + firstname + ", Email = " + email);
                    });
                }
            }
        }
    }

    nextForm() {
        let button = document.getElementById("btn-devis");
        let backForm1 = document.getElementById("fond-form-1");
        let backForm2 = document.getElementById("fond-form-2");

        button.addEventListener('click', function () {
            let email = document.getElementById('email').value;
            let datas = document.getElementById("datas");
            let name = document.getElementById('name').value;
            let firstname = document.getElementById('firstname').value;

            if (name !== "") {
                if (firstname !== "") {
                    if (email !== "") {
                        let name = document.getElementById('name').value;
                        let firstname = document.getElementById('firstname').value;

                        backForm1.style.display = "none";
                        backForm2.style.display = "block";

                        function strUcFirst(a){
                            return (a+'').charAt(0).toUpperCase()+a.substr(1);
                        }

                        datas.innerText = "Bonjour " + strUcFirst(name) + " " + strUcFirst(firstname) + ",";
                    }
                }
            }
        });
    }
}