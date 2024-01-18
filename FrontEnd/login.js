document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    debugger;
    let data = new FormData(event.target);
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST","http://localhost/php/LibrarySystem/BackEnd/login.php");
    xhttp.send(data);
    xhttp.onload = function(){
        debugger;
        console.log(xhttp.responseText);
        switch(xhttp.responseText){
            case "Admin":
                location.replace("./Adm_book.html");
                break;
            case "Customer":
                location.replace("./customer.html");
                break;
            case "Staff":
                location.replace("./Adm_book.html");
        }
        sessionStorage.setItem("id",xhttp.responseText);
    }
})

