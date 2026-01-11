const API_URL = "http://localhost:3001/users";

async function fetchUsers() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    
    const list = document.getElementById("users");
    list.innerHTML = "";
    
    data.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`; // .textContent is safer than .innerText
      list.appendChild(li);
    });
  } catch (err) {
    console.error("Error fetching users:", err);
  }
}

async function addUser() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  const userData = { name: nameInput.value, email: emailInput.value };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    });

    if (res.ok) {
      nameInput.value = ""; // Clear inputs
      emailInput.value = "";
      fetchUsers();
    }
  } catch (err) {
    console.error("Error adding user:", err);
  }
}

async function fetchUsers() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    
    const list = document.getElementById("users");
    list.innerHTML = "";
    
    data.forEach(user => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${user.name} (${user.email}) 
        <button class="delete-btn" onclick="deleteUser(${user.id})">Delete</button>
      `;
      list.appendChild(li);
    });
  } catch (err) {
    console.error("Error fetching users:", err);
  }
}

async function deleteUser(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });
    
    if (res.ok) {
      fetchUsers(); // Refresh the list after deleting
    }
  } catch (err) {
    console.error("Error deleting user:", err);
  }
}