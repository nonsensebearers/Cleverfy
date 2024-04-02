document.querySelector('.prev').addEventListener('click', function() {
    scroll('left');
});

document.querySelector('.next').addEventListener('click', function() {
    scroll('right');
});

function scroll(direction) {
    var container = document.getElementById('artikel');
    var articles = container.querySelectorAll('.kartu');
    var scrollAmount = articles[0].offsetWidth + 20; // Lebar artikel ditambah margin

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
        if (container.scrollLeft <= 0) {
            // Jika sudah mencapai awal, geser ke posisi terakhir
            container.scrollLeft = container.scrollWidth - container.clientWidth;
        }
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            // Jika sudah mencapai akhir, geser ke posisi awal
            container.scrollLeft = 0;
        }
    }
}

    // Validasi Form Masuk
    function validasimasuk() {
        email = document.forms['formutama']['email'].value
        password = document.forms['formutama']['password'].value

        if(email !== '' && password !== '') {
            alert('Selamat Datang di Akun anda');
            return false;
        }
    }

    //Buat Akun
    function buatakun() {
        nama = document.forms['formdaftar']['nama'].value;
        email = document.forms['formdaftar']['email'].value;
        password = document.forms['formdaftar']['password'].value;
    
        alert('Selamat Akun anda telah berhasil dibuat');
        return true; // Mengembalikan true agar form bisa dikirim
    }
    
    