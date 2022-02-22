/* $(document).ready(function(){
	$('.c-hamburger').click(function(){
		$(this).toggleClass('is-active');
	});
});
 */
// document.querySelector(".btn").innerHTML = ("arrow_back");
const swup = new Swup();


$(function () {
    $("#headerMenu").load("/elements/header_menu.html");
});

{
    function menu() {
        let menuToggle = document.querySelector(".menu");

        menuToggle.classList.toggle("menu-show");

        if (menuToggle.classList.length == "2") {
            document.querySelector(".c-hamburger").classList.add("is-active");
            document.querySelector(".c-hamburger").classList.remove("is-active2");
        } else
            document.querySelector(".c-hamburger").classList.replace("is-active", "is-active2");
    }



    document.addEventListener("click", function () {
        let menuLink = document.activeElement.className;

        if ((menuLink === "a") || (menuLink === "logo") || (menuLink === "great")) {
            document.querySelector(".menu").classList.toggle("menu-show");
            document.querySelector(".c-hamburger").classList.replace("is-active", "is-active2");

            console.log(menuLink);
        }

    });

    // addEventListener('load', () => {
        // let box = document.querySelector(".menu");
        // let boxStyle = getComputedStyle(box);

        window.addEventListener("touchstart", wStart);
        window.addEventListener("touchmove", wMove);
        window.addEventListener("touchend", wEnd);

        function wStart(ev) {
            wStartX = ev.touches[0].clientX;
            wStartY = ev.touches[0].clientY;
            // let nav = document.querySelector(".nav");
            // let navStyle = getComputedStyle(nav);

            // if (wStartY < parseInt(navStyle.height)) {
            //         return;
            //     }
            if (wStartX > 150) {
                document.querySelector(".menu").classList.remove("menu-show");
                document.querySelector(".c-hamburger").classList.replace("is-active", "is-active2");

            }
            console.log("document start", wStartX);

            // console.log("header height", parseInt(navStyle.height));

        }

        function wEnd(ev) {
            wEndX = ev.changedTouches[0].clientX;
            console.log("document end", wEndX);
            // boxBack();
            // borderBox();
            // console.log("left", parseInt(boxStyle.left));
        }

        
        function wMove(ev) {
            let wMove = ev.touches[0];
            let wMoveX = wMove.clientX - 155; //box hide marginleft = -105
            let wMoveX1 = wMove.clientX - wStartX; //box out marginleft = 0 
            let box = document.querySelector(".menu");
            box.style.left = `${wMoveX}px`;
            box.style.transition = "0ms";

        }
    // });

    // let x = parseInt(box.style.left);
    // console.log(wMoveX);

    // if ((wStartX == 0) && ((wMoveX + 105) > wStartX)) {
    //     if (wStartY < 40) {
    //         return;
    //     }

    //     if ((wStartX == 0) && (wMoveX > 0)) { //border out
    //         return;
    //     }

    //     if ((wStartX > 0) && (wMoveX < -105)) { //border hide
    //         return;
    //     }

    //     if ((wStartX > 105) && (wMoveX > 0)) { //border do not move when out the box
    //         return;
    //     }

    //     if ((wStartX > 105) && (wMoveX < 0)) { //border do  move back
    //         box.style.transition = "0ms";
    //     }

    //     box.style.left = `${wMoveX}px`;
    // } else {
    //     if ((x == 0) && ((wMoveX + 105) > wStartX)) {
    //         return;
    //     }
    //     console.log("hooooray!!!!");

    // }



    // function borderBox() {
    //     if ((wStartX >= 0) && (wEndX < 50) && (wStartX !== wEndX)) {
    //         box.style.left = "-155px";
    //         box.style.transition = "500ms";
    //     }

    //     if ((wStartX >= 0) && (wEndX >= 50) && (wEndX < 150)) {
    //         box.style.left = "0px";
    //         box.style.transition = "500ms";
    //     }


    // }

    // function boxBack() {
    //     if ((wStartX > 105) && (wStartX == wEndX) && (parseInt(boxStyle.left) == 0)) {
    //         box.style.left = "-155px";
    //         box.style.transition = "500ms";
    //     }
    // }


    // document.onclick = function(menuOff)
    // {
    //  let classNameOnClick = menuOff.target.className;
    //      if ((classNameOnClick !== "menu menu-show") && (classNameOnClick !== "a") && (classNameOnClick !== "c-hamburger c-hamburger--htla is-active") && (classNameOnClick !== "c-hamburger c-hamburger--htla is-active2")){

    //         document.querySelector(".menu").classList.remove("menu-show");
    //         document.querySelector(".c-hamburger").classList.replace("is-active", "is-active2");
    //      }  
    // }



    // let menuFocus = document.querySelector(".menu");
    // let x = 0, y = 0;
    // menuFocus.addEventListener('mouseleave', function() {
    //     x++;    
    //     console.log("focus out", x);
    //     document.querySelector(".menu").classList.remove("menu-show");
    //     document.querySelector(".c-hamburger").classList.replace("is-active", "is-active2");
    // });
    // menuFocus.addEventListener('focusin', function() {
    //     y++;    
    //     console.log("focus in", x);
    // });




    let wMax = matchMedia("(min-width: 600px)");

    wMax.addEventListener("change", test);

    function test() {
        if (wMax.matches) {
            document.querySelector(".menu").classList.remove("menu-show");
            document.querySelector(".c-hamburger").classList.remove("is-active");
        }
    }
}