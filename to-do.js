/*

window.setTimeout(function(){ 

}; 
*/

var todos = ["Buy New Turtle"]; 

var input = prompt("what would you like to do? "); 

if(input === "list"){ 
    console.log(todos); 
} else if(input === "new") { 
    //ask for new todo 
    var newTodo = prompt("Enter a new Todo"); 
    //add a new Todo 
    todos.push(newTodo); 

}


console.log("connected"); 
