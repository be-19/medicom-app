async function getNakes() {
  let url = "https://634fe28278563c1d82b28ff3.mockapi.io/pasien";
  let response = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let i = 1;
      let content = "";
      data.forEach((item) => {
        content += `<tr>
                        <th scope="row">${i++}</th>
                        <td>${item["nik"]}</td>
                        <td>${item["name"]}</td>
                        <td>${item["jenis_kelamin"]}</td>
                        <td>${item["tanggal_lahir"]}</td>
                        <td>${item["alamat"]}</td>
                        <td>${item["no_telp"]}</td>
                    </tr>`;
      });

      document.getElementById("table-body").innerHTML = content;
    });
}

window.addEventListener("load", () => {
  getNakes();
});
