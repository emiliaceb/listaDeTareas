/* 3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y 
un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista 
debe poder ser eliminado con un botón creado para ese fin. */

// const input = document.querySelector('input');
const botonAgregar = document.querySelector('.botonAgregar');
const lista = document.querySelector('ul');
const listaVacia = document.querySelector('.libre');

const agregarTarea = (e) => {
    e.preventDefault();
    const input = document.querySelector('input').value;
    if(input !== ''){
        const tarea = document.createElement('li')
        tarea.textContent= input;
        const lista = document.querySelector('ul');
        lista.appendChild(tarea);
        tarea.appendChild(borrarElementos()); //aqui llamo a la funcion 
        document.querySelector('input').value= '';

        listaVacia.style.display = "none";
    }
    else{
        alert('Por favor escribe una tarea');
    }
    
}

//Traer formulario
const formulario = document.querySelector('form');
formulario.addEventListener('submit',agregarTarea);

const borrarElementos = () =>{
    const botonBorrar = document.createElement('button');
    botonBorrar.textContent='X';
    botonBorrar.className = 'btn-danger';

    botonBorrar.addEventListener('click',(e) =>{
        //queremos borrar el elemento que lo contiene, el padre
        const item = e.target.parentElement;
        lista.removeChild(item);

        const items = document.querySelectorAll('li');
        if(items.length === 0){
            listaVacia.style.display= "block";
        }
    })
    return botonBorrar;
}