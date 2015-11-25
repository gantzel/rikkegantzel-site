// Setting up the token
$.jribbble.setToken('eb2f71409041cec665c16eff0e8ae1af05cf3ac2d833682d3c67f08de7f53d8a');

$.jribbble.users('RikkeGantzel').shots({per_page: 36}).then(function(shots) {
  var html = [];

  shots.forEach(function(shot) {
    html.push('<li class="shots--shot">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '">');
    html.push('</a></li>');
  });

  $('.shots').html(html.join(''));
});