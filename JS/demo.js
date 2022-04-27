$(document).ready(function() {
    $("#btnDK").click(function() {
        $("#myModal").modal();
    });
    // kt ma sv
    function kiemTraMaSV() {
        let maSV = $("#txtMaSV").val().trim();
        let regex = /^[1-9]{1}[0-9]{9}$/;
        if (maSV.length == 0) {
            $("#errorMaSV").html("Mã sinh viên không được rỗng");
            return false;
        }
        if (!regex.test(maSV)) {
            $("#errorMaSV").html("Mã sinh viên gồm 10 số")
            return false;
        }
        $("#errorMaSV").html("*");
        return true;
    };
    $("#txtMaSV").blur(kiemTraMaSV);
    // kt ten
    function kiemTraHoTen() {
        let hoten = $("#txtHT").val();
        let regex = /^([A-Z]{1}[a-z]+){1}((\s{1}[A-Z]{1}[a-z]+)*)$/;
        if (hoten.length == 0) {
            $("#errorHT").html("Họ tên không được rỗng");
            return false;
        }
        if (!regex.test(hoten)) {
            $("#errorHT").html("Chữ đầu viết hoa");
            return false;
        }
        $("#errorHT").html("*");
        return true;
    };
    $("#txtHT").blur(kiemTraHoTen)
        // kt ngày
    function kiemTraNgay() {
        if ($("#txtNgay").val() == "") {
            $("#errorNgay").html("Không để trống");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#txtNgay").val());
        today = today.setDate(today.getDate() + 7);
        if (today > ntt) {
            $("#errorNgay").html("Phải sau ngày hiện tại 7 ngày");
            return false;
        }
        $("#errorNgay").html("*");
        return true;
    }
    $("#txtNgay").blur(kiemTraNgay)
        // kt email
    function kiemTraMail() {
        let mail = $("#txtEmail").val();
        let regex = /^[A-Za-z0-9]*@iuh.edu.vn$/
        if (mail.length == 0) {
            $("#errorEmail").html("Mail không được rỗng");
            return false;
        }
        if (!regex.test(mail)) {
            $("#errorEmail").html("có dạng mẫu xxxxxx@iuh.edu.vn");
            return false;
        }
        $("#errorEmail").html("*");
        return true;
    }
    $("#txtEmail").blur(kiemTraMail)
        // kt phone

    function kiemTraDT() {
        var regex = /0(9|3|7)[0-9]{8}/;
        var dt = $("#txtDT").val().trim();
        if (dt.length == 0) {
            $("#errorDT").html("điện thoại không được rỗng");
            return false;
        }
        if (!regex.test(dt)) {
            $("#errorDT").html("đầu số 09 hoặc 03 hoặc 07 và đủ 10 số");
            return false;
        } else {
            $("#errorDT").html("*");
            return true;
        }
    }
    $("#txtDT").blur(kiemTraDT)

    $("#save").click(function() {
        var i = 1;
        if (!(kiemTraMaSV() && kiemTraHoTen() && kiemTraNgay() && kiemTraMail() && kiemTraDT())) {
            alert("Nhập đúng và đầy đủ thông tin");
            return;
        }

        row = "<tr>";
        row += "<td>" + (i++) + "</td>";
        row += "<td>" + $("#txtMaSV").val().trim() + "</td>";
        row += "<td>" + $("#txtHT").val().trim() + "</td>";
        row += "<td>" + $("#txtNgay").val().trim() + "</td>";
        row += "<td>" + $("#txtEmail").val() + "</td>";
        row += "<td>" + $("#txtDT").val().trim() + "</td></tr>";
        $("tbody").append(row)
        $("#myModal").modal("hide");
    });
});