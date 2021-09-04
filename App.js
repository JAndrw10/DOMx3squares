//when the browser first loads, DOMContent loaded
document.addEventListener("DOMContentLoaded", function () {
    let numOfSquares = 0;
    const arrOfColors = ["red", "green", "yellow", "brown", "orange", "magenta","navy", "grey" ,"crimson","aqua"];

    const addSquareButton = document.createElement("button");// buttom element created
    addSquareButton.textContent = "Add Square"; //label inserted into the body called add sqaure
    addSquareButton.addEventListener("click" , function () {  //when the button is clicked,a new div should be added to the page
        const newSquare = document.createElement("div");
        newSquare.className = "square";// gives a classname of square
        numOfSquares++; //prevents each square from having id=0  const newSquare = document.createElement('Div');//create a new div
        newSquare.setAttribute("id", numOfSquares);
        const numOfSquareSpan = document.createElement("span");
        numOfSquareSpan.textContent = numOfSquares;
        numOfSquareSpan.className = "hide-span"

        newSquare.appendChild(numOfSquareSpan);

        newSquare.addEventListener("mouseenter", function(){
            numOfSquareSpan.className = "show-span";
        });

        newSquare.addEventListener("mouseleave", function(){
            numOfSquareSpan.className = "hide-span";
        });

        newSquare.addEventListener("click", function (){
            const randomNum = Math.floor(Math.random() * 8);
            newSquare.style.backgroundColor = arrOfColors[randomNum]
        });


        newSquare.addEventListener("dblclick", function () {
            if (newSquare.id % 2 == 0) {
                if(newSquare.nextSibling) {
                    squareContainer.removeChild(newSquare.nextSibling);
                } else {
                    alert(" no square");
                }
            } else {
                if (newSquare.nextSibling) {
                    squareContainer.removeChild(newSquare.previousSibling)
                }else {
                    alert("no square");
                }
            }
        });

        squareContainer.appendChild(newSquare);//everytime button is clicked divs should appear in console
    });

    document.body.appendChild(addSquareButton);


    const squareContainer = document.createElement("div");
    squareContainer.id = "square-container";
    document.body.appendChild(squareContainer);
});

























    
