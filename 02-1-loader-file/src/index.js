import avatar from './nick.jpg';

let dom = document.getElementById('root'); 
let img = new Image(avatar);
img.src = avatar;
img.style.width = '100px';
img.style.height = '100px';
dom.append(img);