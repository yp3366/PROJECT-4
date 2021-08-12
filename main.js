const joke = document.querySelector('.joke');
const btn = document.querySelector('#btn');
const jokediv = document.querySelector('.joke p')



btn.addEventListener('click', randomeizejoke);
randomeizejoke();

async function randomeizejoke(){
	const jokeResponse = await fetch ('https://icanhazdadjoke.com/',{
		headers: { 
			'Accept':'application/json'
		}
});
	const responsJason = await jokeResponse.json();
	jokediv.innerHTML = responsJason.joke;

}
