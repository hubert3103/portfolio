# Hubert Piwowarski - Portfolio Website

A modern, responsive portfolio website showcasing UX/UI design, level design, and quest design work. Built with Next.js and featuring smooth scrolling navigation, interactive animations, and a clean, professional design.

![Portfolio Preview](public/portfolio-preview.png)

## 🌟 Features

- **Single-page design** with smooth scrolling navigation
- **Responsive layout** that works on all devices
- **Fixed navigation menu** with active section highlighting
- **Interactive animations** including fade-in effects for the About section
- **Project showcase** with detailed descriptions and skill indicators
- **Social media integration** with LinkedIn, Instagram, and YouTube links
- **Modern UI/UX** with green accent colors and clean typography
- **Optimized performance** with Next.js App Router

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - Frontend library
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript/JSX** - Programming language
- **CSS3** - Custom styling and animations
- **Vercel** - Deployment platform (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

\`\`\`
portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind CSS
│   ├── layout.jsx           # Root layout component
│   ├── page.jsx             # Main portfolio page
│   ├── about-me/page.jsx    # Redirect to about section
│   ├── projects/page.jsx    # Redirect to projects section
│   └── contact/page.jsx     # Redirect to contact section
├── public/
│   ├── background.png       # Background pattern image
│   ├── profilepic.jpg       # Profile photo
│   ├── neondusk.jpg         # Project image
│   ├── forestmaze.jpg       # Project image
│   └── quest.png            # Project image
├── tailwind.config.js       # Tailwind CSS configuration
├── next.config.mjs          # Next.js configuration
└── README.md               # Project documentation
\`\`\`

## 🎨 Customization

### Adding New Projects

To add a new project, edit the `projects` array in `app/page.jsx`:

\`\`\`javascript
const projects = [
  {
    id: 4, // Increment the ID
    title: "Your Project Title",
    type: "Project Type",
    tags: ["Tag1", "Tag2", "Tag3"],
    image: "/your-image.jpg", // Add image to public folder
    description: "Your project description...",
    focusPoints: [
      "Focus point 1",
      "Focus point 2",
      "Focus point 3"
    ],
    skills: [
      { name: "Skill Name", level: "Expert" }, // Levels: Beginner, Intermediate, Advanced, Expert
    ],
    inspiration: "Your inspiration text...",
    readMoreLink: "#" // Link to detailed project page
  }
]
\`\`\`

### Updating Personal Information

1. **Profile Photo**: Replace `public/profilepic.jpg` with your photo
2. **Name and Title**: Edit the Home section in `app/page.jsx`
3. **About Me Text**: Update the paragraphs in the About section
4. **Social Media Links**: Update the URLs in the navigation component

### Changing Colors

The portfolio uses a green accent color (`#00ff00`). To change this:

1. Search for `#00ff00` in the codebase
2. Replace with your preferred color
3. Update the `bg-green-500` classes in Tailwind if needed

### Adding New Sections

To add a new section:

1. Add the section to the navigation array
2. Create a new section element with a unique ID
3. Add the section to the intersection observer

## 📱 Responsive Design

The portfolio is fully responsive and includes:

- **Mobile-first approach** with responsive breakpoints
- **Flexible layouts** that adapt to different screen sizes
- **Touch-friendly navigation** for mobile devices
- **Optimized images** with Next.js Image component

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

### Deploy to Other Platforms

The portfolio can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js build command
- **AWS Amplify**: Connect your GitHub repository
- **Railway**: Deploy directly from GitHub

## 🔧 Environment Variables

No environment variables are required for basic functionality. If you add external APIs or services, create a `.env.local` file:

\`\`\`env
# Example environment variables
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
CONTACT_FORM_API=your_contact_api_url
\`\`\`

## 📊 Performance Optimization

The portfolio includes several performance optimizations:

- **Next.js Image optimization** for faster loading
- **CSS-in-JS** for efficient styling
- **Smooth scrolling** with `scroll-behavior: smooth`
- **Intersection Observer API** for efficient scroll detection
- **Minimal JavaScript bundle** size

## 🎯 SEO Features

- **Meta tags** configured in `layout.jsx`
- **Semantic HTML** structure
- **Alt text** for all images
- **Clean URLs** with Next.js routing

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**: Ensure images are in the `public` folder
2. **Styles not applying**: Check Tailwind CSS configuration
3. **Smooth scrolling not working**: Verify `scroll-behavior: smooth` in CSS
4. **Navigation not highlighting**: Check intersection observer setup

### Development Tips

- Use browser dev tools to debug styling issues
- Check console for JavaScript errors
- Test on multiple devices and browsers
- Validate HTML and CSS

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Hubert Piwowarski**

- LinkedIn: [linkedin.com/in/hubert-piwowarski](https://linkedin.com/in/hubert-piwowarski)
- Instagram: [@hubert_piwowarski](https://instagram.com/hubert_piwowarski)
- YouTube: [@hubertpiwowarski](https://youtube.com/@hubertpiwowarski)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)
- Icons from [Lucide React](https://lucide.dev/)

---

⭐ If you found this portfolio helpful, please consider giving it a star on GitHub!
