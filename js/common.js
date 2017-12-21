var tab, content;

window.onload = function(){
	tab = document.getElementsByClassName('tab');
	content = document.getElementsByClassName('content');
	hideContent(1);
};

function hideContent(a){
	for(var i = a; i < content.length; i++){
		content[i].classList.remove('show');
		content[i].classList.add('hide');
		tab[i].classList.remove('border');
	}
};

document.getElementById('tabs').onclick = function(e){
	var target = e.target;
	if(target.className == 'tab'){
		for(var i=0; i<tab.length; i++){
			if(target == tab[i]){
				showContent(i);
				break;
			}
		}
	}
};

function showContent(b){
	if(content[b].classList.contains('hide')){
		hideContent(0);
		tab[b].classList.add('border');
		content[b].classList.remove('hide');
		content[b].classList.add('show');
	};
};