function doiNhietDo(){
    let cel = parseFloat(document.getElementById("celsius").value);
    let ketQua = ((cel / 5 ) * 9) + 32;
    document.getElementById("fahrenheit").innerHTML = "Kết quả là: " + ketQua;
}