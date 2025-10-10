function spawnNews(header, text)
{
	let parent = document.getElementById('main');
	let child = document.createElement('div');
	child.className = 'openedNews';

	child.onclick = function() { despawnNews('openedNews') };

	let openedNews = document.createElement('div');
	openedNews.className = 'openedNewsNews';

	child.appendChild(openedNews);
	openedNews.innerHTML =  (`<h2>${header}</h2> <p>${text}</p>`);

	parent.appendChild(child);
}

function despawnNews(class_name)
{
	let openedNews = document.getElementsByClassName(class_name)[0];
	openedNews.remove();
}