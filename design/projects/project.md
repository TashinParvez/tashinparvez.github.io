### `points : As Highlights`

```js
points: [
  "Built authentication and dashboard system",
  "Added responsive UI for mobile and desktop",
  "Integrated search and filtering features",
];
```

---

### `type`

```js
type: "case-study";
```

Internal project type.

This is mostly for organization. In your current code, the visible label comes from `typeName`, but some filtering also depends on `tags`.

Current examples:

- `case-study`
- `web-app`
- `research`

You can create more, but if you want filtering support, you may need to update filter logic too.

---

### `typeName`

```js
typeName: "Case Study";
```

Human-readable label shown on the card and modal badge.

Examples:

- `Case Study`
- `Web App`
- `IEEE Research`

---

### 📌📌 `tags : Used In Filters [Important]`

This is one of the **most important** parts.
Tags control filtering.

```js
tags: ["featured", "web", "case-study"];
```

Your current filter system uses these tags:

- `featured`
- `case-study`
- `has-demo`
- `web`
- `data-science`
- `research`

### What each one means

#### `featured`

Project appears when user clicks **Featured** filter.

#### `case-study`

Project appears when user clicks **Case Study** filter.

#### `has-demo`

Project appears when user clicks **Has Demo** filter.

#### `web`

Project appears when user clicks **Web Development** filter.

#### `data-science`

Project appears when user clicks **Data Science** filter.

#### `research`

Project appears when user clicks **Research** filter.

<!-- ================================================================== -->
<!-- ================================================================== -->
<!-- ================================================================== -->
<!-- ================================================================== -->

---

### `award`

```js
award: "Champion";
```

Used to decide whether an award badge should show.

If no award:

```js
award: null;
```

---

### `awardClass`

```js
awardClass: "award-gold";
```

Controls badge style.

Current classes available in your CSS:

- `award-gold` → champion / winner
- `award-silver` → 1st runner-up
- `award-bronze` → 2nd runner-up
- `award-ieee` → publication / research / special blue badge

If no award:

```js
awardClass: "";
```

---

### `awardLabel`

```js
awardLabel: "🏆 Champion · 71 teams";
```

This is the actual text shown inside the badge.

If no award:

```js
awardLabel: "";
```

---

### `year`

```js
year: 2026;
```

Used for sorting:

- latest
- oldest

So always add the correct year.

---

### `links`

```js
links: [
  {
    label: "View Demo",
    icon: "play",
    href: "https://example.com",
    type: "primary",
  },
  {
    label: "View Code",
    icon: "code",
    href: "https://github.com/username/repo",
    type: "ghost",
  },
];
```

This is also very important.

Each link object has:

#### `label`

Button text

Examples:

- `View Demo`
- `View Code`
- `View Paper`
- `Dataset`
- `Recognition`

#### `icon`

Must match one of the icons defined in `getIcon()`.

Available icons in your code:

- `code`
- `play`
- `doc`
- `link`
- `data`
- `model`
- `arrow` ← internal use, usually not needed in project links

So for project links, use:

- `code` for GitHub/source
- `play` for live demo
- `doc` for case study/document
- `link` for external page
- `data` for dataset
- `model` for ML model if needed

#### `href`

URL

Examples:

```js
href: "https://github.com/yourname/project";
```

If you put `'#'`, the button will show but not go anywhere.

#### `type`

Button style:

- `primary`
- `ghost`

Use:

- `primary` for main action
- `ghost` for secondary actions

### Important note

On the card, only the **first 2 links** are shown:

```js
const topLinks = proj.links.slice(0, 2);
```

But in the modal, **all links** are shown.

So put the most important 2 links first.

---

### `img`

```js
img: "../../assets/images/projects/myproject.png";
```

Project image.

If image exists, card and modal show it.
If no image, the code shows a placeholder automatically.

You can use:

- local path
- external image URL

Examples:

```js
img: "../../assets/images/projects/newproject.png";
```

or

```js
img: "https://images.unsplash.com/...";
```

If you want no image:

```js
img: "";
```

or remove it, though keeping it is cleaner.

---

### `featured`

```js
featured: true;
```

This supports the Featured filter.

Even though you also use the `featured` tag, your filter code checks this boolean for the Featured filter:

```js
'featured': p => p.featured,
```

So for featured projects, do both:

```js
tags: ["featured", "web"];
featured: true;
```

For non-featured:

```js
featured: false;
```

---

## 3. Best template to add a new project

Use this format:

```js
{
  id: 6,
  title: 'Project Name',
  subtitle: 'Short subtitle',
  desc: 'A short explanation of what the project does and why it matters.',
  points: [
    'Main feature or achievement 1',
    'Main feature or achievement 2',
    'Main feature or achievement 3'
  ],
  tech: ['HTML', 'CSS', 'JavaScript'],
  type: 'web-app',
  typeName: 'Web App',
  tags: ['web', 'has-demo'],
  award: null,
  awardClass: '',
  awardLabel: '',
  year: 2026,
  links: [
    { label: 'View Demo', icon: 'play', href: 'https://your-demo-link.com', type: 'primary' },
    { label: 'View Code', icon: 'code', href: 'https://github.com/yourname/project', type: 'ghost' }
  ],
  img: '../../assets/images/projects/project-name.png',
  featured: false,
}
```

---

## 4. Example for different kinds of projects

## A. Web project

```js
{
  id: 6,
  title: 'ShopFlow',
  subtitle: 'E-commerce Web Platform',
  desc: 'Built a responsive e-commerce platform with product browsing, cart management, and order tracking.',
  points: [
    'Designed responsive product and checkout pages',
    'Implemented cart and order management features',
    'Created admin-friendly product handling workflow'
  ],
  tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  type: 'web-app',
  typeName: 'Web App',
  tags: ['web', 'has-demo'],
  award: null,
  awardClass: '',
  awardLabel: '',
  year: 2026,
  links: [
    { label: 'View Demo', icon: 'play', href: 'https://example.com', type: 'primary' },
    { label: 'View Code', icon: 'code', href: 'https://github.com/example/shopflow', type: 'ghost' }
  ],
  img: '../../assets/images/projects/shopflow.png',
  featured: false,
}
```

## B. Research project

```js
{
  id: 7,
  title: 'CropVision',
  subtitle: 'Plant Disease Detection Research',
  desc: 'Developed a computer vision-based system to detect crop disease from leaf images for early agricultural intervention.',
  points: [
    'Prepared and cleaned image dataset for training',
    'Built disease classification workflow using deep learning',
    'Focused on real-world agricultural assistance'
  ],
  tech: ['Python', 'TensorFlow', 'OpenCV', 'Pandas'],
  type: 'research',
  typeName: 'Research',
  tags: ['research', 'data-science', 'featured'],
  award: 'Conference Submission',
  awardClass: 'award-ieee',
  awardLabel: '📄 Conference Work',
  year: 2026,
  links: [
    { label: 'View Paper', icon: 'doc', href: 'https://example.com/paper.pdf', type: 'primary' },
    { label: 'View Code', icon: 'code', href: 'https://github.com/example/cropvision', type: 'ghost' }
  ],
  img: '../../assets/images/projects/cropvision.png',
  featured: true,
}
```

---

## 5. Which tags to use for which type of project

Here’s the practical mapping for your current code:

### For portfolio-highlight project

```js
tags: ["featured"];
featured: true;
```

### For web development project

```js
tags: ["web"];
```

### For project with live demo

```js
tags: ["has-demo"];
```

### For case study project

```js
tags: ["case-study"];
```

### For data/AI/ML project

```js
tags: ["data-science"];
```

### For academic/research project

```js
tags: ["research"];
```

### Combined examples

#### Web + demo

```js
tags: ["web", "has-demo"];
```

#### Featured web case study

```js
tags: ["featured", "web", "case-study"];
featured: true;
```

#### Research + AI

```js
tags: ["research", "data-science"];
```

#### Featured research

```js
tags: ["featured", "research", "data-science"];
featured: true;
```

---

## 6. Very important things to keep correct

These are the common mistakes that break things.

### 1. Missing comma

Each project object must be separated by commas.

Wrong:

```js
{
  id: 5,
  title: 'AutoTrack'
}
{
  id: 6,
  title: 'Next Project'
}
```

Correct:

```js
{
  id: 5,
  title: 'AutoTrack'
},
{
  id: 6,
  title: 'Next Project'
}
```

---

### 2. Repeated `id`

Every project should have a unique `id`.

---

### 3. Wrong tag name

Only these filter tags currently work:

```js
featured
case-study
has-demo
web
data-science
research
```

If you write:

```js
tags: ["website"];
```

that will **not** work with your filter system, because the code is checking for `web`, not `website`.

---

### 4. Featured filter needs `featured: true`

In your code, the Featured filter checks:

```js
p.featured;
```

not just the tag. So set:

```js
featured: true;
```

for featured projects.

---

### 5. Bad icon name

Only use icons already defined in `getIcon()`.

Wrong:

```js
icon: "github";
```

Correct:

```js
icon: "code";
```

---

### 6. Card shows only first 2 links

Put the most important links first in the `links` array.

Example:

```js
links: [
  { label: "View Demo", icon: "play", href: "...", type: "primary" },
  { label: "View Code", icon: "code", href: "...", type: "ghost" },
  { label: "Documentation", icon: "doc", href: "...", type: "ghost" },
];
```

Then:

- card shows first 2
- modal shows all 3

---

## 7. If you want to add a completely new filter category

Right now filters are hardcoded in two places:

### In HTML pills

```html
<span class="filter-pill" data-filter="research">Research</span>
```

### In JavaScript filter map

```js
const map = {
  featured: (p) => p.featured,
  "case-study": (p) => p.tags.includes("case-study"),
  "has-demo": (p) => p.tags.includes("has-demo"),
  web: (p) => p.tags.includes("web"),
  "data-science": (p) => p.tags.includes("data-science"),
  research: (p) => p.tags.includes("research"),
};
```

So if you want a new filter like `mobile`, you must add both:

#### HTML

```html
<span class="filter-pill" data-filter="mobile">Mobile App</span>
```

#### JS map

```js
'mobile': p => p.tags.includes('mobile'),
```

Then your project can use:

```js
tags: ["mobile"];
```

That is how new categories are added.

---

## 8. Minimum fields needed for a safe working project

If you want everything to work nicely, use all fields.

But minimum practical version:

```js
{
  id: 6,
  title: 'New Project',
  subtitle: 'Short subtitle',
  desc: 'Short description',
  points: ['Point 1', 'Point 2'],
  tech: ['HTML', 'CSS', 'JS'],
  type: 'web-app',
  typeName: 'Web App',
  tags: ['web'],
  award: null,
  awardClass: '',
  awardLabel: '',
  year: 2026,
  links: [
    { label: 'View Code', icon: 'code', href: 'https://github.com/your/repo', type: 'primary' }
  ],
  img: '../../assets/images/projects/newproject.png',
  featured: false,
}
```

---

## 9. My recommendation for “everything works perfectly”

For each new project, always check this checklist:

```js
id: unique number
title: project name
subtitle: short subtitle
desc: short summary
points: 3 highlights
tech: tech tags
type: internal type
typeName: display type
tags: correct filter tags
award: null or value
awardClass: matching badge class
awardLabel: matching badge text
year: correct year
links: valid links with valid icon names
img: valid image path or URL
featured: true or false
```

---

## 10. Best real-world rule for your code

### Use these patterns:

#### Normal web project

```js
type: "web-app";
typeName: "Web App";
tags: ["web"];
featured: false;
```

#### Web project with live demo

```js
tags: ["web", "has-demo"];
```

#### Strong portfolio project

```js
tags: ["featured", "web"];
featured: true;
```

#### Case study project

```js
type: "case-study";
typeName: "Case Study";
tags: ["case-study", "web"];
```

#### Research / AI project

```js
type: "research";
typeName: "Research";
tags: ["research", "data-science"];
```

---

## 11. One thing I noticed in your code

The code is well-structured for data-driven projects, but **Featured filter depends on `featured: true`**, while most other filters depend on `tags`. So that one is slightly different from the rest. That’s something to remember carefully.

---

## 12. Final sample you can paste directly

```js
{
  id: 6,
  title: 'EduTrack',
  subtitle: 'Student Performance Management System',
  desc: 'Built a web-based student performance tracking system to help monitor academic progress, attendance, and reporting in one place.',
  points: [
    'Designed dashboard for tracking results and attendance',
    'Built search and filtering for student records',
    'Focused on usability for students, teachers, and administrators'
  ],
  tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
  type: 'web-app',
  typeName: 'Web App',
  tags: ['web', 'has-demo'],
  award: null,
  awardClass: '',
  awardLabel: '',
  year: 2026,
  links: [
    { label: 'View Demo', icon: 'play', href: 'https://example.com/edutrack', type: 'primary' },
    { label: 'View Code', icon: 'code', href: 'https://github.com/yourname/edutrack', type: 'ghost' }
  ],
  img: '../../assets/images/projects/edutrack.png',
  featured: false,
}
```

```

```
