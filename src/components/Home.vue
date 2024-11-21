<template>
  <NavigationBar />
  <main class="assessment-page">
    
    <section class="assessment-container">
      <header class="assessment-header">
        <h1 class="main-title">Start Your Mental Health Journey</h1>
        <h2 class="subtitle">Take the Test Now!</h2>
      </header>
      <section class="assessment-form-container">
        <form class="assessment-form" @submit.prevent="predict">
          <p class="form-description">
            Discover insights about your mental well-being in minutes.
          </p>
          <div class="form-grid">
            <div class="form-group">
              <label for="gender" class="input-label">Gender</label>
              <div class="select-wrapper">
                <select id="gender" class="form-select" v-model="inputs.gender" required>
                  <option disabled value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Non-binary</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="age" class="input-label">Age</label>
              <input
                type="number"
                id="age"
                class="form-input"
                v-model="inputs.age"
                required
              />
            </div>

            <div class="form-group">
              <label for="stressLevel" class="input-label">Stress Level</label>
              <div class="select-wrapper">
                <select id="stressLevel" class="form-select" v-model="inputs.stress_level" required>
                  <option disabled value="">Select Stress Level</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="physicalActivity" class="input-label">Physical Activity Hours</label>
              <input
                type="number"
                id="physicalActivity"
                class="form-input"
                v-model="inputs.actual_activity_hours"
                required
              />
            </div>

            <div class="form-group">
              <label for="sleepHours" class="input-label">Sleep Hours</label>
              <input
                type="number"
                id="sleepHours"
                class="form-input"
                v-model="inputs.sleep_hours"
                required
              />
            </div>

            <div class="form-group">
              <label for="workHours" class="input-label">Work Hours</label>
              <input
                type="number"
                id="workHours"
                class="form-input"
                v-model="inputs.work_hours"
                required
              />
            </div>

            <div class="form-group">
              <label for="mentalCondition" class="input-label">Mental Health Condition</label>
              <div class="select-wrapper">
                <select id="mentalCondition" class="form-select" v-model="inputs.mental_health_condition" required>
                  <option disabled value="">Select Condition</option>
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="consultationHistory" class="input-label">Consultation History</label>
              <div class="select-wrapper">
                <select id="consultationHistory" class="form-select" v-model="inputs.consultation_history" required>
                  <option disabled value="">Select History</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
          </div>

          <button type="submit" class="predict-button">Predict</button>
        </form>
      </section>

      <section v-if="results" class="results-section" ref="resultsSection">
        <h2 class="results-title">Predicted Results:</h2>
        <div class="results-grid">
          <article class="result-card">
            <h3 class="result-heading">Predicted Physical Activity Hours</h3>
            <p class="result-value">{{ results.predicted_physical_activity_hours }}</p>
          </article>
          <article class="result-card">
            <h3 class="result-heading">Recommended Additional Hours</h3>
            <p class="result-value">{{ results.recommended_additional_hours }}</p>
          </article>
          <article class="result-card">
            <h3 class="result-heading">Severity of Mental Health Condition </h3>
            <p class="result-value">{{ results.predicted_severity }}</p>
          </article>
          <article class="result-card">
            <h3 class="result-heading">Immediate Attention Needed</h3>
            <p class="result-value">{{ results.immediate_attention_status }}</p>
          </article>
          <article class="result-card">
            <h3 class="result-heading">Recommended Occupation</h3>
            <p class="result-value">{{ results.predicted_occupation || "N/A" }}</p>
          </article>
          <article class="result-card">
            <h3 class="result-heading">Needs Mental Health Support</h3>
            <p class="result-value">{{ results.needs_mental_health_support }}</p>
          </article>
        </div>
      </section>

      <div v-if="errorMessage" class="error">
        <p>Error: {{ errorMessage }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import NavigationBar from './NavigationBar.vue';

export default {
  name: 'YourPageComponent',
  components: {
    NavigationBar
  },
  data() {
    return {
      inputs: {
        sleep_hours: null,
        work_hours: null,
        age: null,
        actual_activity_hours: null,
        gender: "",
        stress_level: "",
        mental_health_condition: "",
        consultation_history: "",
      },
      results: null,
      errorMessage: null,
    };
  },
  methods: {
    async predict() {
      try {
        // Reset results and error message before prediction
        this.results = null;
        this.errorMessage = null;

        // Validate required fields
        if (Object.values(this.inputs).some((field) => !field)) {
          this.errorMessage = "Please fill out all required fields.";
          return;
        }

        // Prepare payload for prediction
        const payload = {
          Sleep_Hours: this.inputs.sleep_hours,
          Work_Hours: this.inputs.work_hours,
          Age: this.inputs.age,
          Actual_Physical_Activity_Hours: this.inputs.actual_activity_hours,
          Gender: this.inputs.gender,
          Stress_Level: this.inputs.stress_level,
          Mental_Health_Condition: this.inputs.mental_health_condition,
          Consultation_History: this.inputs.consultation_history,
        };

        // Send the request to Flask backend
        const response = await axios.post("http://127.0.0.1:5000/predict", payload);
        this.results = response.data;

        // Call function to scroll to the results section
        this.$nextTick(() => {
          this.scrollToResults();
        });
      } catch (error) {
        // Handle error if request fails
        this.errorMessage = error.response?.data?.error || "Unable to connect to the server.";
      }
    },
    
    scrollToResults() {
      // Smoothly scroll to the results section
      const resultsSection = this.$refs.resultsSection;
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>


<style scoped>
.assessment-page {
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 115px 80px;
}

.assessment-container {
  width: 100%;
  max-width: 1258px;
}

.assessment-header {
  text-align: center;
  margin-bottom: 17px;
}

.main-title {
  color: #18671D;
  font: 400 60px Poppins, sans-serif;
}

.subtitle {
  color: #FE983A;
  font: 700 38px Poppins, sans-serif;
  margin-top: 17px;
}

.assessment-form-container {
  border-radius: 60px;
  background: rgba(166, 255, 171, 0.46);
  padding: 34px 70px;
  margin-bottom: -29px;
}

.form-description {
  color: #18671D;
  font: 400 25px Poppins, sans-serif;
  text-align: center;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Creates 4 equal columns */
  gap: 23px 40px; /* Adjust gap between rows and columns */
  margin-top: 56px;
}

.form-group {
  flex: 1;
  min-width: 191px;
}

.input-label {
  color: #484948;
  font: 700 21px Poppins, sans-serif;
  margin-bottom: 9px;
  display: block;
}

.form-input,
.form-select {
  width: 100%;
  background: #fff;
  border: 1px solid #C7C3C3;
  padding: 15px;
  border-radius: 4px;
}

.select-wrapper {
  position: relative;
}

.predict-button {
  background: #FE983A;
  color: #fff;
  border: none;
  border-radius: 40px;
  padding: 11px 84px;
  font: 700 21px Poppins, sans-serif;
  margin: 29px auto 0;
  display: block;
  cursor: pointer;
  min-height: 54px;
  width: 247px;
}

.results-section {
  margin-top: 113px;
}

.results-title {
  color: #18671D;
  font: 700 45px Poppins, sans-serif;
  margin-bottom: 113px;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Creates 3 equal columns */
  gap: 53px 63px; /* Adjusts the gap between cards */
  font-family: Poppins, sans-serif;
  text-align: center;
}

.result-card {
  background: rgba(136, 245, 142, 0.46);
  border-radius: 40px;
  padding: 20px;
  min-width: 240px;
  min-height: 262px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline/* Ensures content doesn't overlap */
}

.result-heading {
  color: #484948;
  font-size: 21px;
  font-weight: 700;
}

.result-values {
  display: flex;
  gap: 30px;
  margin-top: 41px;

}

.result-group {
  text-align: center;
}

.result-number,
.result-percentage {
  color: #16621B;
  font-size: 60px;
  font-weight: 700;
}

.result-value {
  color: #16621B;
  font-size: 60px;
  font-weight: 700;
  margin-top: 21px;
}

.result-label {
  color: #484948;
  font-size: 15px;
  margin-top: 31px;
}

@media (max-width: 991px) {
  .assessment-page {
    padding: 100px 20px 0;
  }

  .main-title {
    font-size: 40px;
  }

  .assessment-form-container {
    padding: 20px;
  }

  .results-title {
    font-size: 40px;
    margin: 40px 0;
  }

  .result-number,
  .result-percentage,
  .result-value {
    font-size: 40px;
  }

  .predict-button {
    padding: 11px 20px;
  }
}
</style>