const  elementAll= document.querySelectorAll('.stack_item');
let first_text = document.querySelectorAll('#text');
function createText(text) {
  let new_text = text.innerText;
  let index=0;

  text.innerText=null;


const typeWriter = setInterval(() => {
    if(new_text.charAt(index) === ' '){
      text.innerText+='\u00A0';  
    }else{
      text.innerText+=new_text.charAt(index);
    }

    index++;

    if (index === new_text.length) {
      clearInterval(typeWriter);
    }
  },  50 );
  
}
let i = 1;
first_text.forEach((item)=>{
  if(i===1){
    setTimeout(() => {
      createText(item)
    },);
  }else if(i===2){
    setTimeout(() => {
      createText(item)
    }, 1000);
  }
  else if(i===3){
    setTimeout(() => {
      createText(item)
    }, 1000);
  }
  else if(i===4){
    setTimeout(() => {
      createText(item)
    }, 1000);
  }else if(i===5){
    setTimeout(() => {
      createText(item)
    }, 1000);
  }
  i++
})



function animate() {
  let i = 0
    elementAll.forEach(element => {
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
            i+=1;
        if (isInViewport(element) && i === 1) {
          element.classList.add('animated_now_1');
        }else if(isInViewport(element) && i === 2){
            element.classList.add('animated_now_2');
        }else if(isInViewport(element) && i === 3){
            element.classList.add('animated_now_3');
        }else {
          element.classList.remove('animated_now_1');
          element.classList.remove('animated_now_2');
          element.classList.remove('animated_now_3');
        }
    });




    
  }
  
  window.addEventListener('scroll', animate);