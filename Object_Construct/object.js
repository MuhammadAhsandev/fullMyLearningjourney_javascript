// Define food menu and their prices
const menu = {
    nasiGoreng: { nama: "Nasi Goreng", harga: 15000 },
    nasiBakar: { nama: "Nasi Bakar", harga: 20000 },
    cumiBakar: { nama: "Cumi Bakar", harga: 25000 },
    gorengan: { nama: "Bakwan", harga: 5000 }
};

// Function to calculate and display the total price
function calculateTotal() {
    const selectedMenu = document.getElementById("makanan").value;
    const jumlah = parseInt(document.querySelector(".jumlah").value);
    const harga = menu[selectedMenu].harga;
    const total = harga * jumlah;
    document.querySelector(".total").value = total;
}

// Function to handle the transaction
function handleTransaction() {
    const bayar = parseInt(document.querySelector(".bayar").value);
    const total = parseInt(document.querySelector(".total").value);

    if (isNaN(bayar) || bayar < total) {
        alert("Uang yang anda masukkan tidak cukup atau tidak valid!");
        document.querySelector(".kembalian").value = "";
    } else {
        const kembalian = bayar - total;
        document.querySelector(".kembalian").value = kembalian;
        alert(`Selamat menikmati ${menu[document.getElementById("makanan").value].nama}`);
    }
}

// Add event listener to the button
document.getElementById("bayarButton").addEventListener("click", handleTransaction);

// Add event listeners to update total price in real-time
document.getElementById("makanan").addEventListener("change", calculateTotal);
document.querySelector(".jumlah").addEventListener("input", calculateTotal);

// Initial calculation of total price
calculateTotal();
