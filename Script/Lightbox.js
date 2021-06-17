function openModal() {
  document.getElementById('myModal').style.display = "block";                                         
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var id_gallery = 1;    
pics(id_gallery);

function plus_photo(n) {
  pics(id_gallery += n);
}

function pic_now(n) {
  pics(id_gallery = n);
} 

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; 
  }

  switch (event.key) {
    case "ArrowLeft":
      plus_photo(-1);
      break;
    case "ArrowRight":
      plus_photo(1);     
      break;
    case "Escape":
      closeModal();
      break;
    default:
      return; 
  }
  event.preventDefault();
}, true);

function pics(n) {
 
  var j, medzisucet_x, medzisucet_y, pomer;
  var photo = document.getElementsByClassName("mySlides");
  var okno_vyska = (window.innerHeight > 0) ? window.innerHeight : screen.height;
  var okno_sirka = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  var vpravo_pozicia = 0;

/* Album #1 */
  if (n > 8 && n < 10){
    id_gallery = 1;
  }
  if (n < 1){
    id_gallery = 8;
  }
/* Album #2 */
  if (n > 20 && n < 22){
    id_gallery = 11;
  }
  if (n > 9 && n < 11){
    id_gallery = 20;
  }
/* Album #3 */
  if (n > 41 && n < 43){
    id_gallery = 23;     
  }
  if (n < 23 && n > 21){
    id_gallery = 41;
  }
/* Album #4 */
  if (n > 60 && n < 62){
    id_gallery = 44;     
  }
  if (n < 44 && n > 42){
    id_gallery = 60;
  }  
/* Album #5 */
  if (n > 79 && n < 81){
    id_gallery = 63;     
  }
  if (n < 63 && n > 61){
    id_gallery = 79;
  }  
  
  for (j = 0; j < 81; j++) { 
      photo[j].style.display = "none";
  }
  photo[id_gallery-1].style.display = "block";
  
  if (okno_sirka >= 1500) {okno_vyska = 878}
  if (okno_sirka > 1903) {
    vpravo_pozicia = ((okno_sirka - 1903) / 2 ) + 25;
    document.getElementById("closeButtonLightbox").style.right = vpravo_pozicia + "px";
  }     
  medzisucet_x = okno_vyska - 100 - 28;
  
  switch (id_gallery) {
/* Album #1 */
    case 1:
      pomer = 1.3387;
      break;
    case 2:
      pomer = 1.501;
      break;
    case 3:
    case 4:
    case 6:
      pomer = 0.5626; 
      break;
    case 5:
      pomer = 0.5493; 
      break;
    case 7:
    case 8:
      pomer = 1; 
      break;
/* Album #2 */
    case 11:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      pomer = 1.503;
      break;
    case 12:
      pomer = 1.34;
      break;
    case 20:
      pomer = 1;
      break;
/* Album #3 */
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:                         
      pomer = 1.499;
      break;
/* Album #4 */
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
      pomer = 1.333;
      break;
    case 50:
      pomer = 1.200;
      break;
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 58:
    case 59:
    case 60:
      pomer = 1.4986;
      break;
    case 57:
      pomer = 0.6666;
      break;
/* Album #5 */
    case 63:
    case 65:
    case 72:
    case 73:
      pomer = 0.6666;
      break;
    case 64:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
      pomer = 1.4986;
      break; 
    default:
      pomer = 0;
      break;  
  }
  
  medzisucet_y = pomer * medzisucet_x;
  document.getElementById('m-c').style.maxWidth = medzisucet_y +"px";
  medzisucet_y = 0;   
}
