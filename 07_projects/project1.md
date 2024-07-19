# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("hitesh")


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```

## project 2 

```javascript 

const form = document.querySelector('form');

// const weight = parseInt(document.querySelector('#weight').value)
// this will give you empty value // 
form.addEventListener('submit',function(e){
  e.preventDefault(); // form ka default action rok do 

  const height = parseInt(document.querySelector('#height').value);// .value se value mil jaegi and parseInt se int mai convert ho jaegi value 

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if(height < 0 || height === '' || isNaN(height)){
    results.innerHTML = 'please give a valid height'
  }

  else if(weight < 0 || weight === '' || isNaN(weight)){
    results.innerHTML = 'please give a valid weight'
  }

  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span> ${bmi}</span>`

    if(bmi<18.6){
      results.innerHTML=`<span>Under weigth :${bmi}</span>`;
      }
      else if(bmi>18.6 && bmi<24.9){
          results.textContent=`Normal Weight:${bmi}`;
      }
      else{
          results.textContent=`Over Weight : ${bmi}`
      }
    
    
  }

});

```