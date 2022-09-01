$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzwT8NULK86_jNadZlO7T_zGagx20D8i69YCUEqFuNyshjCcXIFp_2pBynQfz9hJWTWpw/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Thank You")
           // $("#submit-form")[0].reset();
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

