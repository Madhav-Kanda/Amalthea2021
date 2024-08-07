# Amalthea2021

Amalthea2021 is a Node.js-based website designed to provide information about events, webinars, sponsors, and more. This site was created for Amalthea, the annual technical summit of IIT Gandhinagar. This repository contains the source code and configuration files necessary to run the website locally.

## Table of Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)


## Technologies <a name="technologies"></a>

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- TailwindCSS

## Installation <a name="installation"></a>

### Prerequisites

- Node.js (>= 14.x)
- npm (Node Package Manager)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/Amalthea2021.git
   cd Amalthea2021

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   npm start
   ```

## Screenshots <a name="screenshots"></a>

### Home Page
<img width="1464" alt="image" src="https://github.com/user-attachments/assets/45fc154f-00f0-4311-aa18-0e9b2f51d451">
<img width="1464" alt="image" src="https://github.com/user-attachments/assets/3313864f-c1fb-4b92-81ef-90ea8776113f">
<img width="1464" alt="image" src="https://github.com/user-attachments/assets/339d24d0-079e-46ab-a10d-0053a259d75e">


### Events Page
<img width="1464" alt="image" src="https://github.com/user-attachments/assets/b7f90f32-88ce-4fa2-b6e6-8dd4a15fecd9">
<img width="1464" alt="image" src="https://github.com/user-attachments/assets/00e653da-522a-4c59-96fa-22a307ff09c8">

### Webinars Page
<img width="1464" alt="image" src="https://github.com/user-attachments/assets/3966520d-950e-47d0-a7b8-3955a7951272">
<img width="1464" alt="image" src="https://github.com/user-attachments/assets/7eb555f9-fc07-48c5-b4bd-dddfcfed47e6">


### Sponsors Page
<img width="1464" alt="image" src="https://github.com/user-attachments/assets/284b295f-485a-4abd-9983-700b514f5dc8">


### Project Structure <a name="project-structure"></a>

```text
Amalthea2021/
├── node_modules/
├── public/
│   ├── css/
│   ├── images/
│   ├── js/
│   └── video/
├── seeds/
│   ├── contact.js
│   ├── evntdata.js
│   ├── instacodes.js
│   ├── sponsors.js
│   └── webinars.js
├── views/
│   ├── layouts/
│   ├── partials/
│   ├── CAform.ejs
│   ├── CAhome.ejs
│   ├── evntRegis.ejs
│   ├── home.ejs
│   ├── liveevents.ejs
│   ├── sponsors.ejs
│   ├── team.ejs
│   ├── techexpo.ejs
│   └── Webinar.ejs
├── .env
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
├── Procfile
└── README.md
```

