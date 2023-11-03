# Projects related to DOM

## all projects link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 : jis box par click karege body ka color usi box ki tarah ho jayega

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach((button)=>{
  console.log(button);
  button.addEventListener("click", (event)=>{
   
    console.log(event.target.id);
    if(event.target.id === 'grey'){
      body.style.backgroundColor = event.target.id;
    }

    if(event.target.id === 'white'){
      body.style.backgroundColor = event.target.id;
    }

    if(event.target.id === 'blue'){
      body.style.backgroundColor = event.target.id;
    }

    if(event.target.id === 'yellow'){
      body.style.backgroundColor = event.target.id;
    }
    
  })

})

```


## Project 2 : BMI Calculator

```javascript
const form = document.querySelector("form");

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if(height === "" || height<0 || isNaN(height)){
    results.innerHTML = `Please enter valid height ${height}`;
  }else if(weight === "" || weight<0 || isNaN(weight)){
    results.innerHTML = `Please enter valid weight ${weight}`;
  }else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span><br>`;
  
    // console.log(bmi);
    const p = document.createElement("p");
    p.setAttribute("id", "message");
    results.appendChild(p);

    if(bmi < 18.6){
      message.innerHTML = `<span>You are Under Weight</span>`;
    }else if(bmi > 18.6 && bmi<24.9){
      message.innerHTML = `<span>You are in Normal Range</span>`;
    }else if(bmi> 24.9){
      message.innerHTML = `<span>You are Overweight</span>`;
    }
  }
});

```