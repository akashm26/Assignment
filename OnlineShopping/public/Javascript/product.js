	var productdeatil=[] 
    var ProductTemplate=''
$.ajax({
     url:"Templates/productinfo.htm",
     method:"GET",
     success:(res)=>{
         ProductTemplate=res
     },
     error:()=>{
         console.log("you got error")
     }
 })
        var product=(productdeatil)=>{
            productdeatil.discount= productdeatil.price-(productdeatil.price*productdeatil.discount)/100
            var template = Handlebars.compile(ProductTemplate);
         $(".apply").append(template(productdeatil));
 }

 var getProducts=()=>{
     $(".apply").html("");
    $.ajax({
        url:"product/info",
        method:"GET",
        data:{
            Pricerange:$("#pRange").val()
        },
        dataType:"JSON",
        success:(res)=>{
            console.log(res)
            productdeatil=res.pro
             Onload()
        },
        error:()=>{
            console.log("you got error")
        }
    })
    }
 var Onload=()=>{
     for(i=0;i<productdeatil.length;i++){
         product(productdeatil[i])
     }
 }