# EduShare - GTU Notes Website 📚

A comprehensive educational platform designed specifically for Gujarat Technological University (GTU) students to access and share academic resources for IT, Computer Engineering (CE), and Computer Science Engineering (CSE) branches.

## 🌟 Features

### 📋 **Academic Resources**

- **Syllabus** - Complete curriculum outlines for all subjects
- **Previous Papers** - Collection of past examination papers
- **Study Notes** - Comprehensive notes for each subject
- **YouTube Playlists** - Curated video lectures and tutorials
- **Paper Solutions** - Detailed solutions to previous year papers
- **Reference Books** - Essential textbooks and reference materials

### 🎓 **Complete Coverage**

- **8 Semesters** - Resources for all semesters (1st to 8th)
- **Multiple Branches** - IT, CE, and CSE specializations
- **Subject-wise Organization** - Easy navigation by subjects
- **Responsive Design** - Works perfectly on all devices

### ✨ **User Experience**

- Modern, clean interface with smooth animations
- Interactive subject selection with modal popups
- Responsive design for desktop, tablet, and mobile
- Smooth scroll navigation
- Contact form for user feedback

## 🚀 Live Demo

Open `index.html` in your web browser to explore the platform.

## 📁 Project Structure

```
notes-website/
│
├── index.html              # Main homepage
├── css/
│   └── style.css          # Complete styling with responsive design
├── js/
│   ├── script.js          # Main page functionality
│   └── semester.js        # Semester pages interaction & modal handling
└── semesters/
    ├── semester1.html     # Semester 1 & 2 (Foundation courses)
    ├── semester2.html     # Additional semester 2 resources
    ├── semester3.html     # Core CS/IT subjects begin
    ├── semester4.html     # Advanced programming & systems
    ├── semester5.html     # Specialization subjects
    ├── semester6.html     # Advanced topics & electives
    ├── semester7.html     # Industry-focused subjects
    └── semester8.html     # Final year project & internship
```

## 🛠️ Technologies Used

### Frontend

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with:
  - Flexbox & CSS Grid layouts
  - CSS Variables for consistent theming
  - Smooth animations and transitions
  - Responsive media queries
  - Gradient backgrounds and modern effects
- **Vanilla JavaScript** - Interactive functionality:
  - Modal dialogs for subject resources
  - Smooth scrolling navigation
  - Form handling
  - Dynamic content loading

### Design Features

- **Responsive Design** - Mobile-first approach
- **Modern UI/UX** - Clean, professional interface
- **Accessibility** - Keyboard navigation and screen reader friendly
- **Performance** - Optimized for fast loading

## 📚 Semester Coverage

### **Semester 1 & 2 (Foundation)**

- Mathematics (Calculus, Algebra, Statistics)
- Physics & Chemistry
- Basic Electrical & Electronics Engineering
- Programming for Problem Solving
- Engineering Graphics & Design
- Workshop/Manufacturing Practices
- Environmental Sciences
- English Communication

### **Semester 3 (Core Begins)**

- Digital Fundamentals
- Database Management System (DBMS)
- Data Structures
- Design Engineering 1A
- Indian Constitution
- Probability & Statistics
- Technical Communication

### **Semester 4 (System Foundation)**

- Operating Systems
- Economics & Management
- Discrete Mathematics
- Computer Architecture & Organization
- Object-Oriented Programming
- Design Engineering 1B

### **Semester 5 (Specialization)**

- Data Science & Analytics
- Web Technology
- Analysis & Design of Algorithms
- Information & Cyber Security
- Computer Networks
- Professional Ethics & Human Values
- Design Engineering 2A

### **Semester 6 (Advanced Topics)**

- Data Visualization
- Mobile Application Development
- Advanced Web Technology
- Artificial Intelligence
- Cryptography & Network Security
- Software Engineering
- Design Engineering 2B

### **Semester 7 (Industry Focus)**

- Blockchain Technology
- Machine Learning
- Computer Vision
- UI/UX Design
- Project Management & Entrepreneurship
- Wireless Communication & IOT
- Summer Internship

### **Semester 8 (Capstone)**

- Major Project/Dissertation
- Industrial Training/Internship

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, Atom) for modifications
- Basic knowledge of HTML/CSS/JavaScript for customization

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/edushare-gtu-notes.git
   cd edushare-gtu-notes
   ```

2. **Open the project**

   ```bash
   # Simply open index.html in your browser
   # For development, use VS Code Live Server extension
   code .
   ```

3. **Local Development**
   - Install VS Code Live Server extension
   - Right-click on `index.html` → "Open with Live Server"
   - The site will open at `http://localhost:5500`

## ⚙️ Configuration

### Adding Resource Links

Edit `js/semester.js` to add Google Drive links or other resource URLs:

```javascript
const subjectLinks = {
  "subject-key": {
    syllabus: "https://drive.google.com/...",
    papers: "https://drive.google.com/...",
    notes: "https://drive.google.com/...",
    youtube: "https://youtube.com/playlist?list=...",
    solutions: "https://drive.google.com/...",
    books: "https://drive.google.com/...",
  },
};
```

### Customizing Subjects

To modify subjects for any semester:

1. Open the respective `semester{X}.html` file
2. Update the subject boxes with correct subject names and codes
3. Add corresponding entries in `semester.js` subjectLinks object

### Styling Customization

Edit `css/style.css` to modify:

- Color scheme (CSS variables at top of file)
- Layout and spacing
- Animations and effects
- Responsive breakpoints

## 🎨 Design System

### Color Palette

- **Primary Blue**: `#233d4d` - Navigation, headers
- **Accent Orange**: `#FE7F2D` - CTAs, highlights
- **Light Gray**: `#f8fafc` - Background
- **Text Gray**: `#64748b` - Secondary text

### Typography

- **Primary Font**: Segoe UI, Inter, Arial
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400-500)

### Components

- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Gradient backgrounds, hover effects
- **Modals**: Backdrop blur, slide-in animation
- **Grid Layouts**: Responsive, auto-fit columns

## 📱 Responsive Design

### Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

### Mobile Optimizations

- Touch-friendly button sizes
- Simplified navigation
- Single-column layouts
- Optimized font sizes
- Reduced spacing for better content density

## 🔧 Development

### Code Structure

**HTML**

- Semantic HTML5 structure
- Accessible form elements
- SEO-friendly meta tags

**CSS**

- Mobile-first responsive design
- CSS Grid and Flexbox layouts
- CSS custom properties (variables)
- Smooth animations with CSS transitions

**JavaScript**

- Modular, reusable functions
- Event delegation for performance
- Smooth scrolling navigation
- Modal handling with keyboard support

### Performance Optimizations

- Minimal external dependencies
- Optimized CSS selectors
- Efficient JavaScript event handling
- Responsive images (when added)
- Minification ready code structure

## 📋 Roadmap

### Phase 1 (Current) ✅

- [x] Basic website structure
- [x] All semester pages
- [x] Responsive design
- [x] Subject modal system
- [x] Contact form

### Phase 2 (Planned)

- [ ] Resource link integration
- [ ] Search functionality
- [ ] User authentication
- [ ] Resource upload system
- [ ] Download tracking

### Phase 3 (Future)

- [ ] Dark mode toggle
- [ ] Bookmark system
- [ ] Study planner
- [ ] Discussion forums
- [ ] Mobile app (PWA)

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

1. **Add Resource Links** - Share your study materials
2. **Report Issues** - Help us identify bugs or improvements
3. **Suggest Features** - Propose new functionality
4. **Improve Documentation** - Help make guides clearer
5. **Code Contributions** - Submit pull requests

### Contribution Guidelines

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with clear messages**
   ```bash
   git commit -m "Add: Resource links for Semester 5 subjects"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Submit a Pull Request**

### Code Style

- Use meaningful variable names
- Add comments for complex logic
- Follow existing indentation (2 spaces)
- Test on multiple devices/browsers

## 🐛 Issues & Support

### Common Issues

**Modal not opening?**

- Check browser console for JavaScript errors
- Ensure `semester.js` is loaded correctly

**Responsive layout broken?**

- Verify CSS Grid and Flexbox support
- Test on multiple screen sizes

**Links not working?**

- Update resource URLs in `semester.js`
- Check for typos in subject keys

### Getting Help

1. **Check existing issues** on GitHub
2. **Search documentation** in this README
3. **Create new issue** with detailed description
4. **Contact us** through the website contact form

## 👥 Team

### Project Creator

**Taksh Patel** - _Full Stack Developer_

- GitHub: [@takshpatel](https://github.com/TakshPatel02)
- Email: takshpatel022@gmail.com

### Acknowledgments

- GTU students and faculty for resource requirements feedback
- Open source community for inspiration and tools
- Contributors who help maintain and improve the platform

---

### 🌟 Show Your Support

If this project helps you, please consider:

- ⭐ **Starring** the repository
- 🍴 **Forking** for your own improvements
- 📢 **Sharing** with fellow GTU students
- 💡 **Contributing** your resources and ideas

**Made with ❤️ for GTU Students**

_Last updated: September 2025_
