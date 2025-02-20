document.getElementById('participantForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Mengambil data dari form
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const experience = document.getElementById('experience').value === 'true';
    const time = parseInt(document.getElementById('time').value);
    
    // Memeriksa kelayakan
    let resultMessage = '';
    if (age >= 18 && (experience || time < 12)) {
        resultMessage = `Selamat, ${name}, Anda diterima sebagai peserta lomba!`;
    } else {
        resultMessage = `Maaf, ${name}, Anda tidak memenuhi syarat untuk lomba.`;
    }
    
    // Menampilkan hasil
    document.getElementById('result').textContent = resultMessage;
});