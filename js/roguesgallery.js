$(document).ready(function(){

      $('#searchBar').magicSuggest({
        data: ['medieval','steampunk','modern','post-apocolyptic','undead','chickens'],
        placeholder: 'Search for TAGS'
      });

      $('#btnSearch').click(function(){
        $('#content').html('<h2>Search Results</h2>');
      });

});
