Word of advice, have a clear design in figma of exactly what you want to create with material design, 
use CSS/SCSS where necessary to fill that gaps, remember at the end material itself was made with angular and then css

and at the end all the browser does is parse html and run javascript so material like bootstrap is just your any other design system
so don't be afraid of it, embrance it if it will make your job and life easier, if it will make it otherwise difficult, abandon it.



Here are several examples of common page layouts using **CSS Grid** and **Flexbox**. Each layout represents a widely-used structure in web design.

---

### 1. **Header, Main, Footer Layout**
A simple layout for blogs or documentation sites.

**CSS Grid**:
```html
<div class="grid-layout">
  <header>Header</header>
  <main>Main Content</main>
  <footer>Footer</footer>
</div>

<style>
  .grid-layout {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
  }
  header, main, footer {
    padding: 20px;
    text-align: center;
  }
  header { background: #4CAF50; }
  main { background: #f1f1f1; }
  footer { background: #333; color: white; }
</style>
```

---

### 2. **Two-Column Layout (Sidebar + Main Content)**
Ideal for dashboards or blogs with a navigation sidebar.

**Flexbox**:
```html
<div class="flex-layout">
  <aside>Sidebar</aside>
  <main>Main Content</main>
</div>

<style>
  .flex-layout {
    display: flex;
    height: 100vh;
  }
  aside {
    width: 250px;
    background: #2c3e50;
    color: white;
    padding: 20px;
  }
  main {
    flex-grow: 1;
    background: #ecf0f1;
    padding: 20px;
  }
</style>
```

---

### 3. **Three-Column Layout**
Common for newspapers or content-heavy sites.

**CSS Grid**:
```html
<div class="three-column-grid">
  <header>Header</header>
  <nav>Left Sidebar</nav>
  <main>Main Content</main>
  <aside>Right Sidebar</aside>
  <footer>Footer</footer>
</div>

<style>
  .three-column-grid {
    display: grid;
    grid-template-areas: 
      "header header header"
      "nav main aside"
      "footer footer footer";
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
    gap: 10px;
  }
  header { grid-area: header; background: #1abc9c; }
  nav { grid-area: nav; background: #34495e; color: white; }
  main { grid-area: main; background: #ecf0f1; }
  aside { grid-area: aside; background: #95a5a6; }
  footer { grid-area: footer; background: #2c3e50; color: white; }
  div > * { padding: 20px; text-align: center; }
</style>
```

---

### 4. **Card Layout (Grid)**
Great for displaying products or portfolios.

**CSS Grid**:
```html
<div class="card-grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>

<style>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  .card {
    background: #3498db;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
  }
</style>
```

---

### 5. **Hero Section Layout**
Common for landing pages with a prominent header and call-to-action.

**Flexbox**:
```html
<div class="hero">
  <div class="hero-content">
    <h1>Welcome to Our Website</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <button>Learn More</button>
  </div>
</div>

<style>
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #8e44ad, #3498db);
    color: white;
    text-align: center;
  }
  .hero-content {
    max-width: 600px;
  }
  button {
    padding: 10px 20px;
    background: #1abc9c;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    margin-top: 20px;
  }
</style>
```

---

### 6. **Navbar with Content**
A simple navbar and main content.

**Flexbox**:
```html
<div class="navbar-layout">
  <nav>Navbar</nav>
  <main>Main Content</main>
</div>

<style>
  .navbar-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  nav {
    background: #34495e;
    color: white;
    padding: 15px;
    text-align: center;
  }
  main {
    flex-grow: 1;
    background: #ecf0f1;
    padding: 20px;
  }
</style>
```

---

These layouts can serve as the foundation for many web pages. You can adapt them by customizing colors, typography, and adding interactivity!
