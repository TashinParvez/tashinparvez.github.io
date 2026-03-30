# tashinparvez.github.io

## File Structure

```
tashinparvez.github.io/
│
├── index.html               # Main homepage (Hero, About, Skills, Interests, Awards, Research, Projects, Recent Creations, Blog, Testimonials, Follow Me, Contact)
├── about.html               # Dedicated About Me page (optional, for extended bio)
├── projects.html            # Full portfolio projects page
├── blog.html                # All blog posts page (optional)
├── contact.html             # Contact form / Get in Touch page
│
├── assets/                  # All static files
│   ├── css/
│   │   ├── style.css         # Custom styles (dark/light theme, layouts)
│   │   └── bootstrap.min.css # Bootstrap 5 CSS (optional CDN)
│   │
│   ├── data-json/
│   │   ├── projects.json
│   │   └── papers.json
│   │
│   ├── js/
│   │   ├── main.js          # Custom JS (theme toggle, smooth scroll, carousel)
│   │   └── bootstrap.bundle.min.js # Bootstrap 5 JS (optional CDN)
│   │
│   └── images/              # All images
│       ├── profile.jpg      # Your avatar/photo
│       ├── hero-bg.jpg      # Hero section background
│       ├── project1.png     # Screenshots of projects
│       ├── project2.png
│       └── awards/          # Subfolder for award/cert images
│
├── fonts/                   # Optional: custom fonts
│   └── ...                  # e.g., Google Fonts or downloaded fonts
│
├── posts/                   # Optional folder for individual blog posts
│   ├── post1.html
│   └── post2.html
│
├── README.md                # Documentation / Notes about the website
└── .gitignore               # Ignore node_modules, logs, etc.

```

---

## A-to-Z Site Page Structure

```
Homepage (index.html)
|
|- Hero/Greeting (Top hero section: Big name/logo, tagline like "CSE Student & Innovator at UIU | Building Tools for Better Lives", background image or subtle animation. Include a down-arrow to scroll to about.)
|
|- About Yourself (Short bio: UIU background, CP passion, ambitions like Google CEO/startup. Add photo/avatar. Keep 200-300 words.) (250-300 words: UIU CSE student, project highlights, CP passion, CEO ambitions. Teaser: “See My Journey” to experience.html, “Learn More About My Studies” to education.html.)
|
|- Skills/Some of My Expertise (Grid of icons/badges: e.g., HTML/CSS/JS, Bootstrap, CP (algorithms/DSA), teaching friends. Use progress bars or stars for levels.)
|
|
|- Interests (Bullet list or cards: Coding, movies, learning English, innovative ideas. Tie to projects, e.g., "Movies inspire my creative problem-solving.")
|
|- Awards & Certificates (Timeline or list: Any CP rankings, UIU achievements, certs like online courses. Show 3-4; "See More" to awards.html if many.)
|
|- Research Experience (If applicable; describe any UIU research or personal experiments. If none, shorten or merge with projects. Teaser: 1-2 entries.)
|
|- Notable Projects/Portfolio (Teaser: Show 4-5 top projects as cards—e.g., faculty schedule website first. Each: Title, desc, tech, screenshot, GitHub/live link. "See More" button to projects.html for full list.)
|
|- Recent Creations (Highlighted section: Focus on 1-3 newest apps/soft/products, like your UIU schedule tool. Use cards with "New!" badges. This is where the navbar button jumps.)
|
|- Recent Posts / Blog (Teaser: Show 3-4 latest blog posts as summaries (title, excerpt, date). Topics: CP tips, project stories, English learning. "See More" to blog.html.)
|
|- Testimonials (Quotes from friends/peers/UIU faculty, e.g., "Tashin's tool saved me time!" Show 3-4 in a carousel.)
|
|- Follow Me (Social icons: LinkedIn, GitHub, Codeforces, X/Twitter. Embed recent X posts if relevant.)
|
|- Contact / Get in Touch (Form: Name, email, message. Use Formspree or similar for submission. Add email/phone/location.)
```

```
Projects Page (projects.html)
|
|- Header (Back to home button, page title: "Full Portfolio".)
|
|- All Projects Grid (Expanded list: 10+ projects in Bootstrap grid. Filter by category via JS, e.g., "CP Tools", "Web Apps". Include search bar for easy finding.)
|
|- Footer (Repeat contact/social links.)
```

```
Blog Page (blog.html)
|
|- Header (Back to home, title: "My Insights".)
|
|- All Posts List (Full chronological list with pagination via JS. Each post: Full content or links to individual post pages if very long.)
|
|- Sidebar (Categories: CP, Movies, Startups; recent comments if added.)
|
|- Footer (Same as above.)
```

```
Awards Page (awards.html) - Optional, if many
|
|- Header (Back to home.)
|
|- Full Timeline (Detailed list with dates, descriptions, proofs like cert images.)
|
|- Footer.
```

```
Individual Blog Post Pages (e.g., post1.html) - If needed for long posts
|
|- Header (Back to blog/home.)
|
|- Post Content (Title, date, full body, comments section via Disqus JS.)
|
|- Related Posts (3 suggestions.)
|
|- Footer.
```

```
Footer (Global, on all pages)
|
|- Copyright, quick links to privacy/terms (if added), back-to-top button.
```

---

