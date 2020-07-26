const displayTime = () => {
    moment.locale("id");
    $(".time").text(moment().format("LTS"));
    $(".date").text(moment().format("LL."));
    $(".day").text(moment().format("dddd."));
};
 
const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000)
};
 
updateTime();