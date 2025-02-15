let userCount = 0;

document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    userCount++;
    document.getElementById("userCount").textContent = userCount;

    // Buat elemen alert baru
    let alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-success alert-dismissible fade show";
    alertDiv.setAttribute("role", "alert");
    alertDiv.innerHTML = `
        Pemesanan berhasil! Anda adalah pendaftar ke-${userCount}.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    // Tambahkan alert ke dalam container
    let alertContainer = document.getElementById("alertContainer");
    alertContainer.innerHTML = ""; // Hapus alert sebelumnya jika ada
    alertContainer.appendChild(alertDiv);

    // Hapus alert setelah 3 detik
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
});
document.addEventListener("scroll", function () {
    let navbar = document.querySelector(".custom-navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        let navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});
