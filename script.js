function showDiv() {Content.style = "opacity:1;margin-top:15vh;";ket.style="margin-top:30px";}
fungsi memulai(){suratin.style="transition:all 1s ease;transform:scale(.1);opacity:0";ket.style="transition:all 1s ease;transform:scale(.1);opacity: 0";setTimeout(pesan,300);}
function kpemb() {suratin.style="display:none";ket.style="display:none";fotoakhir.style="display:inline-flex;transform:scale(1);";Content.style = " opacity:1;margin-top:2vh;";bq.style = "opacity:1;visibility:visible;margin-top:5px";setTimeout(ngetik,200);}

var tanggal = Tanggal baru();
var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember "];
var jam = tanggal.getHours();
var menit = tanggal.getMinutes();

// Tambahkan awalan nol jika jam atau menit kurang dari 10
if (jam < 10) {jam = "0" + jam;}
if (menit < 10) {menit = "0" + menit;}

var hari = hari[tanggal.getDay()];
var dateNum = tanggal.getDate();
var bulan = bulan[tanggal.getMonth()];
var tahun = tanggal.getFullYear();

console.log(jam + "." + menit + " WIB - " + hari + ", " + tanggalNum + " " + bulan + " " + tahun);

var elemen = document.querySelector("body");var watermark = document.createElement("div");

// Setel teks watermark dan propertinya
watermark.textContent = hari + ", " + tanggalNum + " " + bulan + " " + tahun;
watermark.style = "warna:putih;opacity:.5;ukuran font:10px;posisi:tetap;bawah:25px;kiri:25px;z-index:150";
elemen.appendChild(tanda air);

////////////////////////////////////////////////////

const body = dokumen.querySelector("body");
fungsi jatuhan() {
    const hati = dokumen.createElement("div");
    heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><jalur d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249 142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10 .7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296 0,3 71729633,8.89614246 Z'></jalur ><jalur d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";
    heart.className = "ikon hati";
    hati.gaya.kiri = (Matematika.acak() * 95) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    document.body.appendChild(hati);
}

setInterval(fungsi () {
    var heartArr = dokumen.querySelectorAll(".heart-icon");
    if (heartArr.length > 100) {
      heartArr[0].hapus();
    }
}, 100);

////////////////////////////////////////////////////

function tombol(){Tombol.style="margin-top:15px;opacity:1;transform: scale(1);";ftom=1;} ftom=0; function fakhiran(){document.getElementById("akhiran").style = "display:inline-flex";}
const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040', imageWidth: 90, imageHeight: 100,});
const swalst = Swal.mixin({allowOutsideClick: false, showConfirmButton: false, timer: 2500, timerProgressBar: true, imageWidth: 90, imageHeight: 90,}); const style = dokumen.createElement('style'); var hari ini = Tanggal baru();var dd = String(hari ini.getDate()).padStart(2, '0');var mm = String(hari ini.getMonth() + 1).padStart(2, '0' );var yyyy = hari ini.getFullYear();const moonNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September" , "Oktober", "November", "Desember"];hari ini = dd + ' ' + nama bulan[hari ini.getMonth()] + ' ' + yyyy;
function setel(){audio.play();} function setel2(){bgm.play();} function sjawab(){if(ftom==1){Tombol.style="display:none";jawab() ;}}

var aa=0,katangetik;
fungsi ngetik() {
  TypeIt baru("#kalimat", {
    string: ["" + katangetik], startDelay: 50, kecepatan: 35, kursor: true,
    setelah Selesai: fungsi(){
        kalimat.innerHTML = katangetik;
      kalimatc.style="margin-top:30px;margin-bottom:10px";
      setTimeout(ngetik2,300);
    },}).pergi();
}
var ai=0,katangetik2;
fungsi ngetik2() {
  TypeIt baru("#kalimatc", {
    string: ["" + katangetik2], startDelay: 50, kecepatan: 35, kursor: true,
    setelah Selesai: fungsi(){
        kalimatc.innerHTML = katangetik2;
        setInterval(berjatuhan,200);
        //setTimeout(tombol,300);
    },}).pergi();
  }
