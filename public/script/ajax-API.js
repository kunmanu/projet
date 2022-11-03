console.log('Script Ajax')


document.querySelector('.submitBtn').addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("1")
    fetch ('src/apiRequest.php')
        .then((response)=>{
            console.log(response)
            return response
        })
    })

