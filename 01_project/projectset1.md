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