const teamMembers = [
];

const apiUrl= 'https://boolean-teachers.github.io/mock/api/members/'
//richiamo la card html

function renderCards(dati){

  const elementCard = document.getElementById('cards-container')
  
  let htmlCards = ''
  
  for (const teamMember of dati) {
    let card = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${teamMember.img}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${teamMember.name}</h5>
    <p class="card-text">${teamMember.role}</p>
    <a href="mailto:EMAIL">${teamMember.email}</a>
    </div>
    </div>`
    
    htmlCards += card
  }
  
  elementCard.innerHTML = htmlCards
  
}

axios.get(apiUrl).then(response =>{
  renderCards(response.data);
}).catch(err => {
console.log('Errore '. err.message);
document.getElementById('cards-container').innerHTML = 'Errore chiamata';
}).finally(()=>{
  console.log('chiamata terminata');
})

