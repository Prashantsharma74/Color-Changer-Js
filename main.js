
document.querySelector(".color-switcher-btn").onclick = () =>{
    document.querySelector(".color-switcher").classList.toggle("active");
   }
   const themebtn = document.querySelectorAll(".theme-buttons");

   themebtn.forEach(color => {
    color.addEventListener("click", () =>{
        const dataColor = color.getAttribute("data-color");
        document.querySelector(":root").style.setProperty("--main-color", dataColor);
    });
   });
