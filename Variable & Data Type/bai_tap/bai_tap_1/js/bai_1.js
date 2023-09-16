function tinhToan(){
    let math = parseFloat(document.getElementById("math").value);
    let che = parseFloat(document.getElementById("che").value);
    let phy = parseFloat(document.getElementById("phy").value);

    let tong = math + che + phy;
    let average = ( math + che +phy ) / 3;

    document.getElementById("tong").innerHTML = "Điểm Tổng: " + tong;
    document.getElementById("trungBinh").innerHTML = "Điểm Trung Bình: " + average;
}