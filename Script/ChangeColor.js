function hover(element,x) {
switch (x) {
  case 1:
    element.setAttribute('src', 'Imagine/Icon/bank_changed.png');
    break;
  case 2:
    element.setAttribute('src', 'Imagine/Icon/telephone_changed.png');
    break;
  case 3:
    element.setAttribute('src', 'Imagine/Icon/home_changed.png');
    break;
  case 4:
    element.setAttribute('src', 'Imagine/Icon/download_changed.png');
    break;
  default: 
    break;
  }
}
function unhover(element,x) {
  switch (x) {
    case 1:
      element.setAttribute('src', 'Imagine/Icon/bank.png');
      break;
    case 2:
      element.setAttribute('src', 'Imagine/Icon/telephone.png');
      break;
    case 3:
      element.setAttribute('src', 'Imagine/Icon/home.png');
      break;
    case 4:
      element.setAttribute('src', 'Imagine/Icon/download.png');
      break;
    default: 
      break;
  }
}