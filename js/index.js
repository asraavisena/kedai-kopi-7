//G-7 1 JULI 2021

let dataPesanan = {}
let totalPesanan = {}
let hargaTotal = 0
let object = {
    KopiHitam : 0,
    Mochacino : 0,
    Capucino : 0,
    Kacang : 0,
    Kentang : 0,
    RotiBakar:0
}

const menuDanHarga = {
    Coffee : [

        {nama : 'KopiHitam', harga : 10000},
        {nama : 'Mochacino', harga : 25000},
        {nama : 'Capucino', harga : 28000},        
    ],
    Snacks : [
        {nama : 'Kacang', harga : 10000},
        {nama : 'Kentang', harga : 25000},
        {nama : 'RotiBakar', harga : 28000},
    ]
}

function ubahTampilanHarga (hargatotal){

    let bilangan = hargatotal;
        
    let reverse = bilangan.toString().split('').reverse().join(''),
    ribuan  = reverse.match(/\d{1,3}/g);
    ribuan  = ribuan.join('.').split('').reverse().join('');

    return ribuan
// Cetak hasil  
    // document.write(ribuan); // Hasil: 23.456.789

}

function ubahNama (){
    let nama = document.getElementById("nameInput").value;
    let output = document.getElementById('nameOutput')
    output.innerHTML= `${nama}, mau pesan apa?`
    output.innerHTML= `${nama}, Silahkan pesan`
    totalPesanan.nama = nama // input data nama ke dalam data pesanan
    dataPesanan.nama = nama // input data nama ke dalam data pesanan
    
    return nama
}

function tambahPesnan(menu) {

    let nama = document.getElementById("nameInput").value;

    if (nama === '') {
        alert('Masukin nama dulu kak!!!!')
    }else {

        let i = prompt('pesan berapa')
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
            let pesananDua = document.getElementById('catatanOUTDua')

            let html = '';
            let harga = 0;

            for (let selectedItem in totalPesanan){
                for(let menus in menuDanHarga){
                  for (let j = 0; j < menuDanHarga[menus].length; j++) {
                    if (selectedItem === menuDanHarga[menus][j].nama){
                        object[selectedItem] = menuDanHarga[menus][j].harga * totalPesanan[selectedItem]
                        let changeHarga = ubahTampilanHarga(object[selectedItem])
                        html += `<li>${menuDanHarga[menus][j].nama} jumlahnya ${totalPesanan[selectedItem]} Rp.${changeHarga} </li><br>`
                        harga += object[selectedItem]
                        hargaTotal += harga
                    }
                  }
                }
            }
            let finalHarga = ubahTampilanHarga(harga)
            console.log(finalHarga)
            html += `<li>Total Harga Rp.${finalHarga} </li><br>`
            pesanan.innerHTML = html;

            pesananDua.innerHTML = html;
        }
    }
}

function deleteSemua() {

    let andaYakin = confirm('Apakah anda yakin ?')

    if(andaYakin){
        totalPesanan={}
        let pesanan = document.getElementById('pesanan');

            let html = '';
            for (let key in totalPesanan) {
            html += `<li>${key} jumlahnya ${totalPesanan[key]}</li><br>`
        }
        pesanan.innerHTML = html;
    }

}

function catatanPesanan(){

    let nama = document.getElementById("nameInput").value;

    if (nama === '') {
        alert('Masukin nama dulu kak!!!!')
    }else {
        
        let input = document.getElementById("catatanIN").value;
        let output = document.getElementById("catatanOUT")
        output.innerHTML= `CATATAN : ${input}`
        input.innerHTML = 'Makasih kak'
        totalPesanan.catatan = input
    }
}

function orderConfirm() {
    // body...
    if (!dataPesanan.nama) {
        alert('Masukin nama dulu ya kak')
    }else if (hargaTotal === 0){
        alert('kamu belum pesan ya ?')
    }

    else {

        document.getElementById('stepOne').style.display = 'none';
        document.getElementById('deleteAll').style.display = 'none';
        document.getElementById('orderLagi').style.display = 'block';
        document.getElementById('orderButton').style.display = 'none';
        document.getElementById('pesananOrder').classList.add = 't-2'
        document.getElementById('pesananOrder').style.paddingTop = '100px'
        document.getElementById('notePesanan').innerHTML = `<h2>Terimakasih ${dataPesanan.nama}<br>Silahkan melakukan pembayaran di kasir<br>Tunggu pesanan anda datang</h2>`


        }

}

function tampilNota(){
    let input = ''
    for(let pesanan in totalPesanan){
        // console.log(pesanan)
        for(let total in menuDanHarga){
            if (pesanan === total) {

            console.log('sama')
            }
        }
    }
}

console.log (totalPesanan)