# Data Untuk Test Client

Gunakan data yang ada pada direktori ini untuk mengisikan CouchDB agar anda dapat menggunakan aplikasi sampel pada direktori utama.

## Cara penggunaan

Pastikan python yang anda gunakan padalah python 3:

    $ python --version
    Python 3.4.3

Kemudian eksekusi `process.py` dengan antarmuka:

    python process.py <nama-file> <nama-database>

Misalkan untuk memasukkan data pada `stackdata-apr2014.json` dalam database `hello-world`:

    python process.py stackdata-apr2014.json hello-world

Dan cek Futon untuk memastikan data telah masuk. Pastikan nama basis data dan file benar, karena script `process.py` merupakan script sangat sederhana yang sama sekali tidak menangani error apapun.

Ingat juga bahwa pada sampel kode di `index.js` kita menggunakan nama database `qadb`. Jika anda menggunakan nama database lain `qadb`, kode pada `index.js` juga akan harus diubah. 

Port yang didukung untuk HTTP API CouchDB hanya 5984. Jika anda tidak mengganti konfigurasi standar, hal ini tidak perlu diganti. Tetapi jika anda menggunakan port selain 5984 untuk CouchDB, silahkan ganti variabel `PORT` pada process.py dan index.js. Hal yang sama berlaku untuk host name (default: "localhost").
