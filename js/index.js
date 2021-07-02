//G-7 1 JULI 2021

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


let dataPesanan = {}

function ubahNama (){
    let nama = document.getElementById("nameInput").value;
    let output = document.getElementById('nameOutput')
    output.innerHTML= `${nama}, mau pesan apa?`
    output.innerHTML= `${nama}, Silahkan pesan`
    dataPesanan.nama = nama // input data nama ke dalam data pesanan
    
    return nama
}

function tambahPesnan(menu) {

    let nama = document.getElementById("nameInput").value;
    console.log(nama)


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
            
            let html = '';
            let harga = 0;

            for (let selectedItem in totalPesanan){
                for(let menus in menuDanHarga){
                  for (let j = 0; j < menuDanHarga[menus].length; j++) {
                    if (selectedItem === menuDanHarga[menus][j].nama){
                        object[selectedItem] = menuDanHarga[menus][j].harga * totalPesanan[selectedItem]
                        html += `<li>${selectedItem} jumlahnya ${totalPesanan[selectedItem]} Rp.${object[selectedItem]} </li><br>`
                        harga += object[selectedItem]
                    }
                  }
                }
            }

            html += `<li>Total Harga Rp.${harga} </li><br>`
            pesanan.innerHTML = html;}
    }
        


}

function deleteAll() {
    totalPesanan={}
    let pesanan = document.getElementById('pesanan');

        let html = '';
        for (let key in totalPesanan) {
        html += `<li>${key} jumlahnya ${totalPesanan[key]}</li><br>`
    }
    pesanan.innerHTML = html;
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
    }
}


// console.log (totalPesanan)