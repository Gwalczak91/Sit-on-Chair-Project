document.addEventListener("DOMContentLoaded", function(){

/*--------------------------------- PODMENU  HEADER---------------------------------------------*/
    var li = document.querySelectorAll(".header-list > li");

    for (var i = 0; i < li.length; i++){

        li[i].addEventListener("mouseover", function () {

            var ul = this.querySelector("ul");
            if(ul){
                ul.style.display = "block";
            }
        });

        li[i].addEventListener("mouseout", function () {

            var ul = this.querySelector("ul");
            if(ul){
                ul.style.display = "none";
            }
        });

    }

/*------------------------------Chowanie blokow SECTION FOTOS -------------------------------- */

    var img = document.querySelectorAll(".section-fotos img");

    for (var i = 0; i < img.length; i++){

        img[i].addEventListener("mouseover", function () {

            var header = this.nextElementSibling;
            if(header){
                header.style.display = "none";
            }
        });

        img[i].addEventListener("mouseout", function () {

            var header = this.nextElementSibling;
            if(header){
               header.style.display = "block";
            }
        });

    }
/*-------------------------------------SLIDER SECTION-CHAIR-------------------------------------*/


    var prevPicture = document.querySelector(".arrow-left");
    var nextPicture = document.querySelector(".arrow-right");


    var slider = document.querySelectorAll(".section-chair img");

    var index = 0;

    slider[index].style.display = "block";


    nextPicture.addEventListener("click", function () {

        slider[index].style.display = "none";

        index++;

        index %= slider.length;
        slider[index].style.display = "block";

    });



    prevPicture.addEventListener("click", function () {

        slider[index].style.display = "none";

        index--;

        index = index < 0 ? slider.length - 1 : index;
        slider[index].style.display = "block";

    });

/*----------------------------------APPLICATION -----------------------------------------------*/

    var listArrow = document.querySelectorAll(".list_arrow");
    var listLabel = document.querySelectorAll(".list_label");
    var title = document.querySelector(".title");
    var color = document.querySelector(".color");
    var pattern = document.querySelector(".pattern");
    var transport = document.querySelector(".transport");
    var titleValue = document.querySelectorAll(".value");
    var panelElementsOne = listArrow[0].nextElementSibling.querySelectorAll("li");
    var panelElementsTwo = listArrow[1].nextElementSibling.querySelectorAll("li");
    var panelElementsThree = listArrow[2].nextElementSibling.querySelectorAll("li");
    var checkbox = document.querySelector("#transport");
    var sum = document.querySelector("strong");



    for (var i = 0; i < listArrow.length; i++){ /* event na rozwijanie sie listy*/
        listArrow[i].addEventListener("click", function () {
            var panel = this.nextElementSibling.classList.toggle("show");

        });
    }

    for (var i = 0; i < panelElementsOne.length; i++){ /* event na wybor opcji z pierwszej listy*/
        panelElementsOne[i].addEventListener("click", function () {
            var element = this;
            listLabel[0].innerHTML = element.innerText;
            title.innerHTML = element.innerText;

            if(this == panelElementsOne[0]){
                titleValue[0].innerHTML = 315;
            }else if (this == panelElementsOne[1]){
                titleValue[0].innerHTML = 275;
            }else if (this == panelElementsOne[2]){
                titleValue[0].innerHTML = 435;
            }
            sum.innerText = Number((titleValue[0].innerHTML) + (titleValue[1].innerHTML) + (titleValue[2].innerHTML) + (titleValue[3].innerHTML));
        })
    }

    for (var i = 0; i < panelElementsTwo.length; i++){ /* event na wybor opcji z drugiej listy*/
        panelElementsTwo[i].addEventListener("click", function () {
            var element = this;
            listLabel[1].innerHTML = element.innerText;
            color.innerHTML = element.innerText;

            if(this == panelElementsTwo[0]){
                titleValue[1].innerHTML = 0;
            }else if (this == panelElementsTwo[1]){
                titleValue[1].innerHTML = 0;
            }else if (this == panelElementsTwo[2]){
                titleValue[1].innerHTML = 15;
            }
            sum.innerText = Number((titleValue[0].innerHTML) + (titleValue[1].innerHTML) + (titleValue[2].innerHTML) + (titleValue[3].innerHTML));
        })
    }

    for (var i = 0; i < panelElementsThree.length; i++){ /* event na wybor opcji z trzeciej listy*/
        panelElementsThree[i].addEventListener("click", function () {
            var element = this;
            listLabel[2].innerHTML = element.innerText;
            pattern.innerHTML = element.innerText;

            if(this == panelElementsThree[0]){
                titleValue[2].innerHTML = 20;
            }else if (this == panelElementsThree[1]){
                titleValue[2].innerHTML = 40;
            }
            sum.innerText = Number((titleValue[0].innerHTML) + (titleValue[1].innerHTML) + (titleValue[2].innerHTML) + (titleValue[3].innerHTML));
        })
    }

    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {
            transport.innerHTML = document.querySelector("label").innerText;
            titleValue[3].innerHTML = checkbox.dataset.transportPrice;
        }else {
            transport.innerHTML = "";
            titleValue[3].innerHTML = "";
        }
        sum.innerText = Number((titleValue[0].innerHTML) + (titleValue[1].innerHTML) + (titleValue[2].innerHTML) + (titleValue[3].innerHTML));
    });




    // sum.innerText = (titleValue[0].innerHTML + titleValue[1].innerHTML + titleValue[2].innerHTML + titleValue[3].innerHTML);
    // console.log(sum);


























});