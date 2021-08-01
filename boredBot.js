const task = document.getElementById('task');
const btn = document.getElementById('button');
const title = document.getElementById("title");
const body = document.getElementById('body')

btn.addEventListener('click' , () => {
    
    fetch('https://apis.scrimba.com/bored/api/activity')
    .then(res => res.json())
    .then(data => {
        task.style.display = "block"
        task.textContent = data.activity
        title.textContent = "🦾 HappyBot🦿";
        body.style.backgroundImage = "linear-gradient(120deg, #f6d365 0%, #fda085 100%";
        body.style.color = "black"
    });
})
// console.log(body)

