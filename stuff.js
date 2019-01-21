//test************************************
if (typeof jQuery == "undefined") {
    console.log("Not installed yet");
} else {
    console.log("Installed");
}
//*********************************************
$("div").click(function () {
    console.log("You have clicked!");
    $(this).css("display", "none");
})












