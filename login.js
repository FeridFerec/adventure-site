const login = document.querySelector(".login")
const login1 = document.querySelector(".login1")
const login2 = document.querySelector(".login2")
const contaSign1 = document.querySelector(".contaSign1")
const load = document.querySelector(".img")
/* const signup1 = document.querySelector(".signup1")
const signup3 = document.querySelector(".signup3") */

const LocalData = JSON.parse(localStorage.getItem("contaSign1"))
console.log(LocalData);

login.addEventListener("submit", loginFunc)
function loginFunc(e){
    e.preventDefault();
        if(login1.value.trim() === "" && login2.value.trim() === ""){
            alert("Xanalari doldurun")
        }else if(login1.value === LocalData.name && login2.value === LocalData.email){
            load.style.display = "block"
            setTimeout(()=>{
location.href = "main.html"
            },2000)
        }else{
            alert("ad ve yaxud mail sehvdir")

        }
        
}

