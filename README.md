<<<<<<< HEAD
# Personal Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Node.js backend with contact form functionality.

## 🚀 Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Modern Tech Stack**: React + Tailwind CSS for frontend
- **Contact Form**: Working contact form with email functionality
- **Fast Loading**: Built with Vite for optimal performance
- **Professional Layout**: Clean, modern design showcasing skills and experience

## 🛠️ Tech Stack

### Frontend
- React 18
- Tailwind CSS
- Vite
- React Router DOM

### Backend
- Node.js
- Express.js
- Nodemailer
- CORS

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- npm or yarn
- Gmail account for contact form email functionality

## ⚡ Quick Start

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd my-project
```

### 2. Install frontend dependencies
```bash
npm install
```

### 3. Install backend dependencies
```bash
cd backend
npm install
cd ..
```

### 4. Set up environment variables
Create a `.env` file in the `backend` folder:
```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
PORT=5000
```

#### Getting Gmail App Password:
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security → 2-Step Verification → App passwords
4. Generate a new app password for "Mail"
5. Use this 16-character password in your `.env` file

### 5. Run the development servers

#### Start the backend server:
```bash
cd backend
npm start
```

#### Start the frontend development server (in a new terminal):
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`
The backend API will be available at `http://localhost:5000`

## 📁 Project Structure

```
my-project/
├── public/              # Static assets
├── src/                 # React source files
│   ├── App.jsx         # Main application component
│   ├── home.jsx        # Homepage component
│   ├── about.jsx       # About page component
│   ├── contact.jsx     # Contact form component
│   └── ...
├── backend/            # Node.js backend
│   ├── routes/         # API routes
│   ├── server.js       # Express server
│   └── package.json    # Backend dependencies
├── package.json        # Frontend dependencies
└── README.md          # This file
```

## 🎨 Customization

### Updating Content
- Edit `src/home.jsx` to update the homepage content
- Edit `src/about.jsx` to update the about page
- Edit `src/contact.jsx` to modify the contact form
- Update `src/App.jsx` for navigation and global changes

### Styling
- Tailwind CSS classes are used throughout
- Custom styles can be added to `src/index.css`

## 📧 Contact Form

The contact form sends emails using Gmail SMTP. Make sure to:
1. Set up your Gmail app password
2. Update the `.env` file with your credentials
3. Modify the recipient email in `backend/routes/contact.js` if needed

## 🚀 Deployment

### Frontend Deployment (Netlify/Vercel)
```bash
npm run build
```
Deploy the `dist` folder to your hosting provider.

### Backend Deployment (Heroku/Railway)
Make sure to set environment variables in your hosting platform's dashboard.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

Feel free to reach out through the contact form on the website or connect with me on professional networks.

---

Built with ❤️ using React and Node.js
