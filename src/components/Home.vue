<template>
  <div id="app">
    <h1>Health Predictor</h1>
    <form @submit.prevent="predict">
      <!-- Input Fields -->
      <label for="sleep_hours">Sleep Hours:</label>
      <input
        type="number"
        id="sleep_hours"
        v-model="inputs.sleep_hours"
        required
        placeholder="Enter sleep hours"
      />

      <label for="work_hours">Work Hours:</label>
      <input
        type="number"
        id="work_hours"
        v-model="inputs.work_hours"
        required
        placeholder="Enter work hours"
      />

      <label for="age">Age:</label>
      <input
        type="number"
        id="age"
        v-model="inputs.age"
        required
        placeholder="Enter age"
      />

      <label for="actual_activity_hours">Actual Physical Activity Hours:</label>
      <input
        type="number"
        id="actual_activity_hours"
        v-model="inputs.actual_activity_hours"
        required
        placeholder="Enter current activity hours"
      />

      <label for="gender">Gender:</label>
      <select id="gender" v-model="inputs.gender" required>
        <option disabled value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Non-binary</option>
        <option>Prefer not to say</option>
      </select>

      <label for="stress_level">Stress Level:</label>
      <select id="stress_level" v-model="inputs.stress_level" required>
        <option disabled value="">Select Stress Level</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <!-- Submit Button -->
      <button type="submit">Predict</button>
    </form>

    <!-- Results Section -->
    <div v-if="results">
      <h2>Prediction Results</h2>
      <p>Predicted Physical Activity Hours: {{ results.predicted_physical_activity_hours }}</p>
      <p>Recommended Additional Hours: {{ results.recommended_additional_hours }}</p>
      <p>Predicted Severity: {{ results.predicted_severity }}</p>
    </div>

    <!-- Error Message -->
    <div v-if="errorMessage" class="error">
      <p>Error: {{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      inputs: {
        sleep_hours: null, // Required field
        work_hours: null, // Required field
        age: null, // Required field
        actual_activity_hours: null, // Required field
        gender: "", // Required field
        stress_level: "", // Required field
      },
      results: null,
      errorMessage: null,
    };
  },
  methods: {
    async predict() {
      try {
        // Clear previous results
        this.results = null;
        this.errorMessage = null;

        // Validate all required fields before sending
        if (
          !this.inputs.sleep_hours ||
          !this.inputs.work_hours ||
          !this.inputs.age ||
          this.inputs.actual_activity_hours === null || // Ensure it checks for null
          !this.inputs.gender ||
          !this.inputs.stress_level
        ) {
          this.errorMessage = "Please fill out all required fields.";
          return;
        }

        // Prepare the payload
        const payload = {
          Sleep_Hours: this.inputs.sleep_hours,
          Work_Hours: this.inputs.work_hours,
          Age: this.inputs.age,
          Actual_Physical_Activity_Hours: this.inputs.actual_activity_hours,
          Gender: this.inputs.gender,
          Stress_Level: this.inputs.stress_level,
        };

        // Send POST request to the backend
        const response = await axios.post("http://127.0.0.1:5000/predict", payload);

        // Display results
        this.results = response.data;
      } catch (error) {
        // Handle errors
        this.errorMessage = error.response
          ? error.response.data.error
          : "Unable to connect to the server. Please try again later.";
        console.error("Prediction error:", error);
      }
    },
  },
};
</script>



<style>
/* Styling */
#app {
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
}

form label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

form input,
form select {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

form button {
  padding: 10px 15px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

form button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-weight: bold;
}
</style>
