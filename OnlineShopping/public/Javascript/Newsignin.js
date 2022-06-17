var newSingn=()=>{
data={}
data.email=$("#newemail").val();
data.password=$("#newpass").val();
data.repassword=$("#repass").val()
console.log(data)
$.ajax({
    url:"Signin/info",
    method:"POST",
    dataType:"JSON",
    data:data,
    success:()=>{
        console.log("success")
    },
    error:()=>{
        console.log("you got error")
    }
})
}