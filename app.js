const signup1 = document.querySelector(".signup1")
const signup3 = document.querySelector(".signup3")
const signup2 = document.querySelector(".signup2")
const contaSign = document.querySelector(".contaSign")


contaSign.addEventListener("submit", function (e) {
    e.preventDefault();
    if (signup1.value === "" || signup2.value === "" || signup3.value === "") {
        alert("Xanalari doldurun")
    }
    else {
        const contaSign1 = {
            name: signup1.value.trim(),
            pass: signup2.value.trim(),
            email: signup3.value.trim()
        }
        console.log(contaSign1);
        localStorage.setItem("contaSign1", JSON.stringify(contaSign1))
        location.href = "login.html"
        signup1.value = "";
        signup2.value = "";
        signup3.value = "";
    }

});





























