const displayList =() => {
    const fruits_div = document.getElementById("fruits")
    const paragraphs = document.querySelectorAll("p")
    const fruits_ul = document.createElement("ul")

    for(let i = 0;i < paragraphs.length;i++){
        const fruit_li = document.createElement("li")
        fruit_li.textContent = paragraphs[i].textContent
        fruits_ul.appendChild(fruit_li)
    }
    
    fruits_div.innerHTML = ""
    fruits_div.appendChild(fruits_ul)
}