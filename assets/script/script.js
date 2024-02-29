function toggleTheme() {
  let html = document.getElementsByTagName("html");
  html && html[0].classList.toggle("dark");
}

function toggleVissionTabs(index) {
    let tab = document.querySelectorAll(".tab");
    let indicator = document.querySelector(".tab-indicator");
    let u = document.querySelectorAll(".panel");
    let m = document.querySelectorAll(".panel-preview");
    indicator !== null &&((indicator.style.width = tab[index].getBoundingClientRect().width + "px"),(indicator.style.left =tab[index].getBoundingClientRect().left -tab[index].parentElement.getBoundingClientRect().left +"px"));
    tab.forEach((t) => {
        t.addEventListener("click", () => {
          let r = t.getAttribute("aria-controls");
          (indicator.style.width = t.getBoundingClientRect().width + "px"),
            (indicator.style.left =
              t.getBoundingClientRect().left -
              t.parentElement.getBoundingClientRect().left +
              "px"),
            u.forEach((o) => {
              let c = o.getAttribute("id");
              r === c
                ? (o.classList.remove("invisible", "opacity-0", "scale-90"),
                  o.classList.add("visible", "opacity-100", "scale-100"))
                : (o.classList.add("invisible", "opacity-0", "scale-90"),
                  o.classList.remove("visible", "opacity-100", "scale-100")),
                m.forEach((e) => {
                  let l = e.getAttribute("data-target");
                  r === l
                    ? (e.classList.replace("translate-y-[100%]", "translate-y-0"),
                      e.classList.replace("scale-75", "scale-100"),
                      e.classList.replace("opacity-50", "opacity-100"),
                      e.classList.replace("z-0", "z-10"))
                    : (e.classList.replace("scale-100", "scale-75"),
                      e.classList.replace("opacity-100", "opacity-50"),
                      e.classList.replace("z-10", "z-0"),
                      setTimeout(() => {
                        e.classList.replace("translate-y-0", "translate-y-[100%]");
                      }, 300),
                      clearTimeout());
                });
            });
        });
      });
}

function readMore(componentId,buttonId){
    let component = document.getElementById(componentId);
    let button = document.getElementById(buttonId);
    if(component.style.display == 'none'){
        button.innerText = 'Read less';
        component.style.display = 'block';
    }else{
        button.innerText = 'Read more';
        component.style.display = 'none';
    }
}


function toggleHaburge(){
  let g = document.querySelector("#navbar");
      g.classList.toggle("navbar-active");
}


window.onload = ()=>{
    toggleVissionTabs(0)
}
