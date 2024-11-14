// Fungsi untuk menampilkan bagian (section) berdasarkan ID
function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Menangani pengiriman form kontak
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Terima kasih telah menghubungi kami! Kami akan segera merespon pesan Anda.');
});
