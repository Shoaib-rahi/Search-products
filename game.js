function search(){
   let searchbox = document.getElementById("search-item").value;
   let storeitems = document.getElementById("product-lists");
   let products = document.querySelectorAll(".products");
   let pname = document.getElementsByTagName("h2");
   for(let i=0;i<pname.length;i++){
    let match = products[i].getElementsByTagName("h2")[0];
    if(match){
        let textvalue = match.textContent || match.innerHTML;
        if(textvalue.indexOf(searchbox) > -1){
            products[i].style.display = "";
        }else{
            products[i].style.display = "none"
            
        }
    }
   }
}