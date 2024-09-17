const searchName=document.querySelector(".search-input")
const product=document.querySelectorAll(".product")
const filter=document.querySelectorAll(".categury")
const searchPriceInput=document.querySelector(".searchPrice-input")
const searchPriceBtn=document.querySelector(".searchPrice-btn")
const prices=[]

const showFilter=(filterItem)=>{

  filter.forEach(item=>{
    
    if(item.dataset.filter===filterItem){
      item.className="categurySelected"
    }else{
      item.className="categury"

    }
  })

}


const search=(e)=>{
  let search=e.target.value.toLowerCase().trim();
  product.forEach(item=>{
    const productNames=item.children[1].innerText.toLowerCase()
    if(productNames.includes(search)){
      // item.hidden=false
      item.style.display="block" 
    }else if(!productNames.includes(search)){
      // item.hidden=true
      item.style.display="none"
    }
    
  })  
}




function searchPriceHandeler(){

  product.forEach(item=>{

    const productPrice=Number(item.children[2].innerText.split(" ")[0])
    prices.push(productPrice)
    if(!+searchPriceInput.value) {
      item.style.display="block"
    }
    else if(productPrice===+searchPriceInput.value){
      item.style.display="block" 
    }else if(productPrice!==+searchPriceInput.value){
      item.style.display="none"
    }
  })
   if(prices.indexOf(+searchPriceInput.value)===-1){
      
      notExist()
    
  }
}
const searchPrice=(e)=>{
  let search=Number(e.target.value)
  if (isNaN(search)){
    searchPriceInput.value=""
    console.log("not valid data");
  }
}

const validate=(value)=>{
  if (typeof value !== "number") return 'Data not valid';
}
const filterHandeler=(e)=>{
  
    const filterItem= e.target.dataset.filter

    product.forEach(product=>{
      const productCategury=product.dataset.categury
      if(filterItem==="all"){
        product.style.display="block" 
      }
      else {
        if (filterItem===productCategury){
        product.style.display="block"
        showFilter(filterItem)}
          else{
            product.style.display="none"
          }
      
      }
    })

  
}

const notExist=()=>{
      product[0].className="exist"
      product[0].style.display="block"
      product[0].innerText="not exist"

}

searchName.addEventListener("keyup",search)
filter.forEach(item=>item.addEventListener("click",filterHandeler))
searchPriceInput.addEventListener("keyup",searchPrice)
searchPriceBtn.addEventListener("click",searchPriceHandeler)








