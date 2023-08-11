// Câu 1:
function findSquares() {
    // Lấy giá trị của a và b từ ô nhập liệu
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);

    // Kiểm tra xem a và b có hợp lệ hay không
    if (isNaN(a) || isNaN(b) || a > b) {
        document.write("Vui lòng nhập vào hai số hợp lệ, với a nhỏ hơn hoặc bằng b.");
        return;
    }

    // Khởi tạo một mảng để lưu các số chính phương
    var squares = [];

    // Duyệt qua các số từ a đến b
    for (var i = a; i <= b; i++) {
        // Tính căn bậc hai của i
        var sqrt = Math.sqrt(i);

        // Nếu căn bậc hai của i là một số nguyên, thì i là một số chính phương
        if (Number.isInteger(sqrt)) {
            // Thêm i vào mảng squares
            squares.push(i);
        }
    }

    // Hiển thị kết quả ra màn hình
    document.getElementById("result").innerHTML = "Các số chính phương trong khoảng từ " + a + " đến " + b + " là: " + squares.join(", ");
}

