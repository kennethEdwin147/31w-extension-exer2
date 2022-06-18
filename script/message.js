(function() {
    let elmBoite__modale,
        elmBoite__x

    function creer_boite_modale() {
        
        elmBoite__modale = document.createElement('div');
        elmBoite__x = document.createElement('button');
        elmBody = document.querySelector('body');

        elmBoite__modale.appendChild(elmBoite__x)

        elmBoite__modale.classList.add('boite__modale');
        elmBoite__x.classList.add('boite__x');
        elmBoite__x.innerHTML = "X";

        elmBody.appendChild(elmBoite__modale);
    }
 
    creer_boite_modale();
    let elmOk = document.querySelector('#mon_bouton');


    elmOk.addEventListener('mousedown', function() {
        document.querySelector('.site').classList.add('opacity__modal');
        elmBoite__modale.classList.add('boite__modale__ouvrir');
    });

    
    elmBoite__x.addEventListener('mousedown', function() {
        document.querySelector('.site').classList.remove('opacity__modal');

        elmBoite__modale.classList.remove('boite__modale__ouvrir');
    });





    
})();