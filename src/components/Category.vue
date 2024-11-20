<template>
    <NavigationBar />
    <div>
      <div class="row">
        <div class="col-md-6">
          <h2>Categories Table</h2>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="category in categories" :key="category.id">
                <td>{{ category.id }}</td>
                <td>{{ category.name }}</td>
                <td>{{ category.description }}</td>
                <td>
                  <button @click="editCategory(category)" class="btn btn-primary">Edit</button>
                  <button @click="deleteCategory(category.id)" class="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div v-if="editingCategory">
            <h2>Edit Category</h2>
            <form @submit.prevent="saveCategory">
              <div class="form-group">
                <label for="editName">Name:</label>
                <input v-model="editingCategory.name" id="editName" class="form-control" />
              </div>
              <div class="form-group">
                <label for="editDescription">Description:</label>
                <input v-model="editingCategory.description" id="editDescription" class="form-control" />
              </div>
              <button type="submit" class="btn btn-primary">Save</button>
              <button @click="cancelEdit" class="btn btn-secondary">Cancel</button>
            </form>
          </div>
          <div v-else>
            <h2>Add Category</h2>
            <form @submit.prevent="addCategory">
              <div class="form-group">
                <label for="addName">Name:</label>
                <input v-model="newCategory.name" id="addName" class="form-control" />
              </div>
              <div class="form-group">
                <label for="addDescription">Description:</label>
                <input v-model="newCategory.description" id="addDescription" class="form-control" />
              </div>
              <button type="submit" class="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import NavigationBar from './NavigationBar.vue'
  
  const categories = ref([
    { id: 1, name: "Allowance", description: "From Parents" },
    { id: 2, name: "Donation", description: "From Friends" },
  ]);
  
  const editingCategory = ref(null);
  const newCategory = ref({ name: "", description: "" });
  
  const editCategory = (category) => {
    editingCategory.value = { ...category };
  };
  
  const saveCategory = () => {
    if (editingCategory.value) {
      // Editing an existing category
      const index = categories.value.findIndex((c) => c.id === editingCategory.value.id);
      if (index !== -1) {
        categories.value[index] = { ...editingCategory.value };
      }
      editingCategory.value = null; // Clear the form
    }
  };
  
  const deleteCategory = (categoryId) => {
    const index = categories.value.findIndex((c) => c.id === categoryId);
    if (index !== -1) {
      categories.value.splice(index, 1);
      editingCategory.value = null; // Clear the form after deletion
    }
  };
  
  const cancelEdit = () => {
    editingCategory.value = null;
    newCategory.value = { name: "", description: "" };
  };
  
  const addCategory = () => {
    if (newCategory.value.name && newCategory.value.description) {
      const newId = categories.value.length > 0 ? Math.max(...categories.value.map((c) => c.id)) + 1 : 1;
      categories.value.push({ id: newId, ...newCategory.value });
      newCategory.value = { name: "", description: "" };
    }
  };
  </script>
  