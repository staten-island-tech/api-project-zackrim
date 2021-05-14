import { DOMSelectors } from "./DOM";

///// CODE /////

/* const query = async function () {
  try {
    const response = await fetch();
    // `https://api.themoviedb.org/3/discover/movie?sort_by=average_vote.asc&vote_count.gte=10000&vote_average.gte=8&api_key=${key}`
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("something went wrong");
  }
};

query(); */

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // test
    console.log(DOMSelectors.searchArea.value);
    DOMSelectors.list.innerHTML = "";
    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {
      try {
        const response = await fetch(
          //`https://balldontlie.io/api/v1/players?search=${searchParams}`
          `https://app.cors.bridged.cc/?method=GET&url=https://balldontlie.io&path=/api/v1/players&params=[{"key":"search","value":"${searchParams}","active":true}]`
        );
        const data = await response.json();
        data.data.forEach((player) => {
          console.log(player.last_name);
          DOMSelectors.list.insertAdjacentHTML(
            "beforeend",
            `<div class="player-row">
              <div class="player-name">${player.last_name}</div>
             </div>`
          );
        });
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    };
    searchQuery();
  });
};

listen();
