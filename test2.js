function pickColor() {
    // Tạo một màu ngẫu nhiên bằng cách tạo một số nguyên ngẫu nhiên từ 0 đến 16777215
    // và chuyển đổi nó sang hệ thập lục phân
    var randomColor = Math.floor(Math.random() * 16777216).toString(16);

    // Thêm các số 0 vào đầu mã màu nếu cần thiết để có độ dài là 6 ký tự
    while (randomColor.length < 6) {
        randomColor = "0" + randomColor;
    }

    // Thêm ký tự # vào đầu mã màu để tạo thành mã màu hex
    var hexColor = "#" + randomColor;

    // Hiển thị mã màu ra ô nhập liệu
    document.getElementById("colorCode").value = hexColor;

    // Thay đổi background của trang web theo màu đã chọn
    document.body.style.backgroundColor = hexColor;
}

function copyColor() {
    // Lấy ô nhập liệu chứa mã màu
    var colorInput = document.getElementById("colorCode");

    // Chọn toàn bộ nội dung của ô nhập liệu
    colorInput.select();
    colorInput.setSelectionRange(0, 99999);

    // Sao chép nội dung đã chọn vào clipboard
    document.execCommand("copy");

    // Hiển thị thông báo đã sao chép
    alert("Đã sao chép mã màu: " + colorInput.value);
}