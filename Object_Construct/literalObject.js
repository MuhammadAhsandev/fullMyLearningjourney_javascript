const nilaiMatematikaSMK1 = {
    nilaiMurni: function(ulangan){
        if(this.nilaiMurni == undefined){
            this.nilaiMurni = 0;
        }

        this.nilaiMurni += ulangan;
        console.log(`Nilai murni anda adalah : ${this.nilaiMurni}`)
    },
    remedialMTK: function(remed){
        this.remedialMTK = remed + this.nilaiMurni;
        console.log(`Nilai remedial anda adalah : ${this.remedialMTK}`)
    },
   totalNilai: function(){
        console.log(`Total nilai anda adalah: ${this.remedialMTK}`);
    }
}


function Siswa(nama, nilaiUlangan){
    let nilaiUlanganSMK1 = Object.create(nilaiMatematikaSMK1);
    nilaiUlanganSMK1.nama = nama;
    nilaiUlanganSMK1.nilaiMurni = nilaiUlangan;
    
    return nilaiUlanganSMK1;
}

let namaSiswa = Siswa("Rizki", 65);

namaSiswa.nilaiMurni(30);
namaSiswa.remedialMTK(20);
namaSiswa.totalNilai();