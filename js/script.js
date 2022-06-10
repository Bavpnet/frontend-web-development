

    const gen = document.getElementById("generate");
    const type = document.getElementById("type");
    const suggest= document.getElementById("suggest");
    const num= document.getElementById("participants")
    async function f(){
    const res = await fetch("https://www.boredapi.com/api/activity/ ");
    const json = await res.json();
    return json;
}

    function randomColors() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    gen.addEventListener("click",() => {
    f().then((activity) =>{
        suggest.textContent = activity.activity;
        suggest.style.color = randomColors();
        type.textContent = activity.type;
        type.style.color = randomColors();
        num.textContent = activity.participants;
        num.style.color = randomColors();
    });
});
