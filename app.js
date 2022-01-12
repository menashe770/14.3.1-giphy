const $gifArea = $('#gif-area');
const $search = $('#search');

function addGif(response) {
  let numResults = response.data.data.length;
  if (numResults) {
    let randomIndex = Math.floor(Math.random() * numResults);
    let $newGif = $('<img>', {
      src: response.data.data[randomIndex].images.original.url,
      class: 'w-100'
    });
    $gifArea.append($newGif);
  }
}

$('form').on('submit', async function (e) {
  e.preventDefault();

  let searchTerm = $search.val();
  $search.val('');

  const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
    params: {
      q: searchTerm,
      api_key: 'KSMulWpN0HCwS1yjWYTQI0Hpb1nqRyqj'
    }
  });
  addGif(response);
});

// Delete all button
$('#remove').on('click', function () {
  $gifArea.empty();
});
