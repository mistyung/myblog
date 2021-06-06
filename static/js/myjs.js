$('.menu.toggle').click(function () {
    $(".m-item").toggleClass("m-mobileHide");
});

$('#payBtn').popup({
    popup: $('.payQR.popup'),
    on: "click",
    position: "top center",
});

$('.wechat').popup({
    popup: $('.wechatQR'),
    on: "hover",
    position: "top center",
});

$('.ui.dropdown')
    .dropdown()
    ;

$('.topButton').popup({
    popup: $('.top-container.popup'),
    on: "click",
    position: "left center",
});
