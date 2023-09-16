function tinhDienTich(){
    let radius = parseFloat(document.getElementById("radius").value);
    let dienTich = radius * radius * 3.14;
    let chuVi = 2*radius*3.14;
    document.getElementById("ketQua").innerHTML = "Diện tích hình tròn: " + dienTich;
    document.getElementById("ketQua").innerHTML = "Chu vi hình tròn: " + chuVi;
}