$().ready(() =>
{
    $('#pulsa').click(function() {
        $('p').toggleClass('red');
    });
});

//parte2

let go= document.querySelector("#go");
let p= document.querySelector ("p")
go.onclick=function(){
    p.classList.toggle("blue");
};