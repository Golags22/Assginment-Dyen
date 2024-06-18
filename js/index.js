// const openicon=document.getElementById("open-icon-1");
// const closeicon=document.getElementById("close-icon-1");
// const answer=document.getElementById("answer-1");

// const openicon$=document.getElementById("open-icon-2");
// const closeicon$=document.getElementById("close-icon-2");
// const answer$=document.getElementById("answer-2");

// const openicon$$=document.getElementById("open-icon-3");
// const closeicon$$=document.getElementById("close-icon-3");
// const answer$$=document.getElementById("answer-3");

// /*####################$ Question 1 $##################################*/
// openicon.addEventListener("click",(e)=>{
//     openicon.style.display="none";
//     closeicon.style.display="block";
//      answer.style.display="block";
// });

// closeicon.addEventListener("click",(e)=>{
//     closeicon.style.display="none";
//     openicon.style.display="block";
//     answer.style.display="none";
// });


// /*####################$ Question 2 $##################################*/
// closeicon$.addEventListener("click",(e)=>{
//     closeicon$.style.display="none";
//     openicon$.style.display="block";
//     answer$.style.display="none";
// });

// openicon$.addEventListener("click",(e)=>{
//     openicon$.style.display="none";
//     closeicon$.style.display="block";
//      answer$.style.display="block";
// });
// /*####################$ Question 3 $##################################*/
// closeicon$$.addEventListener("click",(e)=>{
//     closeicon$$.style.display="none";
//     openicon$$.style.display="block";
//     answer$$.style.display="none";
// });

// openicon$$.addEventListener("click",(e)=>{
//     openicon$$.style.display="none";
//     closeicon$$.style.display="block";
//      answer$$.style.display="block";
// });

const questions = document.querySelectorAll(".question");

questions.forEach((e)=>{

    const openicon = e.querySelector(".open-icon");
    const closeicon = e.querySelector(".close-icon");
    const answer = e.querySelector(".answer");

    openicon.addEventListener("click", (e)=>{
        openicon.style.display="none";
        closeicon.style.display="block";
        answer.style.display="block"
            });

    closeicon.addEventListener("click", (e)=>{
        openicon.style.display="block";
        closeicon.style.display="none";
        answer.style.display="none"
            });
});
    


// document.addEventListener('DOMContentLoaded', function() {
    const customerList = document.getElementById('customer-list');
    const customers = document.querySelectorAll('.customer');
    let currentIndex = 0;

    function showCustomer(index) {
        const offset = -index * 300; // 300px should match the width in CSS
        customerList.style.transform = `translateX(${offset}px)`;
    }

    document.getElementById('prev-btn').addEventListener('click', function(e) {
        e.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            showCustomer(currentIndex);
        }
       
    });

    document.getElementById('next-btn').addEventListener('click', function(e) {
        e.preventDefault();
        if (currentIndex < customers.length - 1) {
            currentIndex++;
            showCustomer(currentIndex);
        }
    });

    showCustomer(currentIndex); // Initialize the first view
// });
