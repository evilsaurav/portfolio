const fs = require('fs');

// 1. Projects.jsx
let content = fs.readFileSync('src/sections/Projects.jsx', 'utf8');
content = content.replace(/framer-motion/g, 'motion/react');
content = content.replace(/import ScrollStack.*?\n/g, 'import ScrollStack, { ScrollStackItem } from \'../components/ScrollStack\';\nimport { myProjects } from \'../constants/index.js\';\n');
content = content.replace(/const projects = \[[\s\S]*?\];/g, `const projects = myProjects.map((p, idx) => ({
  number: String(idx + 1).padStart(2, '0'),
  title: p.title,
  category: p.tags && p.tags[0] ? p.tags[0].name.toUpperCase() : 'PROJECT',
  description: p.description + (p.subDescription ? ' ' + p.subDescription.join(' ') : ''),
  githubUrl: p.href || '#',
  tech: p.tags ? p.tags.map(t => t.name) : [],
  metrics: [
    { label: 'STATUS', value: 'Deployed' }
  ]
}));`);
content = content.replace(/export const ProjectsSection/g, 'const ProjectsSection');
content = content.replace(/export default ProjectsSection;/g, 'export default ProjectsSection;');
fs.writeFileSync('src/sections/Projects.jsx', content);

// 2. Experiences.jsx
let exp = fs.readFileSync('src/sections/Experiences.jsx', 'utf8');
exp = exp.replace(/framer-motion/g, 'motion/react');
exp = exp.replace(/import React, { useRef } from 'react';/, 'import React, { useRef } from \'react\';\nimport { experiences } from \'../constants/index.js\';');
exp = exp.replace(/const journey[\s\S]*?\];/g, `const journey = experiences.map((e, i) => ({
  id: String(i + 1).padStart(2, '0'),
  year: e.date,
  title: e.title,
  organization: e.job,
  description: e.contents ? e.contents.join(' ') : ''
}));`);
exp = exp.replace(/export const ExperienceSection/g, 'const ExperienceSection');
exp = exp.replace(/export default ExperienceSection;/g, 'export default ExperienceSection;');
fs.writeFileSync('src/sections/Experiences.jsx', exp);

// 3. About.jsx
let about = fs.readFileSync('src/sections/About.jsx', 'utf8');
about = about.replace(/framer-motion/g, 'motion/react');
about = about.replace(/export const AboutSection/g, 'const AboutSection');
about = about.replace(/export default AboutSection;/g, 'export default AboutSection;');
about = about.replace(/Lohitha/g, 'Saurav');
about = about.replace(/Damisetti/g, 'Kumar');
fs.writeFileSync('src/sections/About.jsx', about);

// 4. Contact.jsx
let contact = fs.readFileSync('src/sections/Contact.jsx', 'utf8');
contact = contact.replace(/framer-motion/g, 'motion/react');
contact = contact.replace(/export const ContactSection/g, 'const ContactSection');
contact = contact.replace(/export default ContactSection;/g, 'export default ContactSection;');
contact = contact.replace(/lohithadamisetti123@gmail.com/g, 'souravkumarsk@gmail.com');
contact = contact.replace(/github.com\/lohithadamisetti123/g, 'github.com/evilsaurav');
fs.writeFileSync('src/sections/Contact.jsx', contact);

// 5. Skills.jsx
let skills = fs.readFileSync('src/sections/Skills.jsx', 'utf8');
skills = skills.replace(/framer-motion/g, 'motion/react');
skills = skills.replace(/export const SkillsSection/g, 'const SkillsSection');
skills = skills.replace(/export default SkillsSection;/g, 'export default SkillsSection;');
fs.writeFileSync('src/sections/Skills.jsx', skills);
