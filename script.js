async function getNakes() {
  let url = "https://634fe28278563c1d82b28ff3.mockapi.io/nakes";
  let response = await fetch(url);
  let data = await response.json();
  data.forEach((item) => {
    console.log(item);
  });
}

getNakes();
