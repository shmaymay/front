document.getElementById("id_h2_second_title").innerHTML = "被js替换过的二级标题";
document.write("<p>这是js输出的段落</p>");

function showWhetherOk() {
    document.getElementById("id_b_show_whether_ok").innerHTML = "not ok!!!";
    document.getElementById("id_b_show_whether_ok").style.color = "red";
}

var a;
var b = 3.123456789123456789;
document.write("<p>未初始化的值--->" + a + "</p>");
document.write("<p>初始化后的值--->" + b + "</p>");

var c = 1.23e5;
var d = 1.23e-5;
document.write("<p>10的正次方--->" + c + "</p>");
document.write("<p>10的负次方--->" + d + "</p>");

var e = ["我", 100, "帅哥"];
document.write("<p>数组--->" + e + "</p>");

document.write("<p>hostname--->" + window.location.hostname + "</p>");
document.write("<p>pathname--->" + window.location.pathname + "</p>");
document.write("<p>port--->" + window.location.port + "</p>");
document.write("<p>protocol--->" + window.location.protocol + "</p>");
document.write("<p>href--->" + window.location.href + "</p>");

function evaluate(v1, v2) {
    if (v1 > v2) {
        return v1 + v2;
    }
}

function showEvaluate(v1, v2) {
    document.getElementById("id_b_show_evaluate").innerText = evaluate(v1, v2);
}

function validate_email(field, alerttxt) {
    with (field) {
        apos = value.indexOf("@")
        dotpos = value.lastIndexOf(".")
        if (apos < 1 || dotpos - apos < 2) {
            alert(alerttxt);
            return false
        }
        else {
            return true
        }
    }
}

function validate_form(thisform) {
    with (thisform) {
        if (validate_email(email, "Not a valid e-mail address!") == false) {
            email.focus();
            return false
        }
    }
}

function leavePage() {
    alert("即将离开页面");
}

function clickMeEvent(obj) {
    if (obj.innerHTML == "点击这里") {
        obj.innerHTML = "你好";
    }
    else if (obj.innerHTML == "你好") {
        obj.innerHTML = "你是谁";
    }
    else if (obj.innerHTML == "你是谁") {
        obj.innerHTML = "你想知道下面会出现什么吗";
    }
    else if (obj.innerHTML == "你想知道下面会出现什么吗") {
        obj.innerHTML = "请你继续点";
    }
    else if (obj.innerHTML == "请你继续点") {
        obj.innerHTML = "再点一下";
    }
    else if (obj.innerHTML == "再点一下") {
        obj.innerHTML = "还差几步";
    }
    else if (obj.innerHTML == "还差几步") {
        obj.innerHTML = "马上你就可以知道了";
    }
    else if (obj.innerHTML == "马上你就可以知道了") {
        obj.innerHTML = "好的，我告诉你";
    }
    else {
        window.location.assign("https://www.baidu.com")
    }
}

function getCookie(c_name) {
    if (navigator.cookieEnabled == true && document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

function checkCookie() {
    var username = getCookie('username')
    if (username != null && username != "") {
        setTimeout(alert('Welcome again ' + username + '!'), 3000);
    }
    else {
        username = setTimeout(prompt('Please enter your name:', ""), 3000);
        if (username != null && username != "") {
            setCookie('username', username, 365);
        }
    }
}

$.ajax({
    type: "GET",
    url: "http://localhost:7001/test/selectAll",
    dateType: "json",
    success: function (res) {
        for (var i = 0; i < res.length; i++) {
            $("#all_users").append("<p>用户名：" + res[i].id + "；姓名：" + res[i].name1 + "；年龄：" + res[i].age + "；地址：" + res[i].location + "</p>");
        }
    },
    error: function (res) {
        $("#all_users").append("<p>当前只有默认用户</p>");
    }
});


