<template>
    <NavigationBar />
    <main class="about-page">
      <section class="about-section">
        <header class="about-header">
          <h1 class="about-title">About Us</h1>
          <p class="about-description">
            MindCare Solutions is dedicated to advancing mental health awareness
            and support through innovative Mental Health and Wellness Technology.
            Our platform offers personalized assessments and actionable
            recommendations, empowering individuals to take control of their
            mental well-being.
          </p>
        </header>
        <section class="content-section">
          <article class="mission-container">
            <h2 class="section-title">Mission</h2>
            <p class="section-text">
              To provide accessible, science-driven insights into mental
              well-being, enabling individuals to make informed decisions and
              proactively manage their mental health challenges.
            </p>
          </article>
          <article class="vision-container">
            <h2 class="section-title">Vision</h2>
            <p class="section-text">
              To lead the digital mental health revolution by offering innovative,
              AI-powered solutions that make mental wellness achievable for
              everyone.
            </p>
          </article>
          <article class="goals-container">
            <h2 class="section-title">Goals</h2>
            <p class="section-text">
              To revolutionize mental health care by leveraging innovative
              technology and machine learning to provide accessible, personalized
              insights and actionable solutions, fostering improved mental
              well-being and reducing stigma globally.
            </p>
          </article>
        </section>
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
  .about-page {
    background: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: Poppins, sans-serif;
    padding: 184px 0 296px;
  }
  
  .about-section {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }
  
  .about-header {
    border-radius: 100px 100px 0 0;
    background: rgba(202, 255, 205, 0.46);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    min-height: 576px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 76px 167px 128px;
  }
  
  .about-title {
    color: #18671D;
    font-size: 70px;
    font-weight: 700;
    margin: 0;
  }
  
  .about-description {
    color: #484948;
    font-size: 30px;
    font-weight: 400;
    margin: 63px 0 0;
  }
  
  .content-section {
    align-self: center;
    display: flex;
    margin-top: 74px;
    width: 1183px;
    max-width: 100%;
    flex-direction: column;
  }
  
  .mission-container,
  .vision-container,
  .goals-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0 48px 32px 0;
  }
  
  .vision-container,
  .goals-container {
    margin-top: 23px;
  }
  
  .section-title {
    color: #18671D;
    font-size: 60px;
    font-weight: 700;
    text-align: center;
    align-self: flex-start;
    margin: 0;
  }
  
  .section-text {
    color: #484948;
    font-size: 30px;
    font-weight: 400;
    margin: 24px 0 0 76px;
  }
  
  @media (max-width: 991px) {
    .about-page {
      padding: 100px 0;
    }
  
    .about-section {
      max-width: 100%;
    }
  
    .about-header {
      padding: 0 20px 100px;
    }
  
    .about-title {
      font-size: 40px;
    }
  
    .about-description {
      margin-top: 40px;
      max-width: 100%;
    }
  
    .content-section {
      margin-top: 40px;
    }
  
    .mission-container,
    .vision-container,
    .goals-container {
      padding-right: 20px;
    }
  
    .section-title {
      font-size: 40px;
    }
  
    .section-text {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  </style>