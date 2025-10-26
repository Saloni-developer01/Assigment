# 🧑‍💼 Interactive Profile Dashboard Widgets

This repository contains the frontend implementation of two core interactive widgets, focusing on high-fidelity replication of a given Figma design. This assignment is built using **React.js** and styled with **Tailwind CSS**, emphasizing exact UI replication and dynamic user interactions.

---

## ✨ Key Features & Components

The assignment focuses on recreating two main widgets on the right-hand side of the screen, as per the design:

### 1. Tabbed Profile Widget (Top Widget)
* **Three Clickable Tabs:** `About Me`, `Experiences`, and `Recommended`.
* **Interactive State:** The currently selected tab is visually highlighted with distinct styling (e.g., a background fill).
* **Dynamic Content:** The content area below the tabs updates based on the active tab (e.g., showing biographical text for 'About Me' or a recommendation blurb for 'Recommended').
* **Styling:** Features the exact padding, margins, and shadow effects to match the Figma neomorphic design.

### 2. Interactive Image Gallery Widget (Bottom Widget)
* **Horizontal Scrollable Carousel:** Displays images with smooth horizontal scrolling.
* **Advanced Hover Interaction:** Images scale up, rotate slightly, and lift on hover, complete with updated `z-index` for proper stacking.
* **Dark Overlay:** A subtle dark overlay is applied to all images, which fades out on hover to reveal the true colors.
* **Dynamic Controls:**
    * **`+ ADD IMAGE` Button:** Allows users to dynamically upload and add new images to the gallery.
    * **Custom Navigation Arrows:** Arrows disable when the start or end of the gallery is reached.
    * **Boundary Glow Effect:** A visual "Glow" effect is implemented on the opposite arrow when one is disabled, guiding the user to the available content.

### 3. General Implementation Standards
* **High Fidelity:** Replicated the exact UI, including typography, spacing, padding, and the specific dark, shadow-rich aesthetic (neomorphism/glass effect) seen in the Figma file.
* **Responsiveness:** All components are responsive for **laptop screens** (above 768px width).
* **Alignment:** Ensured the two widgets are precisely aligned with each other (relative right and left padding).

---

## ⚙️ Technologies Used

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | React.js | Building modular components and managing UI state. |
| **Styling** | Tailwind CSS | Utility-first styling for high-precision replication of the design. |
| **Interaction**| JavaScript (ES6+) | Handling dynamic tab switching, scroll events, and image uploads. |

---

## 🚀 Getting Started (Local Setup)

Follow these steps to set up and run the assignment locally.

### Prerequisites

You need to have **Node.js** and **npm** (or yarn) installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Saloni-developer01/Assigment.git
    cd [YOUR_PROJECT_FOLDER_NAME]
    ```

2.  **Install project dependencies:**
    ```bash
    npm install 
    # OR
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    # OR
    yarn start
    ```
    The application will typically open in your web browser at `http://localhost:3000`.

---

## ⚠️ Known Issue (Gallery Widget)

* **Image Clipping Anomaly:** Despite aggressive use of CSS anti-clipping measures (large padding buffers, `overflow-visible` on parent elements, and high `z-index` on hover), a minor visual anomaly (clipping) may occasionally occur during the aggressive hover-scaling of images in certain browser environments. This is due to the constraints of the nested scrollable container model.