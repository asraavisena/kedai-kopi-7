let totalPesanan = {};
let hargaTotal = 0;
let object = {
  KopiHitam: 0,
  Mochacino: 0,
  Capucino: 0,
  Kacang: 0,
  Kentang: 0,
  RotiBakar: 0,
};
function ubahNama() {
  let nama = document.getElementById('nameInput').value;
  let output = document.getElementById('nameOutput');
  output.innerHTML = `${nama}, mau pesan apa?`;
  // console.log(nama)
}

function tambahPesnan(menu) {
  let nama = document.getElementById('nameInput').value;
  if (nama == '') {
    alert('masukin nama dulu ok');
  } else {
    let i = prompt('pesan berapa');
    if (Number(i) == 0) {
      alert('minimal mesen 1');
    } else if (isNaN(i) || i == '') {
      alert('masukan angka woi');
    } else {
      if (!totalPesanan[menu]) {
        totalPesanan[menu] = Number(i);
        // harga += Number(i) * 10000
      } else {
        totalPesanan[menu] += Number(i);
        // harga += Number(i) * 10000
      }
      let pesanan = document.getElementById('pesanan');
      // let i = prompt('mau pesan apa')
      // let el = document.createElement('li');
      // el.innerHTML= `${menu} jumlahnya ${totalPesanan[menu]}` > ganti isi
      // pesanan.appendChild(el); > dia nambah kaya push di array
      let html = '';
      let harga = 0;
      for (let key in totalPesanan) {
        if (key === 'KopiHitam') {
          object.KopiHitam = 10000 * totalPesanan[key];
          html += `<li>${key} jumlahnya ${totalPesanan[key]} Rp.${object.KopiHitam} </li><br>`;
          harga += object.KopiHitam;
        } else if (key === 'Mochacino') {
          object.Mochacino = 15000 * totalPesanan[key];
          html += `<li>${key} jumlahnya ${totalPesanan[key]} Rp.${object.Mochacino} </li><br>`;
          harga += object.Mochacino;
        } else if (key === 'Capucino') {
          object.Capucino = 12000 * totalPesanan[key];
          html += `<li>${key} jumlahnya ${totalPesanan[key]} Rp.${object.Capucino} </li><br>`;
          harga += object.Capucino;
        } else if (key === 'Kacang') {
          object.Kacang = 2000 * totalPesanan[key];
          html += `<li>${key} jumlahnya ${totalPesanan[key]} Rp.${object.Kacang} </li><br>`;
          harga += object.Kacang;
        } else if (key === 'Kentang') {
          object.Kentang = 6000 * totalPesanan[key];
          html += `<li>${key} jumlahnya ${totalPesanan[key]} Rp.${object.Kentang} </li><br>`;
          harga += object.Kentang;
        } else if (key === 'RotiBakar') {
          object.RotiBakar = 8000 * totalPesanan[key];
          html += `<li>${key} jumlahnya ${totalPesanan[key]} Rp.${object.RotiBakar} </li><br>`;
          harga += object.RotiBakar;
        }
      }
      // for (let key in object){
      //     hargaTotal += object[key]
      // }
      html += `<li>Total Harga Rp.${harga} </li><br>`;
      pesanan.innerHTML = html;
    }
  }
}
// function ubahNama (){
//     let nama = document.getElementById("nameInput").value;
//     // let output = document.getElementById('nameOutput')
//     output.innerHTML= `${nama}, mau pesan apa?`
//     // console.log(nama)
// }
function deleteAll() {
  totalPesanan = {};
  let pesanan = document.getElementById('pesanan');
  // let i = prompt('mau pesan apa')
  // let el = document.createElement('li');
  // el.innerHTML= `${menu} jumlahnya ${totalPesanan[menu]}` > ganti isi
  // pesanan.appendChild(el); > dia nambah kaya push di array
  let html = '';
  for (let key in totalPesanan) {
    html += `<li>${key} jumlahnya ${totalPesanan[key]}</li><br>`;
  }
  pesanan.innerHTML = html;
}
function catatan() {
  let input = document.getElementById('catatanIN');
  let output = document.getElementById('catatanOUT');
  output.innerHTML = `${input}`;
  console.log(input);
}
// console.log (totalPesanan)
