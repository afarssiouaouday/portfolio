# Aouday Afarssiou - Portfolio

Welcome to my personal portfolio! This project is an **interactive web application** built with **React.js**, and modern integrations like **EmailJS** for the contact form.

---

## 🚀 About the Project

This portfolio showcases:

- **About Me** section with your profile picture and personal info.
- **Professional Experiences** section with your internships or jobs.
- **Recent Projects** section with images, descriptions, and technologies used.
- **Tech Stack** section with your skills and tools.
- **Contact Form** fully functional via **EmailJS**.
- Downloadable **CV** and your profile picture.

---

## 📂 Project Structure

```
src/
 ├─ Assets/
 │   ├─ Projects/       # Project images (cerbo.png, car-rental.png, courseManagement.png)
 │   ├─ myimg.png       # Your profile picture
 │   └─ cv.pdf          # Your CV
 ├─ data/
 │   ├─ projects.js     # Define your projects here
 │   ├─ experiences.js  # Define your experiences here
 │   └─ techstack.js    # Define your skills and typewriter
 ├─ components/
 │   ├─ ProjectCards.js
 │   ├─ Projects.js
 │   └─ Type.js         # Typewriter component
 └─ App.js
```

---

## 🔧 Configure Your Portfolio

1. **Update personal info**  
   Edit `src/data/experiences.js`:

```javascript
export const myData = {
  fullName: "Your Name",
  email: "your.email@gmail.com",
  phone: "+212 6 XX XX XX XX",
  location: "Your City, Morocco",
  github: "https://github.com/yourGitHub",
  linkedin: "https://www.linkedin.com/in/yourLinkedIn",
  instagram: "https://www.instagram.com/yourInstagram",
  usernameGitHub: "yourGitHub",
};
```

2. **Update your experiences**  

```javascript
export const experiences = [
  { date: "Jul 2025 - Aug 2025", title: "Full-Stack Developer Intern", company: "LambdaSoft" },
  { date: "May 2025 - Jun 2025", title: "Full-Stack Developer Intern", company: "CERBO" },
];
```

3. **Update your projects**  
Edit `src/data/projects.js`. Add your project images in `src/Assets/Projects/` and update `imgPath`, `title`, `description`, `ghLink`, `demoLink`, and `techstack`.  

4. **Update your tech stack and typewriter**  
Edit `src/data/techstack.js` to add/remove technologies and update `typewriterStrings`.

---

## 📩 Configure EmailJS Form

1. Sign up on [EmailJS](https://www.emailjs.com/).
2. Create a service and a template.
3. In `.env` at the project root, add:

```
REACT_APP_EMAILJS_SERVICE_ID=service_a64ogmu
REACT_APP_EMAILJS_TEMPLATE_ID=template_n50k2jc
REACT_APP_EMAILJS_PUBLIC_KEY=Q74zVTgexuszvjfBL
```

4. The contact form in the `Contact` component will use these variables.

---

## 📝 Add Your CV and Profile Picture

In `src/Assets/`:

- `myimg.png` → Replace with your profile photo
- `cv.pdf` → Replace with your CV

⚠️ Keep **the same file names** so the portfolio works properly.

---

## 💻 Run the Project

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

The portfolio will be available at `http://localhost:3000`.

---

## 🔗 Links

-**Live Demo**: <https://afarssiouaouday.vercel.app/>
- GitHub: [https://github.com/afarssiouaouday](https://github.com/afarssiouaouday)
- LinkedIn: [https://www.linkedin.com/in/aouday-afarssiou-3361a4291/](https://www.linkedin.com/in/aouday-afarssiou-3361a4291/)

---

## 📝 Quick Customization

1. Change your data in `/data/` (projects, experiences, techstack).
2. Replace your **images** in `src/Assets/`.
3. Update your **CV** (`cv.pdf`).
4. Update the **typewriter** in `techstack.js`.
5. Update your EmailJS keys if using the form.

---

## ⚡ Tip

You can easily **clone this portfolio** and only change the files in `/data/` and `/Assets/` to create your own personalized version.

