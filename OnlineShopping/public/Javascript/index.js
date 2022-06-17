

var Openpage=(type)=>{
    var template;
    switch (type){
        case 'login':
             template="/Templates/login.htm";
            break;
        case 'forgot':
            template="/Templates/forgot.htm";
            break;
        case 'register':
            template="/Templates/Register.htm";
            break;
        case 'product':
            template="/Templates/product.htm";
            break;
    }
 
$.ajax({
    url:template,
    method:"GET",
    success:(res)=>{
        $("main").html(res)
        /*getProducts()*/
    },
    error:()=>{
        console.log("error")
    }
})
}

var info=()=>{
  var user={}
 user.email=$("#Accountid").val()
 user.pass=$("#Accountpas").val()
 console.log(user)
 $.ajax({
     url:"validation/info",
     method:"GET",
     dataType:"JSON",
     data:user,
     success:(res)=>{
      console.log(res)
      if(res.status=='valid'){
        Openpage('product')
      }else{
          $(".Correction").show()
      }
     },
     error:()=>{

     }
 })
}

$.ajax({
    url:"check/login",
    method:"POST",
    dataType:"JSON",
    success:(data)=>{
        console.log(data)
        if(data.status=="true"){
            Openpage('product')
        }else{
            Openpage('login');
        }
    },
    error:(err)=>{
     console.log(err)
    }
})
logout=()=>{
$.ajax({
    url:"logout/info",
    method:"post",
    dataType:"JSON",
    success:(res)=>{
        console.log(res)
        Openpage('login')
    },
    error:()=>{

    }
})
}

function checkEmail(){
var email= $("#Accountid").val()
        if(email == ''){
         $("#refer").css("display" ,"block")
        }else{
         $("#refer").css("display" ,"none")
        }
    }