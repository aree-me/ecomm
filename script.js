let navbar=document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick=()=>{
    navbar.classList.toggle("active");
     
    cartItem.classList.remove("active");
    seachForm.classList.remove("active");

}
let seachForm=document.querySelector(".search-form");
document.querySelector("#search-btn").onclick=()=>{
    seachForm.classList.toggle("active");
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
    

}
let cartItem=document.querySelector(".cart-items-container");
document.querySelector("#cart-btn").onclick=()=>{
    cartItem.classList.toggle("active");
    navbar.classList.remove("active");
    
    seachForm.classList.remove("active");

}
window.onscroll=()=>{
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
    seachForm.classList.remove("active");
}

const removebutton = document.querySelectorAll(".cart-item .fa-times");
removebutton.forEach(button => {
    button.addEventListener('click', () => {
        // Get the parent cart item element and remove it
        const cartItem = button.parentElement;
        cartItem.remove();
    });
})

// -----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector(".cart-items-container"); // Use querySelector for a single element

    document.querySelectorAll(".box-container .btn").forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const box = event.target.closest(".box");
            const itemImgSrc = box.querySelector('img').src;
            const itemName = box.querySelector('h3').textContent;   
            const itemPrice = box.querySelector('.price').firstChild.textContent.trim();;

            const newCartItem = document.createElement('div');
            newCartItem.classList.add('cart-item');
            newCartItem.innerHTML = `
                <span class="fas fa-times"></span>
                <img src="${itemImgSrc}" alt="">
                <div class="content">
                    <h3>${itemName}</h3>
                    <div class="price">${itemPrice}</div>
                </div>
            `;
            cartContainer.insertBefore(newCartItem,cartContainer.querySelector('.btn')); // Use appendChild to add the new item

            // Add event listener to the new close button
            newCartItem.querySelector('.fa-times').addEventListener('click', () => {
                newCartItem.remove();
            });
        });
    });
});