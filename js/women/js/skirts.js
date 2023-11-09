let skirts = [];
let func = async () => {
    const res = await fetch('../js/women/women.json');
    const data = await res.json();
    skirts = await data.filter((val) => {
        return val.type == "Skirt";
    })


    let female = document.querySelector(".skirts");
    female.innerHTML = skirts.map((val) => {
        return (`
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
    <a href="#" class="flex active:bg-[#CDB4DB] items-center justify-center rounded-md bg-white border-2 border-[#CDB4DB] text-black px-5 py-2.5 text-center text-sm font-medium hover:bg-[#CDB4DB] focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Add to cart</a
    >
  </div>
</div>
    `)
    });
}
func();