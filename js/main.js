function texto() {
    var mal = document.getElementById('mal')
    var bien = document.getElementById('bien')
    var numerobinario = document.getElementById('numerobinario').value
    var procesando = document.getElementById('procesando')
    procesando.innerHTML = parseInt(numerobinario, 2);
    var ultimodigito = numerobinario.charAt(numerobinario.length - 1)
    
    if (numerobinario == '') {
        procesando.innerHTML = ''
    }
    if (ultimodigito == 0 || ultimodigito == 1) {
        bien.innerHTML = 'Here is your decimal'
        mal.innerHTML = ''
    } else {
        procesando.innerHTML = 'Waiting for a valid binary number...'
    }
    if (ultimodigito >> 1 || ultimodigito >> 9999) {
        mal.innerHTML = 'You entered a non binary digit (please enter only 0 or 1)'
        bien.innerHTML = ''
    }
    if (ultimodigito == '') {
        mal.innerHTML = ''
        bien.innerHTML = ''
    }
}