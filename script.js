"use strict";

/* Mobile Menu */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
if(menuBtn){
menuBtn.addEventListener("click",()=>navLinks.classList.toggle("active"));
}

/* Menu Filter */
const filterButtons = document.querySelectorAll(".filter-buttons button");
const menuItems = document.querySelectorAll("#menuItems .card");
filterButtons.forEach(button=>{
button.addEventListener("click",()=>{
filterButtons.forEach(b=>b.classList.remove("active"));
button.classList.add("active");

const filter = button.dataset.filter;
menuItems.forEach(item=>{
item.style.display=(filter==="all"||item.dataset.category===filter)?"block":"none";
});
});
});

/* Reservation Validation + Modal */
const reservationForm = document.getElementById("reservationForm");
const modal = document.getElementById("confirmationModal");
const closeModal = document.getElementById("closeModal");

if(reservationForm){
reservationForm.addEventListener("submit",function(e){
e.preventDefault();

const name=document.getElementById("resName").value.trim();
const email=document.getElementById("resEmail").value.trim();
const date=document.getElementById("resDate").value;
const time=document.getElementById("resTime").value;
const guests=parseInt(document.getElementById("guests").value);

if(!/^[a-zA-Z\s]{3,50}$/.test(name)) return;
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
if(!date||!time) return;
if(isNaN(guests)||guests<1||guests>20) return;

modal.style.display="flex";
reservationForm.reset();
});
}

if(closeModal){
closeModal.addEventListener("click",()=>{
modal.style.display="none";
});
}

window.addEventListener("click",(e)=>{
if(e.target===modal){
modal.style.display="none";
}
});
/* Dark Mode */
const darkToggle = document.createElement("button");
darkToggle.textContent="🌙";
darkToggle.className="btn";
darkToggle.style.position="fixed";
darkToggle.style.bottom="20px";
darkToggle.style.right="20px";
document.body.appendChild(darkToggle);
darkToggle.addEventListener("click",()=>document.body.classList.toggle("dark-mode"));

/* Scroll animation for sections */
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('visible');
}
});
},{threshold:0.1});

sections.forEach(section=>observer.observe(section));