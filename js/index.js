let totalPesanan = {}
function ubahNama (){
    let nama = document.getElementById("nameInput").value;
    let output = document.getElementById('nameOutput')
    output.innerHTML= `${nama}, mau pesan apa?`
    // console.log(nama)
}

function tambahPesnan(menu) {
    let i = prompt('mau pesan apa')
    if (Number(i) == 0){
        alert('minimal mesen 1')
    } else if (isNaN(i) || i == ''){
        alert('masukan angka woi')
    } else{
        if (!totalPesanan[menu]){
        totalPesanan[menu]= Number(i)
        }else {
        totalPesanan[menu]+=Number(i)
        }
        let pesanan = document.getElementById('pesanan');
    // let i = prompt('mau pesan apa')
    // let el = document.createElement('li');
    // el.innerHTML= `${menu} jumlahnya ${totalPesanan[menu]}` > ganti isi
    // pesanan.appendChild(el); > dia nambah kaya push di array
        let html = '';
    for (let key in totalPesanan) {
        html += `<li>${key} jumlahnya ${totalPesanan[key]}</li><br>`
    }
    pesanan.innerHTML = html;}
}
function deleteAll() {
    totalPesanan={}
    let pesanan = document.getElementById('pesanan');
    // let i = prompt('mau pesan apa')
    // let el = document.createElement('li');
    // el.innerHTML= `${menu} jumlahnya ${totalPesanan[menu]}` > ganti isi
    // pesanan.appendChild(el); > dia nambah kaya push di array
        let html = '';
        for (let key in totalPesanan) {
        html += `<li>${key} jumlahnya ${totalPesanan[key]}</li><br>`
    }
    pesanan.innerHTML = html;
}

