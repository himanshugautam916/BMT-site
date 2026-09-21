
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
  menuBtn.addEventListener("click",()=>{
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click",()=>navLinks?.classList.remove("open"));
});

// Highlight the current page in the navigation.
const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach(link=>{
  const target = link.getAttribute("href");
  if(target === current) link.classList.add("active");
});
