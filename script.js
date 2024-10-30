var emojiContainer = document.querySelector(".emoji-container");
var emojis = document.querySelector("#emojis");
var searchField = document.querySelector("#search-btn");
var formBtn = document.querySelectorAll(".form-btn");


function displayEmojis(){
    var allEmoji = emojiList.forEach(e => {
        let emoji = document.createElement("div");
        emoji.className = "emoji-div";
        emoji.innerHTML = `
        <p class="emojis">${e.emoji}</p>
        <p class="emoji-name">${e.aliases[0]}</p>
        `;
        emoji.style.height = "100px";
        emoji.style.width = "100px";
        emoji.style.fontSize = "60px";
        emoji.style.borderRadius = "50%";
        emojiContainer.appendChild(emoji);
        var EmojiC = document.querySelectorAll(".emoji-div");
    });
    var ems = document.querySelectorAll(".emoji-div");
    ems.forEach(ele => {
        ele.addEventListener("click" , ()=>{
            let emojiPara = ele.querySelector(".emojis");
            navigator.clipboard.writeText(emojiPara.innerText);
            let CopiedDiv = document.createElement("h1");
            CopiedDiv.className = "copiedText";
            CopiedDiv.innerText = "Emoji Copied";
            emojiContainer.appendChild(CopiedDiv)

        })
    });

    var em = document.querySelectorAll(".emoji-div");
    em.forEach(e =>{
        var emPara = e.querySelector(".emojis");
        e.addEventListener("click",(emo)=>{
            navigator.clipboard.writeText(emPara.innerText);
            let str = `${emPara.innerText} Copied`
            alert(str)
        })
    })
}

window.addEventListener("load", displayEmojis);

searchField.addEventListener("keyup", ()=>{
    let searchedValue = searchField.value.toLowerCase();
    let filteredEmojis = emojiList.filter((em)=>{
        if(em.description.includes(searchedValue) || em.aliases[0].includes(searchedValue)) return true;
    })
    emojiContainer.innerHTML = "";
    filteredEmojis.forEach(em => {
        let emojis = document.createElement("div");
        emojis.className = "emoji-div";
        emojis.innerHTML = `
        <p class="emojis">${em.emoji}</p>
        <p class="emoji-name">${em.aliases[0]}</p>
        `;
        emojis.style.height = "100px";
        emojis.style.width = "100px";
        emojis.style.fontSize = "60px";
        emojis.style.borderRadius = "50%";
        emojiContainer.appendChild(emojis);
    });

});

formBtn.forEach(btn =>{
    btn.addEventListener("click",(bt)=>{
        let val = btn.innerText.toLowerCase();
        emojiContainer.innerHTML="";
        let filteredEmojis = emojiList.filter((em)=>{
            return em.description.includes(val) || em.aliases[0].includes(val);
        })
        filteredEmojis.forEach(em => {
            let emojis = document.createElement("div");
            emojis.className = "emoji-div";
            emojis.innerHTML = `
            <p class="emojis">${em.emoji}</p>
            <p class="emoji-name">${em.aliases[0]}</p>
            `;
            emojis.style.height = "100px";
            emojis.style.width = "100px";
            emojis.style.fontSize = "60px";
            emojis.style.borderRadius = "50%";
            emojiContainer.appendChild(emojis);
        });
    })
})

