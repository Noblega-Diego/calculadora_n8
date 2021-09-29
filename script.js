
let ingreso = document.getElementById("ingreso");
let operacion = document.getElementById("operacion");
let typeOP = "";
let num1 = 0;
let num2 = 0;
let calculado = true;

const change = (element)=> {
    element.remove()
    ingreso.innerText += element.innerText;
}

const agregarNumero = (numero) => {
    if(calculado === true){
        borrar()
        calculado = false
    }
    if(parseInt(ingreso.innerText) === 0)
        ingreso.innerText = "";
    const agregar = () => {
        let numInsert = document.createElement("span");
        numInsert.classList.add("num-insert")
        numInsert.innerText = numero;
        ingreso.append(numInsert);
        setTimeout(change,100,numInsert)
    }
    return agregar;
}

const agregarOperacion = (op) => {
    typeOP = op;
    operacion.innerText = ingreso.innerText + " "+ op +" ";
    ingreso.innerText = " ";
    calculado = false;
}

const borrar = () => {
    ingreso.innerText = "0";
    operacion.innerText = "0";
}

const restar = () => {
    let num = parseInt(ingreso.innerText);
    if(!num)
        ingreso.innerText = "-";
    else{
        if(!calculado){
            agregarOperacion("-");
            num1 = num;
        }
    }
}

const sumar = () => {
    let num = parseInt(ingreso.innerText);
    if(num && !calculado){
        agregarOperacion("+");
        num1 = num;
    }
}

const multiplicar = () => {
    let num = parseInt(ingreso.innerText);
    if(num && !calculado){
        agregarOperacion("*");
        num1 = num;
    }
}

const dividir = () => {
    let num = parseInt(ingreso.innerText);
    if(num && !calculado){
        agregarOperacion("/");
        num1 = num;
    }
}
const sacarResultado = () => {
    if(calculado === false){
        resultado = 0;
        num2 =  parseInt(ingreso.innerText)
        switch (typeOP) {
            case "-":
                resultado = num1 - num2;
                calculado = true;
            break;
            case "+":
                resultado = num1 + num2;
                calculado = true;
            break;
            case "/":
                resultado = num1 / num2;
                calculado = true;
            break;
            case "*":
                resultado = num1 * num2;
                calculado = true;
                break;
            default:
                break;
        }
        if(calculado){
            operacion.innerText = operacion.innerText + " " + ingreso.innerText;
            ingreso.innerText = resultado;
            typeOP = "";
            num1 = 0;
            num2 = 0;
        }
    }
}

document.getElementById("panel").addEventListener("click",(e)=>{
    let operaciones = {"bt_1": agregarNumero(1),
                       "bt_2": agregarNumero(2),
                       "bt_3": agregarNumero(3),
                       "bt_4": agregarNumero(4),
                       "bt_5": agregarNumero(5),
                       "bt_6": agregarNumero(6),
                       "bt_7": agregarNumero(7),
                       "bt_8": agregarNumero(8),
                       "bt_9": agregarNumero(9),
                       "bt_0": agregarNumero(0),
                       "bt_res": restar,
                       "bt_sum": sumar,
                       "bt_div": dividir,
                       "bt_mul": multiplicar,
                       "bt_igl": sacarResultado,
                       "bt_c": borrar
                    }
    if(operaciones[e.target.id])
        operaciones[e.target.id]();
    
})