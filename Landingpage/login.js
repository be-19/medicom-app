const APIURL = "https://6350e47fdfe45bbd55b0dcd2.mockapi.io/usernakes";
let loginForm = document.querySelector("#login")
let inputUsername = document.querySelector('#username')
let inputPassword = document.querySelector('#password')
let dataUser = []
getData(APIURL);
async function getData(APIURL) {
    const resp = await fetch(APIURL);
    const respData = await resp.json();
    console.log(respData)
    dataUser = [...respData]


}

loginForm.addEventListener("submit", (Event) => {
    Event.preventDefault()
    let pindahHalaman = false
    let userLogin = {
        username: inputUsername.value,
        password: inputPassword.value
    }
    dataUser.forEach(item => {
        let login = userLogin.username == item.username &&
            userLogin.password == item.password;

        if (login) {
            pindahHalaman = true
        }
    })
    if (pindahHalaman) {
        window.location.href = "./landingpage.html"
    }
    else {
        alert("Username dan password anda salah")
    }
})