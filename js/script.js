let albumsDone = 6;
let albumsTotal = 35;

let albumActuel = 0;

let titres = [" ", "sunflower lake", "hyperpink", "Night shift", "computer garden", "plus2love", "son smile", "MACHINE", "The future of music", "Bismuth","Spiral","waterfall song","LOW RESOLUTION", "misplaced thoughts", "bridges", "FRAGILE", "Hit me up, sunshine!", "so ok","à contre courant", "64era", "The butterfly effect", "J'entends encore l'orage", "Why2k", "(not) so many options", "moon children", "stuck dans mon phone", "Decay", "god compleX", "Tow truck road trip", "everything we need is already here", "410,757,864,530 DEAD CAPS", "Hapiness has to be fought for."];

document.querySelector('#CD-button').disabled = true;
document.querySelector('#album-button').disabled = true;
document.querySelector('#photo-button').disabled = true;
  
function select_album(n) {
    albumActuel = n;

    console.log(n);
    let div = document.querySelector("#cd-album-photo");
    let titre = document.querySelector('#titre');
    let date = document.querySelector('#date');


    date.innerHTML= String("0" + n).slice(-2) + " Oct 2023";
    titre.innerHTML = titres[n];
    if (n > 31) {date.innerHTML = "done :)"; titre.innerHTML="Sans titre"}
    

    if (n<=albumsDone) { 
        select_display(0)
        div.innerHTML = '<img id="cd" class="cd" src="images/cd/'+albumActuel+'.png"/>';
        document.querySelector('#CD-button').disabled = false;
        document.querySelector('#album-button').disabled = false;
        document.querySelector('#photo-button').disabled = false;
    }
    else { div.innerHTML = '<img id="cd" class="cd" src="images/cd/'+albumActuel+'.png"/>';
        cd.src = "images/Sample_cd.png";
        document.querySelector('#CD-button').disabled = true;
        document.querySelector('#album-button').disabled = true;
        document.querySelector('#photo-button').disabled = true;
    }

    document.querySelector('#cd').style.animation = 'cd-turning 6s linear infinite';
    if (albumActuel == 6) {document.querySelector('#cd').style.animation = 'cd-turning 15s linear infinite';
    document.querySelector('#cd').style.width = '300px';
    document.querySelector('#cd').style.margin = '50px';}

}


function set_album_grid() {
    let grid = document.querySelector('#albums-grid');
    let cheminImage = "images/Sample_album.png";
  
    for (let i = 1; i <= albumsDone; i++) {
        grid.innerHTML += "<div class='grid-item' id='album"+i+"'><img src='images/albums/" + i + ".png'/></div>";
    }

    for (let i = albumsDone+1; i <= albumsTotal; i++) {
        grid.innerHTML += "<div class='grid-item' id='album"+i+"'><img src='" + cheminImage + "'/></div>";
    }
}


  set_album_grid();

  function set_album_click() {
    for (let i = 1; i <= albumsTotal; i++) {
        document.querySelector('#album' + i).addEventListener('click', function () {select_album(i);});
    }
  }

  set_album_click() ;

  function select_display(n) {
    let div = document.querySelector("#cd-album-photo");
    switch (n) {
        case 0:
            console.log('cd');
            div.innerHTML = '<img id="cd" class="cd" src="images/cd/'+albumActuel+'.png"/>';
            document.querySelector('#cd').style.animation = 'cd-turning 6s linear infinite';
            if (albumActuel == 6) {document.querySelector('#cd').style.animation = 'cd-turning 15s linear infinite';
            document.querySelector('#cd').style.width = '300px';
            document.querySelector('#cd').style.margin = '50px';} 
            break;
        case 1:
            console.log('album');
            div.innerHTML = '<img id="album-player" class="album-player" src="images/albums/'+albumActuel+'.png"/>';
            break;
        case 2:
            console.log('photo');
            div.innerHTML = '<img id="photo" class="photo" src="images/photos/'+albumActuel+'.png"/>';
            break;
    }}

    let stars = document.querySelector('.stars');
    stars.addEventListener('mouseover', function() {stars.innerHTML="★★★★★";});
    stars.addEventListener('mouseout', function() {stars.innerHTML="☆☆☆☆☆";});