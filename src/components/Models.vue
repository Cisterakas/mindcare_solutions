<template>
    <NavigationBar />
    <main class="models-page">
      <section class="content-wrapper">
        <h1 class="main-title">
          Use of Machine Learning to Solve Industry Challenges
        </h1>
        <p class="intro-text">
          MindCare Solutions integrates advanced machine learning algorithms to
          address critical mental health challenges:
        </p>
        <section class="models-grid">
          <article class="model-card">
            <h2 class="model-title">Physical Activity Recommendations</h2>
            <p class="model-type">Model used<span class="model-name">: Linear Model</span></p>
            <p class="model-description">
              Solution:<span class="description-text">
                Predicts the ideal hours of physical activity required to achieve
                low stress levels, based on user's inputs (sleep hours, work hours
                and age).</span>
            </p>
          </article>
          <article class="model-card">
            <h2 class="model-title">Mental Health Severity Classification</h2>
            <p class="model-type">Model used<span class="model-name">: Naive Bayes</span></p>
            <p class="model-description">
              Solution:<span class="description-text">
                Categorizes mental health conditions into severity levels using
                user's inputs (Stress level, Work of Hours, Sleep Hours, Physical
                Activity Hours and Age).</span>
            </p>
          </article>
          <article class="model-card">
            <h2 class="model-title">Occupation Recommendations</h2>
            <p class="model-type">Model used<span class="model-name">: K-Nearest Neighbors (KNN)</span></p>
            <p class="model-description">
              Solution:<span class="description-text">
                Suggests less stressful occupations tailored to the user's age,
                gender, stress level and severity of mental health condition.</span>
            </p>
          </article>
          <article class="model-card">
            <h2 class="model-title">Condition Status</h2>
            <p class="model-type">Model used<span class="model-name">: Support Vector Machine (SVM)</span></p>
            <p class="model-description">
              Solution:<span class="description-text">
                Classifies users into "Needs Immediate Attention" or "Stable,"
                ensuring timely identification and intervention for those at higher risk.</span>
            </p>
          </article>
          <article class="model-card">
            <h2 class="model-title">Support Necessity Evaluation</h2>
            <p class="model-type">Model used<span class="model-name">: Decision Tree</span></p>
            <p class="model-description">
              Solution:<span class="description-text">
                Recommends whether users should seek professional mental health
                support ("Yes" or "No"), based on factors such as mental health
                condition and it's severity, stress level and history of consultation.</span>
            </p>
          </article>
          <article class="model-card">
            <h2 class="model-title">Burnout Prediction</h2>
            <p class="model-type">Model used<span class="model-name">: Artificial Neural Network (ANN)</span></p>
            <p class="model-description">
              Solution:<span class="description-text">
                Analyzes all provided attributes to predict the likelihood of
                experiencing burnout within the next month, empowering users to
                take preventive measures based on user's stress level, sleep
                hours, work hours and physical activity hours.</span>
            </p>
          </article>
        </section>
        <p class="conclusion-text">
          By combining user-friendly design with advanced machine learning
          algorithms, MindCare Solutions ensures individuals gain valuable
          insights into their mental health in minutes, fostering healthier lives
          and more informed decisions.
        </p>
      </section>
    </main>
  </template>

<script>
import NavigationBar from './NavigationBar.vue';

export default {
name: 'YourPageComponent',
components: {
  NavigationBar
}
}
</script>
  
  <style scoped>
  .models-page {
    background: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    color: #484948;
    padding: 183px 80px 49px;
    font: 400 25px Poppins, sans-serif;
  }
  
  .content-wrapper {
    display: flex;
    width: 100%;
    max-width: 1214px;
    flex-direction: column;
    align-items: center;
  }
  
  .main-title {
    color: #18671d;
    font-size: 60px;
    text-align: center;
  }
  
  .intro-text {
    margin: 55px 0 0;
  }
  
  .models-grid {
    display: flex;
    margin: 55px 0 0;
    width: 1155px;
    max-width: 100%;
    flex-direction: column;
    font-weight: 700;
  }
  
  .model-card {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 0 0 36px;
  }
  
  .model-title {
    font-size: 25px;
    font-weight: 700;
  }
  
  .model-type {
    margin: 10px 0;
  }
  
  .model-name {
    font-weight: 400;
  }
  
  .model-description {
    margin: 10px 0;
  }
  
  .description-text {
    font-weight: 400;
  }
  
  .conclusion-text {
    font-weight: 700;
    align-self: stretch;
    margin: 55px 0 0;
  }
  
  @media (max-width: 991px) {
    .models-page {
      padding: 100px 20px 0;
    }
  
    .content-wrapper {
      max-width: 100%;
    }
  
    .main-title {
      max-width: 100%;
      font-size: 40px;
    }
  
    .intro-text {
      max-width: 100%;
      margin-top: 40px;
    }
  
    .models-grid {
      margin-top: 40px;
    }
  
    .model-card {
      max-width: 100%;
    }
  
    .model-title,
    .model-type,
    .model-description {
      max-width: 100%;
    }
  
    .conclusion-text {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  </style>