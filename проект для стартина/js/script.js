
const text = document.querySelector(".text1 p");
text.innerHTML = text.innerText.split("   ")

text.innerHTML = text.innerText.split("").map((letter, i) =>
`<span style="transform:rotate(${i * 8.1}deg")>${letter}</span>`
)
.join(" ");
$('.mediPlayer').mediaPlayer();