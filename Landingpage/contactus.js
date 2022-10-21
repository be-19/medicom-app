let dataContact= document.querySelector("#contactus")
const form = {
    name: document.querySelector("#name"),
    email: document.querySelector("#email"),
    no_phone: document.querySelector("#no_phone"),
    submit: document.querySelector("#submit"),
    message: document.getElementById("message"),
  };
  let button = form.submit.addEventListener("click", (e) => {
    e.preventDefault();
    const URL = "https://63515bec3e9fa1244e5ca81d.mockapi.io/contactus";
  
    fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        no_phone: form.no_phone.value,
        message:form.message.value,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
       
        })
        .catch((err) => {
          console.log(err);
        });
        dataContact.reset()
        alert("Data berhasil disimpan")
    });
    
