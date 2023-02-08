const container = document.querySelector('#container');

const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
    paragraph.textContent = "Hey, I'm red!";
    paragraph.style.color = 'red';

content.appendChild(paragraph);

const h3 = document.createElement('h3');
    h3.textContent = "I'm a blue h3!";
    h3.style.color = 'blue';

content.appendChild(h3);

const container2 = document.createElement('div');
    container2.classList.add('container2');
    container2.style = 'background-color: pink;';
    container2.style = 'border: 5px solid black;';


container.appendChild(container2);

const h1 = document.createElement('h1');
    h1.textContent = "I'm in a div!";

const p = document.createElement('p');
    p.textContent = "ME TOO!";

container2.appendChild(h1);
container2.appendChild(p);