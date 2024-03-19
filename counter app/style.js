const countValue = document.querySelector('#counter');

const increment = () => {
    //get value
    let value = parseInt(countValue.innerText);
    //update value
    value = value+1;
    //set value
    countValue.innerText=value;
};

const decrement = () => {
    //get value
    let value = parseInt(countValue.innerText);
    //update value
    value = value-
    1;
    //set value
    countValue.innerText=value;
};