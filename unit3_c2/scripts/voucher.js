let url = 'https://masai-vouchers-api.herokuapp.com/api/vouchers';

async function data(){

    let res = await fetch(url);
 let data = await res.json();
  
   console.log(data[0].vouchers)
    //return data[0].vouchers;
     append(data[0].vouchers);

}
data()
  let purchaseA = JSON.parse(localStorage.getItem('purchase')) || [];

function append(data){
   
data.map(function(el){
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.src = el.image;
    let h3 = document.createElement('h3');
    h3.innerText = el.name;
    let price = document.createElement('h5');
    price.innerText = el.price;
    let btn = document.createElement('button');
    btn.innerText = "buy";
    btn.addEventListener('click', function(){
        buy(el);
    })

    let v = document.getElementById('voucher_list');
    div.append(img,h3,price,btn);
    v.append(div);
})


}

function buy(el){

     purchaseA.push(el);
    localStorage.setItem('purchase', JSON.stringify(purchaseA));
//console.log(purchaseA)
}