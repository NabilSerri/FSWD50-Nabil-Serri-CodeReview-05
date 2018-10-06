$(document).ready(function(){
for (var i = 0; i< MovieFactory.length ; i++) {
	$("#row").append(" <div class='col-lg-6 col-xs-12 text-center'><div id='item'><div id='left'><img id='img' src='"+MovieFactory[i].image+
		"'></div><div id='right'><div id='name'><h2>"+MovieFactory[i].MovieName+
		"</h2><h5 id='des'>"+MovieFactory[i].description+"</h5></div><div id='logo'><div class='like-btn btn'><h1 id='like-text'>Like</h1><img id='logo-img'src='img/thumbs-up.png'></div><span class='likeAmount'>"+MovieFactory[i].Likes
		+"</span></div></div></div>");
	};
for(let j=0; j<MovieFactory.length; j++) {

	$(".like-btn:eq("+j+")").click(function(){
		$(".likeAmount:eq("+j+")").text(MovieFactory[j].Likes+1);
	});
};

});
function combare(a,b){
		const likeA = a.Likes;
		const likeB = b.Likes;
  	let comparison = 0;
  	if (likeA > likeB) {
    comparison = -1;
  } else if (likeA < likeB) {
    comparison = +1;
  }
  return comparison;
}
	  
$("#sort-btn").click(function(){

  $("#row").text("");
  var sorted= MovieFactory.sort(combare);
for (let k = 0; k< sorted.length ; k++) {
  
  $("#row").append(" <div class='col-lg-6 col-xs-12 text-center'><div id='item'><div id='left'><img id='img' src='"+sorted[k].image+
    "'></div><div id='right'><div id='name'><h2>"+sorted[k].MovieName+
    "</h2><h5 id='des'>"+sorted[k].description+"</h5></div><div id='logo'><div class='like-btn btn'><h1 id='like-text'>Like</h1><img id='logo-img'src='img/thumbs-up.png'></div><span class='likeAmount'>"+sorted[k].Likes
    +"</span></div></div></div>");
    $(".like-btn:eq("+k+")").click(function(){
    $(".likeAmount:eq("+k+")").text(MovieFactory[k].Likes+1);
  });
}
});
