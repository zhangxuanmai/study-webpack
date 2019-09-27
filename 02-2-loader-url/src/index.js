import avatar from './nick.jpg';


let img = new Image(avatar);
img.src = avatar;
img.style.width = '100px';
img.style.height = '100px';

let dom = document.getElementById('root'); 
dom.append(img);