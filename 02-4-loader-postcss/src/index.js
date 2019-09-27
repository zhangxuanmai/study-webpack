import {createTitle} from './createTitle'
import style from './index.scss';

createTitle();

let dom = document.getElementById('root');
let header = document.createElement('div');
header.innerText = 'hello world!';
header.classList.add(style.title);
dom.append(header)