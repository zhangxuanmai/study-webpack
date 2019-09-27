export const createTitle = () => {
  let dom = document.getElementById('root');
  let header = document.createElement('div');

  header.innerText = 'hello world!';
  header.classList.add('title');

  dom.append(header)
}