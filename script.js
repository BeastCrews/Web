// Ambil elemen-elemen yang akan diubah dengan JavaScript
const button = document.getElementById("myButton");
const paragraph = document.getElementById("myParagraph");

// Tambahkan event listener untuk tombol
button.addEventListener("click", function() {
    paragraph.textContent = "Teks ini telah diubah oleh JavaScript!";
});
