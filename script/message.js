(function() {
    let elmBoite__modale = document.createElement('div'),
        elmBody = document.querySelector('body'),
        elmOk = document.querySelector('#mon_bouton');

    elmBoite__modale.classList.add('boite__modale');
    elmBody.appendChild(elmBoite__modale);

    elmOk.addEventListener('mousedown', function() {
        console.log('Brave fonctionne')
    });
    
})();