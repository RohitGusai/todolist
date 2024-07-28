const btn = document.querySelector('#btn');

const clear = ()=>
{
    document.getElementById('inputtext').value = '';
}

const increasethesizeofcontainer = () =>
{
    const increase = document.querySelector('.container');
    // increase.style.width = (increase.offsetWidth + 50) +'px';
    increase.style.height = (increase.offsetHeight + 10) +'px';
}

btn.addEventListener('click',() =>
{
    const text = document.getElementById('inputtext').value;
    // document.getElementById('demo').innerHTML = text;
    const creation = document.createElement('div');
    creation.className = 'created-element';
    const para = document.createElement('p');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    btn1.className = 'button1';
    btn2.className = 'button2'; 
    btn2.innerText = 'Delete';
    // btn2.style.backgroundColor = 'green';
    // btn2.style.color = 'white';
    // btn1.style.backgroundColor = 'green';
    // btn1.style.color = 'white';
    btn1.innerText = 'Edit';
    btn1.style.marginLeft = '70%';
    creation.appendChild(para); 
    creation.appendChild(btn1);
    creation.appendChild(btn2);
    
    const add = document.createTextNode(text);
    creation.style.backgroundColor  = 'rgba(62, 53, 234, 0.8)';
    creation.style.color = 'white';
    creation.style.marginTop = '15px';
    creation.style.padding = '5px';
    para.appendChild(add);

    const element = document.getElementById('element');
    element.appendChild(creation);

    //button creation

    btn1.addEventListener('click', function ()
    {
        const updatedtext = prompt('Enter the Updated text ' +para.textContent);
        if(updatedtext != null)
        {
            para.textContent = updatedtext;
        }

    });
    
    btn2.addEventListener('click', () => {
        element.removeChild(creation);
    });
    clear();

    increasethesizeofcontainer();
    

});



