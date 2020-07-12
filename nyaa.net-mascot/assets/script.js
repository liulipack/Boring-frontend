// 定义吉祥物
var mascot_fap = document.getElementById("mascot-fap");
var mascot_fun = document.getElementById("mascot-fun");
var mascot_fun_dark = document.getElementById("mascot-fun-dark");

// 点击吉祥物监听与反馈
// 写成`playVoice`函数的话在`混合`页面会出错。
if(mascot_fap) {
    document.getElementById("mascot-fap").addEventListener("click", function() {
        var mascotAudio = document.getElementById("kawaii")
        if (mascotAudio !== undefined) {
            mascotAudio.volume = 0.2
            mascotAudio.play()
        } else {
            alertify.log("无法加载音频文件！")
        }
        alertify.log('织节真冬：爽的一批(気持ちいいんでしょ)');
    });
}
if(mascot_fun) {
    document.getElementById("mascot-fun").addEventListener("click", function() {
        var mascotAudio = document.getElementById("nyanpassu")
        if (mascotAudio !== undefined) {
            mascotAudio.volume = 0.2
            mascotAudio.play()
        } else {
            alertify.log("无法加载音频文件！")
        }
        alertify.log('宫内莲华：喵帕斯(にゃんぱすー)');
    });
}
if(mascot_fun_dark) {
    document.getElementById("mascot-fun-dark").addEventListener("click", function() {
        var mascotAudio = document.getElementById("explosion")
        if (mascotAudio !== undefined) {
            mascotAudio.volume = 0.2
            mascotAudio.play()
        } else {
            alertify.log("无法加载音频文件！")
        }
        alertify.log('惠惠：爆炸(explosion)');
    });
}

// 彩蛋-一键三连
function triple_click() {
	mascot_fap.click();
	mascot_fun.click();
	mascot_fun_dark.click();
	alertify.log("彩蛋：一键三连！")
};