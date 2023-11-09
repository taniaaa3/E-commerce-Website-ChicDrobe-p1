
let header = document.querySelector('.header');
let footer = document.querySelector('.footer');
let navbar = document.querySelector('.nav');
let featureDiv = document.querySelector('.featured');
let toggle = false;


let fun = () => {
  if (toggle) {
    toggle = false;
    header.innerHTML = `<div class="p-3 flex flex-col sm:flex-row items-center justify-evenly">
                <div class='flex flex-row w-full sm:w-auto items-center justify-evenly'>
            <h1 class="text-4xl font-bold chicdrobe">ChicDrobe</h1>
<i class="fa-solid toggleMenu sm:hidden fa-xmark text-2xl" onclick="fun()"></i> 
</div>
<br>
<div class="searchbar sm:block p-0">
    <input type="text" class="m-0 rounded-tr-lg rounded-bl-lg">
    <button class="border-2 m-0 border-[purple] rounded-tr-lg rounded-bl-lg px-2">Search</button>
</div>
<br>
<div class=" flex justify-evenly sm:block items-center">
    <button class="px-2 mx-2 pink-gradient rounded-lg text-2xl"><a href='login.html'>Login</a></button>
    <button class="px-2"><a href='cart.html'><i class="fa-solid fa-cart-shopping text-2xl"></i></a></button>
</div>
</div>
`
  }
  else if (!toggle) {
    toggle = true;
    header.innerHTML = `<div class="p-3 flex flex-col sm:flex-row items-center justify-evenly">
            <div class='flex flex-row w-full sm:w-auto items-center justify-evenly'>
            <h1 class="text-4xl chicdrobe font-bold ">ChicDrobe</h1>
<i class="fa-solid toggleMenu sm:hidden fa-bars text-2xl" onclick="fun()"></i> 
</div>
<div class="searchbar hidden sm:block p-0">
    <input type="text" class="m-0 rounded-tr-lg rounded-bl-lg">
    <button class="border-2 m-0 border-[purple] rounded-tr-lg rounded-bl-lg px-2">Search</button>
</div>
<div class=" flex hidden sm:block justify-evenly items-center">
    <button class="px-2 mx-2 pink-gradient rounded-lg text-2xl"><a href='login.html'>Login</a></button>
    <button class="px-2"><a href='cart.html'><i class="fa-solid fa-cart-shopping text-2xl"></i></a></button>
</div>

</div>
`
  }
}


header.innerHTML = `<div class="p-3 flex flex-row items-center justify-evenly">
<h1 class="text-4xl font-bold chicdrobe">ChicDrobe</h1>
<div class="searchbar sm:block hidden p-0">
    <input type="text" class="m-0 rounded-tr-lg rounded-bl-lg">
    <button class="border-2 m-0 border-[purple] rounded-tr-lg rounded-bl-lg px-2">Search</button>
</div>
<div class=" flex hidden sm:block justify-evenly items-center">
    <button class="px-2 mx-2 pink-gradient rounded-lg text-2xl"><a href='login.html'>Login</a></button>
    <button class="px-2"><a href='cart.html'><i class="fa-solid fa-cart-shopping text-2xl"></i></a></button>
</div>
<i class="fa-solid toggleMenu sm:hidden fa-bars text-2xl" onclick="fun()"></i> 
</div>
`


footer.innerHTML = `<div class="w-full bottom-0 p-2 text-center">
<div class="sm:flex sm:flex-row grid grid-cols-2 justify-evenly">
<ul>
    <h3 class="text-3xl"><a href='w_all.html'>Women</a></h3>
    <li class="hover:text-white"><a href='w_dresses.html'>Dresses</a></li>
    <li class="hover:text-white"><a href='w_pants.html'>Pants</a></li>
    <li class="hover:text-white"><a href='w_skirts.html'>Skirts</a></li>
</ul>
<ul>
    <h3 class="text-3xl"><a href='m_all.html'>Men</a></h3>
    <li class="hover:text-white"><a href='m_shirts.html'>Shirts</a></li>
    <li class="hover:text-white"><a href='m_pants.html'>Pants</a></li>
    <li class="hover:text-white"><a href='m_hoodies.html'>Hoodies</a></li>
</ul>
<ul>
    <h3 class="text-3xl"><a href='kids.html'>Kids</a></h3>
    
</ul>
<ul>
    <h3 class="text-3xl cursor-pointer">Links</h3>
    <li class="hover:text-white"><a href='index.html'>Home</a></li>
    <li class="hover:text-white"><a href='login.html'>Login</a></li>
    <li class="hover:text-white"><a href='contact.html'>Contact</a></li>
</ul>
</div>
<hr class="m-3 text-black">
<div class="p-2 font-semibold">
Copyright ©ChicDrobe 2023-24
</div>
</div>`

navbar.innerHTML = `<ul class="flex flex-row flex-wrap justify-evenly items-start p-3 ">
<li class="hover:text-white"><a href="index.html">Home</a></li>
<li class="hover:text-white"><a href="products.html">All Products</a></li>
<li class="dropdown hover:text-white cursor-pointer">Women <i class="fa-solid fa-caret-down"></i>
<ul class=" p-2 hidden text-white dropdown-child">
    <li class="hover:text-black"><a href="w_all.html">All Products</a></li>
    <li class="hover:text-black"><a href="w_dresses.html" id='dresses'>Dresses</a></li>
    <li class="hover:text-black"><a href="w_pants.html">Pants</a></li>
    <li class="hover:text-black"><a href="w_skirts.html">Skirts</a></li>
</ul>
</li>
<li class="dropdown hover:text-white cursor-pointer">Men <i class="fa-solid fa-caret-down"></i>
    <ul class=" p-2 text-white hidden dropdown-child">
        <li class="hover:text-black"><a href="m_all.html">All Products</a></li>
        <li class="hover:text-black"><a href="m_shirts.html">Shirts</a></li>
        <li class="hover:text-black"><a href="m_pants.html">Pants</a></li>
        <li class="hover:text-black"><a href="m_hoodies.html">Hoodies</a></li>
    </ul>
</li>
<li class="hover:text-white"><a href="kids.html">Kids</a></li>
<li class="hover:text-white"><a href="contact.html">Contact</a></li>
</ul>`


let featured = [{
  "name": "Rachel Green Skirt",
  "type": "Skirt",
  "price": 3499,
  "image": "https://img101.urbanic.com/v1/goods-pic/66c3693f1b274a5f9739dc84535855f6UR_w1440_q90.webp",
  "image2": "https://img101.urbanic.com/v1/goods-pic/a7c122b8f2de42af851caa55e0b47ceaUR_w1440_q90.webp"
},
{
  "name": "Black Hoodie Shirt",
  "type": "Hoodies",
  "price": 1499,
  "image": "https://www.snitch.co.in/cdn/shop/files/4MSS1984-01-M14187.jpg?v=1686411907&width=1080",
  "image2": "https://www.snitch.co.in/cdn/shop/files/4MSS1984-01-M14157.jpg?v=1686411907&width=1800"
},
{
  "name": "Barbie Sweatshirt Set",
  "type": "Girls",
  "price": 1399,
  "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F37%2F0b%2F370bf44877a643d30aaa316599442fb1ff4fcc01.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  "image2": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe1%2F52%2Fe1520ef1c290c4261428416988a6e2e72c526e08.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_girls_clothing_jumperssweatshirts_hoodies%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
},
{
  "name": "Disney Sweatshirt",
  "type": "Combo",
  "price": 1699,
  "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F72%2F53%2F72532ebd4553f80e58fafd13cbe8d467b160c2e5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  "image2": "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc5%2F55%2Fc555b21be69064f0907a822bb331dc4cd37bd7bb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
},
{
  "name": "Slit Cocktail Dress",
  "type": "Dress",
  "price": 2999,
  "image": "https://img101.urbanic.com/v1/goods-pic/0886669dc6ee4e89bd834f2cea247062UR_w1440_q90.webp",
  "image2": "https://img101.urbanic.com/v1/goods-pic/8fbaca47b77543a1bed56bef8865267eUR_w1440_q90.webp"
},
{
  "name": "Streetstyle Cargo",
  "type": "Pants",
  "price": 1899,
  "image": "https://www.snitch.co.in/cdn/shop/products/Augusto_1stMarch2405.jpg?v=1679250161&width=1080",
  "image2": "https://www.snitch.co.in/cdn/shop/products/Augusto_1stMarch2412.jpg?v=1679158512&width=1800"
},
{
  "name": "Short Rhinestoned Dress With Ties",
  "type": "Dress",
  "price": 3499,
  "image": "https://img101.urbanic.com/v1/goods-pic/1f8c54c5557045f7a55cb7c8efbc4c8dUR_w1440_q90.webp",
  "image2": "https://img101.urbanic.com/v1/goods-pic/7a1329f433f64d1ca78f71275ed92df3UR_w1440_q90.webp"
},
{
  "name": "Rhinestone A-line Skirt",
  "type": "Skirt",
  "price": 1699,
  "image": "https://img101.urbanic.com/v1/goods-pic/9b57fe2a649d4c3ea6af47f61a362211UR_w1440_q90.webp",
  "image2": "https://img101.urbanic.com/v1/goods-pic/278a09d8680345c1be28e728108da5c0UR_w1440_q90.webp"
},
{
  "name": "Among Us Tshirt",
  "type": "Boys",
  "price": 649,
  "image": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc8%2Fcf%2Fc8cf75a30daa7b6fd70a51027c835fef1eb97f1a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  "image2": "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F00%2F48%2F0048d8eb14ccdcb8ca3101030d06c5b8866d46a2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
}, {
  "name": "Korean Style Cargo Pant",
  "type": "Pants",
  "price": 1599,
  "image": "https://www.snitch.co.in/cdn/shop/files/4MSO4531-02-3216.jpg?v=1697865025&width=1080",
  "image2": "https://www.snitch.co.in/cdn/shop/files/4MSO4531-02-321.jpg?v=1695885502&width=1800"
},
{
  "name": "Split Slit Short Skirt",
  "type": "Skirt",
  "price": 2999,
  "image": "https://img101.urbanic.com/v1/goods-pic/dbf4f8c9f6ff46519dc26dd4bb8830b9UR_w1440_q90.webp",
  "image2": "https://img101.urbanic.com/v1/goods-pic/a0052f7f71ff429694639597dd2e7f78UR_w1440_q90.webp"
}
]








let data = featured.map((val) => {
  return (`
  <div class="swiper-slide">
    <div class="group my-10 flex w-[250px] sm:w-[300px] mx-2 cursor-pointer flex-col overflow-hidden rounded-lg border-2 border-[#CDB4DB] bg-white shadow-xl">
  <a class="relative mx-3 mt-3 flex h-96 overflow-hidden rounded-xl">
    <img class="peer absolute top-0 right-0 h-full w-full object-cover" src=${val.image} alt="product image" />
    <img class="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src=${val.image2} alt="product image" />
   <div class="absolute md:hidden bottom-0 mb-4 flex space-x-4 w-full justify-center">
      <div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div> 
      <div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
    </div> 
    <svg class="pointer-events-none md:block absolute hidden inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
   <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">50% OFF</span>
  </a>
  <div class="mt-4 px-5 pb-5">
    <a>
      <h5 class="text-xl tracking-tight text-slate-900">${val.name}</h5>
    </a>
    <div class="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span class="text-3xl font-bold text-slate-900">${val.price}₹</span>
        <span class="text-sm text-slate-900 line-through">${val.price * 2}₹</span>
      </p>
    </div>
    <a href='' class="flex items-center justify-center rounded-md bg-white border-2 border-[#CDB4DB] text-black px-5 py-2.5 text-center text-sm font-medium hover:bg-[#CDB4DB] active:bg-[#CDB4DB] focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart</a
    >
  </div>
  </div>
</div>
    `)
})








// featured.map((val)=>{
//   return(`

//   <div class="group my-10 flex w-[250px] sm:w-[300px] mx-2 cursor-pointer flex-col overflow-hidden rounded-lg border-2 border-[#CDB4DB] bg-white shadow-xl">
// <a class="relative mx-3 mt-3 flex h-96 overflow-hidden rounded-xl">
//   <img class="peer absolute top-0 right-0 h-full w-full object-cover" src=${val.image} alt="product image" />
//   <img class="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src=${val.image2} alt="product image" />
//  <div class="absolute md:hidden bottom-0 mb-4 flex space-x-4 w-full justify-center">
//     <div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div> 
//     <div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
//   </div> 
//   <svg class="pointer-events-none md:block absolute hidden inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
//  <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">50% OFF</span>
// </a>
// <div class="mt-4 px-5 pb-5">
//   <a>
//     <h5 class="text-xl tracking-tight text-slate-900">${val.name}</h5>
//   </a>
//   <div class="mt-2 mb-5 flex items-center justify-between">
//     <p>
//       <span class="text-3xl font-bold text-slate-900">${val.price}₹</span>
//       <span class="text-sm text-slate-900 line-through">${val.price*2}₹</span>
//     </p>
//   </div>
//   <a href='' class="flex items-center justify-center rounded-md bg-white border-2 border-[#CDB4DB] text-black px-5 py-2.5 text-center text-sm font-medium hover:bg-[#CDB4DB] active:bg-[#CDB4DB] focus:outline-none focus:ring-4 focus:ring-blue-300">
//     <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//       <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//     </svg>
//     Add to cart</a
//   >
// </div>
// </div>



featureDiv.innerHTML = data;




