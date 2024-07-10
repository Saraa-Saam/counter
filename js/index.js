$(".toggle").on("click", (e) => {
    const targetInner = $(e.target).next('.inner');
    $('.inner').not(targetInner).slideUp();
    targetInner.slideToggle();
});

$(".sidenav").on("click", (e) => {
    $(e.target).addClass("active").children().removeClass("active");
});

$(".closebtn").on("click", () => {
    let sideWidth = $("#leftMenu").innerWidth();
    $("#leftMenu").animate({ left: `-${sideWidth}` });
});

$(".openNav").on("click", () => {
    $("#leftMenu").animate({ left: `0px` });
});

$(".Message").keypress((e) => {
    const len = $(e.target).val().length;

    if (len < 100) {
        $("#chars").text(`${len}/100`);
    } else {
    }
});

// Set the date we're counting down to
const countDownDate = new Date("Jul 15, 2024 15:37:25").getTime();

// Update the count down every 1 second
setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    $(".days").text(days + " D");
    $(".hours").text(hours + " h");
    $(".minutes").text(minutes + " m");
    $(".seconds").text(seconds + " s");

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        $(".days").text("0 D");
        $(".hours").text("0 h");
        $(".minutes").text("0 m");
        $(".seconds").text("0 s");
    }
}, 1000);
