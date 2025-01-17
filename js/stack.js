//Container Variable Definition 
const container = document.getElementById('animation-container')
const structure = 'stack'

const createElement = function(value) {
    const element = document.createElement('div');
    element.classList.add('hidden')
    element.classList.add(structure)
    if(value==null) {
        element.innerHTML = '-'
    }   
    else {
        element.innerHTML = value
    }
    container.prepend(element)        
}


//  ------------------------------ ANIMATIONS FUNCTIONS -------------------------------------------------

const movePushingElement = function() {
    let target = document.getElementById('pushingData')
    let arrayElements = document.getElementsByClassName('stack')

    //  Some Unkown Error BruteForcely Solved
    let destination = arrayElements[1]
    if(arrayElements.length == 1) {
        destination = arrayElements[0]
    }

    let x = destination.offsetLeft - target.offsetLeft
    let y = destination.offsetTop -  target.offsetTop

    anime({
        targets: target,
        translateY : [
            {value : y, easing : 'linear'}
        ],
        translateX : {
            value : x,
        },
        complete: function() {
            document.getElementsByClassName('stack')[0].classList.remove('hidden');
            anime.set(target, {
                translateX : 0,
                translateY : 0
            })
        }
      },
      );
}


const movePopingData = function() {
    let destination = document.getElementById('popingData')
    target = document.getElementsByClassName('stack')[0]

    let x = destination.offsetLeft - target.offsetLeft
    let y = destination.offsetTop -  target.offsetTop

    anime({
        targets: 'stack',
        translateY : [
            {value : y, easing : 'linear'}
        ],
        translateX : {
            value : x,
        },
        complete: function() {
            document.getElementsByClassName('stack')[0].classList.remove('hidden');
            anime.set(target, {
                translateX : 0,
                translateY : 0
            })
        }
      },
      );
}


// ------------------ Implementation of stack with animation  -------------------------
// Stack Implementation with array
class Stack {
  
    dataArray = new Array();
    
    push(value) {

        if(value == 0){
    document.getElementById('error').style.display = 'block';
    return
} else{
    document.getElementById('error').style.display = 'none';
} 

        if(this.dataArray.length > 12) {
            window.alert("Stack out of range")
        }
        else {

        document.getElementById('pushingData').innerHTML = value
        createElement(value)
        this.dataArray.push(value)
        movePushingElement() 
        }
    }

    pop() {
        movePopingData()
        const list = document.getElementsByClassName(structure)
        list[0].remove()
        document.getElementById('popingData').innerHTML = this.dataArray.pop()
       
    }

    reset = function() {
        container.innerHTML = ''    
        this.dataArray = new Array();
        document.getElementById('error').style.display = 'none';
        
    }

    peek() {
        const list = document.getElementsByClassName(structure)
        document.getElementById('popingData').innerHTML = this.dataArray[this.dataArray.length-1]

    }

    
}

// Function that will be used by the browser
let stack = new Stack()





