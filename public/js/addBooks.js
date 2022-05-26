$(".select-book").click((e)=>{

$.ajax({
    url:`http://localhost:3000/cart/add/${e.target.value}`,
    success:()=>{
       var no= $(".rounded-pill").first().text().trim();
       $(".rounded-pill").first().text(+no+1)
       console.log( $(".rounded-pill").first().text().trim(),"dasd");
        iziToast.success({
            title: 'Book add to the cart',
            message: 'check your cart',
            position: 'topRight'
          });
    }
})

})

$(document).ready(()=>{
    console.log("Asdasd");
})