
//CENSURA OBRA
function incrementaValorICanviaImatge(idNumero, idImatge, baseImatgeCensura) {
  const increments = [0, 25, 100, 250, 400, 800];
  const element = document.getElementById(idNumero);
  const imgElement = document.getElementById(idImatge);

  let inicial = parseInt(element.getAttribute("data-inicial"));
  let clicks = parseInt(element.getAttribute("data-clicks"));

  // Comprova que l'obra no estigui venuda
  if (element.innerText.includes("OBRA VENUDA!")) return;

  if (clicks < increments.length) {
    // Calcular nou valor
    let nouValor = inicial + inicial * (increments[clicks]/100);

    // Actualitzar el valor intern per a futurs càlculs
    element.setAttribute("data-inicial", nouValor);

    // Mostrar amb punts de milers
    element.innerText = "Preu: " + nouValor.toLocaleString('ca-ES') + " €";

    // Actualitzar imatge censurada
    let numeroImatge = baseImatgeCensura + clicks;
    imgElement.src = "img" + numeroImatge + ".png";

    // Incrementar clics
    element.setAttribute("data-clicks", clicks + 1);
  }
}


// VENDRE OBRA
function vendreObra(idImatge) {
  // Trobar el bloc del producte
  const imgElement = document.getElementById(idImatge);
  const bloc = imgElement.closest(".bloc-producte");

  // Substituir la descripció per "OBRA VENUDA" amb estil inspirat en AUCTION
  const textFixElement = bloc.querySelector(".text-fix");
  textFixElement.innerText = "OBRA VENUDA";
  textFixElement.style.color = "black";
  textFixElement.style.fontSize = "5rem";
  textFixElement.style.fontWeight = "500";
  textFixElement.style.letterSpacing = "0.03em";
  textFixElement.style.fontFamily = "'Arial Narrow', 'Helvetica Neue', sans-serif";
  textFixElement.style.textAlign = "center";
  textFixElement.style.textTransform = "uppercase";
  textFixElement.style.lineHeight = "1";
  textFixElement.style.transform = "scaleY(1.3)"; 
  textFixElement.style.marginTop = "1rem";

  // Desactivar els botons
  const botons = bloc.querySelectorAll("button");
  botons.forEach(boto => boto.disabled = true);
}


//TIPUS DE SCROLL
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const h1 = document.querySelector('h1');

  if (h1) {
    const maxScroll = window.innerHeight * 0.8;
    const minScale = 1.2; // mínim estirament
    const maxScale = 2.75; // inicial

    const progress = Math.min(scrollY / maxScroll, 1);
    const newScale = maxScale - (maxScale - minScale) * progress;

    h1.style.transform = `scaleY(${newScale})`;
  }
});

