var acc = document.getElementsByClassName("accordion");
    var i;
    for(i = 0; i < acc.length; i++){
        acc[i].addEventListener("click", function(){
                    /*Toggle between adding and removing the "active"
                     class to hinglight the button that controls the panels*/
                            this.classList.toggle("active")
                /*to Toggle between hiding and showing the active panel*/
                var panel = this.nextElementSibling;
                        if(panel.style.maxHeight){
                            panel.style.maxHeight = null;
                        } else {
                            panel.style.maxHeight = panel.scrollHeight + "px";
                        }
        });
    }

function getFullYear(){
    let today = new Date();
    let thisYear = today.getFullYear();
    return thisYear;
}

let year = getFullYear();
let el = document.getElementById("currentYear");
el.textContent = year;