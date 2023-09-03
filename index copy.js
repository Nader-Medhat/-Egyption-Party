

var Prouducts = []


function addproudect() {


    var Prouduct = {
      name: document.getElementById("ProuductNameInput").value,
      price: document.getElementById("ProuductPriceInput").value,
      category: document.getElementById("ProuductCategoryInput").value,
      desc: document.getElementById("ProuductdescInput").value,
    }

    Prouducts.push(Prouduct)

    console.log(Prouduct);
  
}



