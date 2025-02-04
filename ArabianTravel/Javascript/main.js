let userCount = 0;

document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    userCount++;
    document.getElementById("userCount").textContent = userCount;

    // Buat elemen alert baru
    const alertContainer = document.getElementById("alertContainer");
    alertContainer.innerHTML = `
        <div role="alert" class="alert alert-success flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50" id="customAlert">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current mr-2" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Pendaftaran berhasil!</span>
        </div>
    `;

    // Hapus alert setelah 3 detik
    setTimeout(() => {
        document.getElementById("customAlert").remove();
    }, 3000);
});
