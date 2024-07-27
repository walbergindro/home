function entrando(ent){
    localStorage.setItem('entrar', ent);

    window.location.href = 'envio.html';
}

let envio = localStorage.getItem('entrar')

document.getElementById('image').src = envio

