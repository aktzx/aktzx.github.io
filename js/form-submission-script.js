$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzcta1Wu7B54WQwOrh2zE-j7x0nBP2tqx3WM7O_kJLck7oo171v6_fG2eo3hzv2d7UM/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Thank You")
            $("#submit-form")[0].reset();
            //window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

