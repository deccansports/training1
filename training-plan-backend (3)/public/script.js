document.addEventListener("DOMContentLoaded", () => {
  const formContainer = document.getElementById("form-container");
  formContainer.innerHTML = \`
    <input type="text" id="name" placeholder="Name" />
    <input type="number" id="age" placeholder="Age" />
    <button onclick="startPlanChat()">Generate Plan</button>
  \`;
});

function startPlanChat() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const chatlog = document.getElementById("chatlog");
  chatlog.innerHTML += "<div><strong>You:</strong> " + name + " " + age + "</div>";
  chatlog.innerHTML += "<div class='chat-ai'><strong>BM Coach:</strong> Generating plan...</div>";
}

function handleChat() {
  const input = document.getElementById("chatinput").value.trim();
  const chatlog = document.getElementById("chatlog");
  chatlog.innerHTML += "<div><strong>You:</strong> " + input + "</div>";
  chatlog.innerHTML += "<div class='chat-ai'><strong>BM Coach:</strong> Typing response...</div>";
}
