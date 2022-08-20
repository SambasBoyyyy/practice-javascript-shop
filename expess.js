let shop = document.getElementById("shop");


let = shopitemData = [{
   id : "ewffe",
   name : "Hawai Shirt ",
   price : 45,
   desc : "Lorem ipsum dolor sit amet consectetur adipisicing.",
   img : "images/img-1.jpg"
},
{
   id : "efwfg",
   name : "Formal Shirt ",
   price : 455,
   desc : "Lorem ipsum dolor sit amet consectetur adipisicing.",
   img : "images/img-2.jpg"

},
{
   id : "fdghfdthr",
   name : " T-Shirt ",
   price : 35,
   desc : "Lorem ipsum dolor sit amet consectetur adipisicing.",
   img : "images/img-3.jpg"

},
{
   id : "rthrth",
   name : "Black Suit ",
   price : 63,
   desc : "Lorem ipsum dolor sit amet consectetur adipisicing.",
   img : "images/img-4.jpg"

}

];

let basket= [];



let generateShop = () => {
return (shop.innerHTML = shopitemData.map( (s) =>{

let {id,name,price,desc,img}=s;

return `
<div id=product-id-${id} class="item">
<img width="220" src=${img} alt="">
<div class="detailes">
   <h3>${name}</h3>
<p>${desc}</p>

<div class="price-quatity">

   <h2>$ ${price}</h2>

   <div class="buttons">
    
       <i onclick="decrement(${id})" class="bi bi-dash-square"></i>
       <div id=${id} class="quantity">0</div>
       <i onclick="increment(${id})" class="bi bi-plus-square"></i>



   </div>

</div>
</div>
</div>




`

}).join(""));
};


generateShop();


let increment = (id) => {
   let selectItem = id;
   let search = basket.find((x) => x.id === selectItem.id);

// here search will provide me the object 

if(search === undefined){
     
   basket.push(
      {
         id: selectItem.id,
         item : 1,
      }
   )
}

else{
   search.item++;
}

update(selectItem.id);
  
   console.log(basket);
}
let decrement = (id) => {
   let selectItem = id;
   let search = basket.find((x) => x.id === selectItem.id);

// here search will provide me the object 

if(search.item === 0 ){
     return;
}
else
{
   search.item--;
}

update(selectItem.id);
   console.log(basket);
}

let update = (id) => {

let search = basket.find((x) => x.id === id);
console.log(search.item);
document.getElementById(id).innerHTML = search.item;

}