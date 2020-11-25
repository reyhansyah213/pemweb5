var time = new Date();
console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
);

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "reyhan123" && password == "123") {
        // alert("selamat anda berhasil login!!!");
        window.location = "halaman/halaman.html";
        return false;
    }
    else {
        alert('Anda harus mengisi data dengan benar!');
        return false;
    }
}

