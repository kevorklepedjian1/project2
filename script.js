
fetch("http://lnk2.hetnet.co/zx.aspx?lpid=lp2")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
    
  })
  .then(data => {
    console.log(data);
    displayCocktail(data)
    displaying(data)
    displayingh(data)
   
  })
  .catch((error) => console.error("FETCH ERROR:", error));

 
  
  function displayCocktail(data) {
    const cocktail = data[0];
   const cocktailDiv = document.getElementById("cocktail");
   const cocktailImg = document.createElement("img");
   cocktailImg.src = cocktail.imglogo;
   cocktailDiv.appendChild(cocktailImg);
   }   
  
   function displaying(data) {
    const cocktail = data[0];
   const cocktailDiv = document.getElementById("cocktai");
   const cocktailImg = document.createElement("img");
   cocktailImg.src = cocktail.imgbg02;
   cocktailImg.classList.add("img1")
   cocktailDiv.appendChild(cocktailImg);
   const heading = document.createElement("h1");
  heading.innerHTML = cocktail.titleen;
  const cocktailImg1 = document.createElement("img");
   cocktailImg1.src = cocktail.imgfood03;
   cocktailImg1.classList.add("img2")
   cocktailDiv.appendChild(cocktailImg1);
  cocktailDiv.appendChild(heading);
   }  
   function displayingh(data) {
    const cocktail = data[0];
    const cocktailDiv = document.getElementById("cockta");
   
    
    const cocktailImg = document.createElement("img");
    cocktailImg.src = cocktail.imgbg01;
    cocktailImg.classList.add("img3")
    cocktailDiv.appendChild(cocktailImg);
   const cocktailImg1 = document.createElement("img");
    cocktailImg1.src = cocktail.imgfood02;
    cocktailImg1.classList.add("img4")
    const heading = document.createElement("h2");
    const heading1 = document.createElement("h2");
 
 
   
    cocktailDiv.appendChild(cocktailImg1);

    
   
   }  
  