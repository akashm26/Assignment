var insertimg=()=>{
    console.log($('input[name=ProductImage]'))
    var uploadfile = $('input[name=ProductImage]')[0].files[0]
    var formData = new FormData()
    formData.append("ProductImage",uploadfile)

    $.ajax({
        url:"upload/img",
        method:"POST",
        enctype:"multipart/form-data",
        processData:false,
        contentType:false,
        dataType:'JSON',
        success:(res)=>{
            console.log(res)
        },
        error:(err)=>{
          console.log("you got error")
        }
    })
}

/*var insert=()=>{
    user={}
    user.name=$("#pname").val()
    user.price=$("#pprice").val()
    user.discount=$("#pdis").val()
    user.manufacture=$("#pman").val()
    user.imageUrl=$("#imgurl").val()
    $.ajax({
        url:"insert/info",
        method:"GET",
        data:user,
        dataType:"JSON",
        success:(res)=>{
            console.log(res)
        },
        error:()=>{
            console.log("you got error")
        }
    })*/
    

    