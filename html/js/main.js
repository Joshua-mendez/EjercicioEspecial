const btnLoad = document.getElementById("btn btn-primary my-2");
const URLMain = "https://api.escuelajs.co/api/v1/products";
const image = document.getElementById("bd-placeholder-img card-img-top 1");


btnLoad.addEventListener("click", function(event) {
  event.preventDefault();



})

function getData(cat){

    const options = {"method": "GET"};
  fetch(URLMain+cat, options)
  .then((response) => {
    console.log(response);
    response.json().then((res)=>{

    })
  })

}

function card(){
  
}