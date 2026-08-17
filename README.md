# 👨‍💻 Ayush Todkar — Personal Portfolio

A responsive personal portfolio website built to showcase my **technical skills, projects, education, achievements, areas of interest, certifications, and co-curricular activities** as a Computer Engineering student and aspiring Full Stack Developer.

The portfolio is designed with a clean, modern interface and includes responsive layouts, interactive theme switching, project showcases, and direct contact options.

---

## 🌐 About the Portfolio

This website serves as my personal developer portfolio and provides an overview of my academic background, technical skills, software projects, and interests.

The homepage introduces me as a **Computer Engineering student and Full Stack Developer**, while the remaining sections provide more information about my skills, projects, education, achievements, and ways to connect with me.

---

## ✨ Features

### 🏠 Hero Section

The landing section introduces:

* Name and developer profile
* Computer Engineering background
* Full Stack Development focus
* Short professional introduction
* Resume download
* Contact button
* Profile image

---

### 👨‍💻 About Me

The About section provides an overview of my:

* Academic background
* Interest in software development
* Interest in web technologies
* Full Stack Development goals
* Project-based learning

It also highlights:

* Technologies learned
* Projects built
* Current CGPA

---

### 🛠️ Technical Skills

The portfolio organizes technical skills into multiple categories.

#### Programming Languages

* C
* Python
* Java
* JavaScript

#### Frontend Development

* HTML
* CSS
* React
* Responsive Design

#### Backend Development

* Node.js
* Express.js
* Spring Boot
* REST APIs

#### Database & Development Tools

* MongoDB
* Git
* GitHub
* VS Code

---

### 🚀 Projects

The Projects section showcases my development work, including:

#### 🌐 Personal Portfolio Website

A responsive portfolio website built using HTML, CSS, and JavaScript.

Features include:

* Responsive design
* Project showcase
* Education timeline
* Skills section
* Contact functionality
* Persistent light/dark theme

#### 🏙️ FixMySpot

A civic complaint and maintenance tracking application designed for reporting and managing local issues.

Technology stack:

```text
React
Node.js
Express
MongoDB
```

#### 🖥️ Deadlock Detection Simulator

An Operating Systems project demonstrating deadlock detection and recovery concepts.

The portfolio provides links to the project's GitHub repository and live demonstration.

---

## 🎯 Areas of Interest

The portfolio highlights four primary areas of interest:

### Full Stack Development

Building complete web applications covering responsive interfaces, APIs, backend services, and databases.

### Cybersecurity

Pursuing Honors in Cybersecurity alongside my Computer Engineering degree.

### Problem Solving

Developing programming, algorithmic, and software-development fundamentals through practical projects.

### Continuous Learning

Exploring modern technologies and transforming ideas into practical software solutions.

---

## 📜 Certifications

The portfolio currently highlights a Udemy certification covering:

* HTML
* CSS
* JavaScript
* Git
* MERN Stack

---

## 🏆 Achievements

The website includes the following achievements:

* **96.10 percentile** in MHT-CET 2024 PCM
* **3rd place** in the Euphoria Drama Competition at Don Bosco Institute of Technology
* **8.0/10 CGPA** through the first four semesters of engineering

---

## 🎭 Co-Curricular Activities

The portfolio also highlights participation in drama and cultural activities, including:

* Marathi Club Drama
* Euphoria Drama Competition
* Stage performances involving different characters and themes

This section demonstrates interests beyond purely technical development.

---

## 🎓 Education

### Bachelor of Engineering — Computer Engineering

**Don Bosco Institute of Technology, Kurla**

**2023 – Present**

Honors:

```text
Cybersecurity
```

Current academic performance:

```text
CGPA: 8.0 / 10
```

---

### Higher Secondary Education

**Swami Vivekanand Junior College, Koparkhairane**

Science Stream

```text
HSC: 76.33%
```

---

### Secondary School Certificate

**St. Mary's Multipurpose High School and Junior College**

```text
SSC: 94.40%
```

---

## 🌙 Dark / Light Mode

The website includes an interactive theme switcher.

Users can switch between:

```text
🌙 Dark Mode
☀️ Light Mode
```

The selected theme is stored using the browser's `localStorage`, allowing the preference to persist after refreshing or reopening the page.

---

## 📱 Responsive Design

The website is designed to adapt to different screen sizes.

The CSS includes responsive layouts for:

* Desktop
* Tablet
* Mobile

On smaller screens, the hero section changes orientation, skill/project layouts collapse into fewer columns, navigation wraps, and the contact section becomes a single-column layout.

---

## 📬 Contact

The portfolio provides multiple ways to connect:

* Email
* Phone
* GitHub
* LinkedIn

It also includes an interactive contact form.

Instead of requiring a backend server, the form collects the visitor's name, email, and message and creates a pre-filled WhatsApp message for contacting me.

---

# 🛠️ Technology Stack

| Technology       | Purpose                         |
| ---------------- | ------------------------------- |
| HTML5            | Website structure               |
| CSS3             | Styling and responsive layouts  |
| JavaScript       | Theme switching and interaction |
| LocalStorage     | Persistent theme preference     |
| WhatsApp URL API | Contact message generation      |

---

# 📁 Project Structure

```text
ayush-todkar-portfolio/
│
├── index.html
├── style.css
├── dark mode.js
│
├── me.jpg
├── Resume.pdf
│
└── README.md
```

> Make sure files such as `me.jpg` and `Resume.pdf` are included in the repository if they are referenced by `index.html`.

---

# 🚀 Getting Started

## Prerequisites

No backend server or database is required.

You only need:

* A modern web browser
* Git (optional, if cloning the repository)

---

## 1. Clone the Repository

```bash
git clone https://github.com/AyushTodkar404/ayush-todkar-portfolio.git
```

Then move into the project directory:

```bash
cd ayush-todkar-portfolio
```

---

## 2. Run the Website

Since this is a frontend-only website, you can simply open:

```text
index.html
```

in a modern web browser.

For the best development experience, you can also use **VS Code Live Server** or another local static server.

---

## 💻 Using VS Code Live Server

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Open `index.html`.
4. Right-click the file.
5. Select **Open with Live Server**.
6. The website will open in your browser.

---

# 🎨 Design

The website uses a modern dark-themed interface built around:

* Dark navy backgrounds
* Cyan accent colors
* Rounded cards
* Responsive grids
* Interactive hover effects
* Timeline-based education section
* Pill-shaped technology tags
* Sticky navigation
* Light/dark theme switching

The CSS defines dedicated background, surface, text, secondary-text, accent, and tag variables, making the theme easier to maintain.

---

# ⚙️ Functionality

### Theme Switching

The theme button toggles between dark and light modes.

The preference is saved locally:

```javascript
localStorage.setItem("theme", "light");
```

or:

```javascript
localStorage.setItem("theme", "dark");
```

This means the selected theme persists between sessions.

---

### Contact Form

The contact form collects:

```text
Name
Email
Message
```

and generates a pre-filled WhatsApp message containing the submitted information.

No backend or database is required for this functionality.

---

# 📌 Highlights

* Responsive personal portfolio
* Modern developer-focused UI
* Dark/light theme
* Persistent theme preference
* Resume download
* Project showcase
* Technical skill categorization
* Education timeline
* Achievement section
* Certifications section
* Co-curricular activities
* GitHub and LinkedIn integration
* WhatsApp-based contact form
* Mobile-friendly layout

---

# 🔮 Future Improvements

Possible future enhancements include:

* Add animated section transitions
* Add project filtering by technology
* Add dedicated project detail pages
* Add GitHub API integration for live repositories
* Add live GitHub contribution statistics
* Add downloadable project reports
* Add an experience/internship section
* Add certificate previews
* Add accessibility improvements
* Add SEO enhancements
* Add a dedicated backend contact form
* Add automated deployment through GitHub Actions
* Add a custom domain

---

# 🤝 Contributing

This is a personal portfolio website, so the primary content is specific to my profile.

However, suggestions and improvements are welcome.

To experiment with the project:

```bash
git clone https://github.com/AyushTodkar404/ayush-todkar-portfolio.git
cd ayush-todkar-portfolio
```

Create a branch:

```bash
git checkout -b feature/improvement
```

Make your changes:

```bash
git add .
git commit -m "Improve portfolio design"
```

Push your branch:

```bash
git push origin feature/improvement
```

Then open a Pull Request.

---

# 📄 License

This project is a personal portfolio website.

The source code is available for learning and reference. Personal content, profile images, resume, contact information, and other identifying materials should not be reused without permission.

---

# 👨‍💻 Author

## Ayush Todkar

**Computer Engineering Student | Full Stack Developer**

Interested in:

```text
Full Stack Development
Cybersecurity
Software Development
Problem Solving
Continuous Learning
```

### Connect With Me

* GitHub: [AyushTodkar404](https://github.com/AyushTodkar404)
* LinkedIn: [Ayush Todkar](https://www.linkedin.com/in/ayush-todkar-801527411)
* Email: [ayushtodkar404@gmail.com](mailto:ayushtodkar404@gmail.com)

---

⭐ If you find this portfolio useful or interesting, consider giving the repository a star!

**Built with HTML, CSS, and JavaScript.**
