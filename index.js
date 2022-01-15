function valueButton(e){
    calculatorForm.screen.value += e.value;
}
function Clear(){
    calculatorForm.screen.value = null;
}
function Calculate(){
    calculatorForm.screen.value = eval(calculatorForm.screen.value);
}