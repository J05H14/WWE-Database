window.onload = function(){
  const apiURL = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=135490";

  const app = document.getElementById("root");

  const logo = document.createElement('img');
  logo.setAttribute('class', 'logo');
  logo.src = "../images/nxt.png"

  const container = document.createElement("div");
  container.setAttribute('class', 'container');
  

  console.log(app == null);
  $.ajax({
    url: apiURL,
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data){
      $(data.player).each(function(index, value){
          console.log(value.strPlayer);
          const card = document.createElement('div')
          card.setAttribute('class', 'card');

          const h1 = document.createElement('h1');
          h1.textContent = value.strPlayer;

          const thumb = document.createElement('img');
          thumb.setAttribute('class', 'thumbnail');
          if(value.strThumb != null){
            thumb.src = value.strThumb;
          }
          else{
            thumb.src = "../images/vacant.jpg";
          }
          
          card.appendChild(thumb);
          card.appendChild(h1);
          container.appendChild(card);
          
          
          
      })
      app.appendChild(logo);
      app.appendChild(container);
    }
  });
}



