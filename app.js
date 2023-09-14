document.addEventListener('DOMContentLoaded', function () {
    const hitungButton = document.getElementById('hitungButton');
    const resetButton = document.getElementById('resetButton');

    hitungButton.addEventListener('click', function () {
        // Ambil nilai pecahan dari input
        const pecahanSeribu = parseInt(document.getElementById('pecahanSeribu').value) || 0;
        const pecahanDuaRibuan = parseInt(document.getElementById('pecahanDuaRibuan').value) || 0;
        const pecahanLimaRibuan = parseInt(document.getElementById('pecahanLimaRibuan').value) || 0;
        const pecahanSepuluhRibuan = parseInt(document.getElementById('pecahanSepuluhRibuan').value) || 0;
        const pecahanDuaPuluhRibuan = parseInt(document.getElementById('pecahanDuaPuluhRibuan').value) || 0;
        const pecahanLimaPuluhRibuan = parseInt(document.getElementById('pecahanLimaPuluhRibuan').value) || 0;
        const pecahanSeratusRibuan = parseInt(document.getElementById('pecahanSeratusRibuan').value) || 0;
        const pecahanDuaRatusRibuan = parseInt(document.getElementById('pecahanDuaRatusRibuan').value) || 0;

        // Hitung total laci
        const totalLaci = (pecahanSeribu * 1000) +
            (pecahanDuaRibuan * 2000) +
            (pecahanLimaRibuan * 5000) +
            (pecahanSepuluhRibuan * 10000) +
            (pecahanDuaPuluhRibuan * 20000) +
            (pecahanLimaPuluhRibuan * 50000) +
            (pecahanSeratusRibuan * 100000) +
            (pecahanDuaRatusRibuan * 200000);

        // Hitung selisih
        const targetSaldo = parseFloat(document.getElementById('targetSaldo').value) || 0;
        const selisih = totalLaci - targetSaldo;

        // Menampilkan hasil perhitungan
        document.querySelector('.total').textContent = 'Rp' + totalLaci.toLocaleString();
        document.querySelector('.selisih').textContent = selisih === 0 ? '0 👌' : (selisih >= 0 ? '+' : '-') + 'Rp' + Math.abs(selisih).toLocaleString();
    });

    resetButton.addEventListener('click', function () {
        // Reset semua input dan hasil perhitungan
        document.getElementById('namaKas').value = '';
        document.getElementById('targetSaldo').value = '';
        document.getElementById('pecahanSeribu').value = '';
        document.getElementById('pecahanDuaRibuan').value = '';
        document.getElementById('pecahanLimaRibuan').value = '';
        document.getElementById('pecahanSepuluhRibuan').value = '';
        document.getElementById('pecahanDuaPuluhRibuan').value = '';
        document.getElementById('pecahanLimaPuluhRibuan').value = '';
        document.getElementById('pecahanSeratusRibuan').value = '';
        document.getElementById('pecahanDuaRatusRibuan').value = '';
        document.querySelector('.total').textContent = 'Rp0';
        document.querySelector('.selisih').textContent = '0 👌';
    });
});
