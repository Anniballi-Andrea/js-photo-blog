/*CONSEGNA

Milestone 1

Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: concentriamoci su HTML e CSS riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

Milestone 2

Utilizzando Postman, testiamo una chiamata a questo endpoint: 

https://lanciweb.github.io/demo/api/pictures/

Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

la chiamata mi da come risultato un array di oggetti che contiene il contenuto da inserire nelle card;
gli oggetti sono composti da: un id univoco utile per dare un id unico ai contenuti della card; un titolo; una data; l'url dell'immagine da aggiungere
ciclando l'array posso crearmi una costante che contiene l'immagine da inserire nella card con sotto la data in cui è stata scattata ed il luogo tramite un
template litteral (``); l'id posso inoltre sfruttarlo per dare un id unico ad ogni card come ad esempio  id="card${id}" che al primo ciclo verrebbe come id:
card1, utile in futuro per andare a prendere i singoli nodi all'interno della card.


Milestone 3

Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!



Font utilizzati:

titoli:  ‘Edu Tas Beginner’, sans-serif;d
ate: ‘Sometype Mono’, ‘monospace’;
(Dovreste sapere a questo punto cosa e come prendere da Google Fonts… 😉)

Bonus

rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata
 */

/* Milestone 3

Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!*/
//devo prima prendere il nodo della dom dove inserire le card altrimenti non posso fa niente e lo salvo in una costante

const rowEl = document.querySelector('.row')
const overBtn = document.querySelector('button')
const overImg = document.querySelector('.overlay img')
overBtn.addEventListener('click', () => {
    overBtn.style.display = 'none'
    overImg.style.display = 'none'
})
//console.log(rowEl)

/*mi salvo per sicurezza le informazioni da inserire in un commento
<div class="col col-md-2 col-lg-4">
                    <div class="card_edit">
                        <div>
                            <img src="./assets/img/fabio_green_long_hair.png" alt="">
                        </div>
                    </div>
                    <div class="card_body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        
                    </div>
                </div>

*/

//sfrutto la chiamata AJAX per ottenere l'array di oggetti da cui devo prendere le informazioni per comporre la pagina e le salvo in un array
fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => response.json())
    .then(data => {
        //dichiaro una variabile che si aggiornerà ad ogni ciclo con nuove parti di codice html
        let replaceInner = ``

        //ciclo l'array di informazioni per salvarmi i singoli oggetti in delle variabili
        data.forEach(el => {
            const idEl = el.id
            const titleEl = el.title
            const dateEl = el.date
            const imgEl = el.url
            //console.log(idEl, titleEl, dateEl, imgEL)
            replaceInner += `
            <div  class="col-12 col-md-6 col-lg-4">
                <div class="my_card">
                    <img class="card_fix" src="./assets/img/pin.svg" alt="">
                    <div class="card_edit">  
                        <div class="img_container">
                            <img id="${idEl}"src="${imgEl}" alt="un immagine di ${titleEl}">
                        </div>
                    </div>
                    <div class="card_body">
                        <p>
                        ${dateEl}
                        </p>
                        <h4>
                        <strong>${titleEl}</strong>
                        </h4>
                    </div>
                </div>
            </div>
            `





        });
        //console.log(replaceInner)
        //ad ogni ciclo stampo nel dom una nuova card contenente le informazioni che voglio

        rowEl.innerHTML = replaceInner
        data.forEach(el => {
            //console.log(el)
            let imgCardId = el.id
            let imgCard = el.url

            //console.log(imgCardId)
            const imgCardEl = document.getElementById(imgCardId)
            //console.log(imgCardEl)

            imgCardEl.addEventListener('click', () => {
                //console.log(overImg)
                overBtn.style.display = 'block'
                // console.log(imgCard)
                overImg.src = imgCard
                overImg.style.display = 'block'

            });
            
            
            

        })



    })

/* CONSEGNA

Milestone 1

Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.

Milestone 2

Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .

Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.



Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

Milestone 3

Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.

Ci sono diversi modi di farlo, prova a sperimentare 🙂*/