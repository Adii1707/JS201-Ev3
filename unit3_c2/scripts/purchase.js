let data = JSON.parse(localStorage.getItem('purchase'));

   
 
//console.log(data);
function append(data){
   
    data.map(function(el){
        let div = document.createElement('div');
       let img = document.createElement('img');
        img.src = el.image;
       let h3 = document.createElement('h3');
       h3.innerText = el.name;
       let price = document.createElement('h5');
        price.innerText = el.price;
       div.append(img,h3,price);
       let div1 = document.getElementById("purchased_vouchers");

       div1.append(div);

    })


}
append(data);