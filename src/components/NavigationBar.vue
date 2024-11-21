<template>
  <header class="navigation-header">
    <a href="/" class="brand-title">MindCare Solutions</a>
    <nav class="navigation-menu">
      <a href="/about" class="nav-link">About Us</a>
      <a href="/models" class="nav-link">Models</a>
    </nav>
  </header>
</template>

<style scoped>
.navigation-header {
  background-color: rgba(166, 255, 171, 0.46);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  min-height: 110px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 23px 98px 23px 48px;
}

.brand-title {
  font-family: Poppins, sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: rgba(22, 103, 27, 1);
  width: 518px;
  margin: auto 0;
}

.navigation-menu {
  display: flex;
  min-width: 240px;
  align-items: center;
  gap: 94px;
  margin: auto 0;
}

.nav-link {
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: rgba(22, 103, 27, 1);
  text-decoration: none;
}

.nav-link:hover {
  font-weight: 600;
  color: rgb(247, 168, 51);
}

.nav-link:focus {
  outline: 2px solid rgba(22, 103, 27, 1);
  outline-offset: 2px;
}

@media (max-width: 991px) {
  .navigation-header {
    padding: 0 20px;
  }

  .brand-title {
    max-width: 100%;
    font-size: 40px;
  }
}
</style>