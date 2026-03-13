function sendMessage(){

let input=document.getElementById("userInput")
let chatBox=document.getElementById("chatBox")

let userText=input.value.trim()

if(userText==="") return

// show user message
let userMessage=document.createElement("div")
userMessage.className="user-message"
userMessage.innerText=userText

chatBox.appendChild(userMessage)

input.value=""

// bot response
let botReply=getBotResponse(userText.toLowerCase())

let botMessage=document.createElement("div")
botMessage.className="bot-message"

setTimeout(()=>{
botMessage.innerText=botReply
chatBox.appendChild(botMessage)
chatBox.scrollTop=chatBox.scrollHeight
},500)

}

// chatbot knowledge
function getBotResponse(input){

if(input.includes("machine learning"))
return "Machine learning is a branch of Artificial Intelligence that allows computers to learn from data."

else if(input.includes("supervised learning"))
return "Supervised learning is a type of machine learning where models are trained using labeled data."

else if(input.includes("unsupervised learning"))
return "Unsupervised learning finds patterns in data without labeled outputs."

else if(input.includes("reinforcement learning"))
return "Reinforcement learning is a method where an agent learns by interacting with the environment and receiving rewards."

else if(input.includes("deep learning"))
return "Deep learning is a subset of machine learning that uses neural networks with multiple layers."

else if(input.includes("overfitting"))
return "Overfitting occurs when a model learns the training data too well and fails to generalize to new data."

else if(input.includes("underfitting"))
return "Underfitting happens when a model cannot capture the underlying pattern of the data."

else
return "Sorry, I only answer Machine Learning related questions."
}