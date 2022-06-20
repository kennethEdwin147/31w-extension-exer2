(function() {
    let elmBoite__modale,
        elmBoite__x

    let googleMap = `
        <div class="google_map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.973181379699!2d-73.55548818400953!3d45.55086503567654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bf5bacbeffd%3A0x68ff300997eff5c!2sColl%C3%A8ge%20de%20Maisonneuve!5e0!3m2!1sfr!2sca!4v1655691966502!5m2!1sfr!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div>
        `;
    

    function creer_boite_modale() {
        
        elmBoite__modale = document.createElement('div');
        elmBoite__x = document.createElement('button');
        elmBody = document.querySelector('body');

        elmBoite__modale.appendChild(elmBoite__x)
        elmBoite__modale.insertAdjacentHTML('beforeend',googleMap);

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