function onSearch() {
    window.open("https://www.baidu.com", "_blank");
}

function evaluateElementsNum(v2) {
    if (v2 == undefined || v2 == null || v2 == "") {
        return "当前v1为空";
    }
    var document2 = document.getElementById(v2);
    if (document2 == null) {
        return "没有此元素：" + v2;
    }

    var rows = document2.rows.length;
    var cells = document2.rows.item(0).cells.length;
    var all = rows * cells;

    return "总元素个数为：" + all;
}

var travel_b1Doc = document.getElementById("travel_b1");
travel_b1Doc.innerText = travel_b1Doc.innerText + "\xa0\xa0\xa0" + evaluateElementsNum("travel_table1");