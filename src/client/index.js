const API_URL = "http://localhost:3000/api/items";

document.addEventListener("DOMContentLoaded", () => {
  const addForm = document.querySelector("#addForm");
  const editForm = document.querySelector("#editForm");
  const list = document.querySelector("#items");
  let isSubmitting = false;

  const fetchItems = async () => {
    const response = await fetch(API_URL);
    const items = await response.json();
    list.innerHTML = items
      .map(
        (item) => `
                <li>
                    ${item.name} 
                    <button onclick="deleteItem('${item._id}')">Delete</button>
                    <button onclick="editItem('${item._id}', '${item.name}')">Edit</button>
                </li>
            `
      )
      .join("");
  };

  addForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    isSubmitting = true;

    const name = addForm.querySelector("input[name='name']").value;

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    addForm.reset();
    await fetchItems();
    isSubmitting = false;
  });

  editForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    isSubmitting = true;

    const name = editForm.querySelector("input[name='name']").value;
    const id = editForm.querySelector("input[name='id']").value;

    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    editForm.style.display = "none";
    addForm.style.display = "block";
    editForm.reset();
    await fetchItems();
    isSubmitting = false;
  });

  window.deleteItem = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    await fetchItems();
  };

  window.editItem = (id, name) => {
    editForm.querySelector("input[name='name']").value = name;
    editForm.querySelector("input[name='id']").value = id;
    editForm.style.display = "block";
    addForm.style.display = "none";
  };

  window.cancelEdit = () => {
    editForm.style.display = "none";
    addForm.style.display = "block";
    editForm.reset();
  };

  fetchItems();
});
