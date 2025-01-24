let userCount = 0;

document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    userCount++;
    document.getElementById("userCount").textContent = userCount;
    alert("Pendaftaran berhasil!");
});