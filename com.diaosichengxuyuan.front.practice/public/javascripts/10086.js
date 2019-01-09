var scroll_imgs = new Array(4);
scroll_imgs[0] = "/images/10086_guanggao_qiehuan1.jpg";
scroll_imgs[1] = "/images/10086_guanggao_qiehuan2.jpg";
scroll_imgs[2] = "/images/10086_guanggao_qiehuan3.jpg";
scroll_imgs[3] = "/images/10086_guanggao_qiehuan4.jpg";

var scroll_img_ids = new Array(4);
scroll_img_ids[0] = "main_picture_area_li_img1";
scroll_img_ids[1] = "main_picture_area_li_img2";
scroll_img_ids[2] = "main_picture_area_li_img3";
scroll_img_ids[3] = "main_picture_area_li_img4";

var minFrame = 0;
var maxFrame = 3;
var nowFrame = minFrame;

var main_picture_area_img1_id = "main_picture_area_img1";
var real_point_img = "/images/black.jpg";
var virtual_point_img = "/images/white.jpg";

function loopShow() {
    if (nowFrame > maxFrame) {
        nowFrame = minFrame;
    }
    document.getElementById(main_picture_area_img1_id).src = scroll_imgs[nowFrame];
    document.getElementById(scroll_img_ids[nowFrame]).src = real_point_img;
    document.getElementById(scroll_img_ids[getPreFrame(minFrame, maxFrame, nowFrame)]).src = virtual_point_img;
    nowFrame++;
}

function getPreFrame(minFrame, maxFrame, nowFrame) {
    if (nowFrame == minFrame) {
        return maxFrame;
    }

    return nowFrame - 1;
}

var theTimer = setInterval("loopShow()", 3000);

function show(nowFrame) {
    clearInterval(theTimer);

    document.getElementById(main_picture_area_img1_id).src = scroll_imgs[nowFrame];

    for (var i = minFrame; i <= maxFrame; i++) {
        if (i == nowFrame) {
            document.getElementById(scroll_img_ids[i]).src = real_point_img;
        } else {
            document.getElementById(scroll_img_ids[i]).src = virtual_point_img;
        }
    }
}

function hide(nowFrame) {
    document.getElementById(scroll_img_ids[nowFrame]).src = virtual_point_img;
    loopShow();
    theTimer = setInterval("loopShow()", 3000);
}