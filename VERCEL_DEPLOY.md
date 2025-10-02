# Vercel Deployment Guide

## Prerequisites
1. Push your project to GitHub
2. Have a Vercel account (vercel.com)
3. Have Gmail app password for email functionality

## Deployment Steps

### 1. Import Project to Vercel
1. Go to vercel.com and log in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Vite project

### 2. Configure Environment Variables
In your Vercel project dashboard, go to Settings > Environment Variables and add:

**For all environments (Production, Preview, Development):**
- `EMAIL_USER`: Your Gmail address (e.g., your-email@gmail.com)
- `EMAIL_PASS`: Your Gmail app password (not your regular password)

**For production environment only:**
- `VITE_API_URL`: Leave empty (Vercel will use the same domain for API routes)

### 3. Deploy
1. Click "Deploy" in Vercel
2. Wait for the build to complete
3. Your site will be live at your-project-name.vercel.app

## Setting up Gmail App Password

1. Enable 2-Factor Authentication on your Google account
2. Go to Google Account Settings > Security > App passwords
3. Generate a new app password for "Mail"
4. Use this 16-character password (not your regular Google password) as EMAIL_PASS

## Local Development

1. Copy `.env.example` to `.env.local`
2. Update the values in `.env.local`
3. Run `npm run dev` to start the development server

## Project Structure Changes

- Backend routes moved to `/api` directory as serverless functions
- Original `/backend` directory can be removed after testing
- Frontend uses environment variables for API URLs
- Automatic CORS handling in API functions

## Testing the Deployment

1. Test the contact form on your live site
2. Check that projects page loads correctly
3. Verify all environment variables are set correctly in Vercel dashboard

## Notes

- API routes are now serverless functions at `/api/contact` and `/api/projects`
- The contact form will send emails through your Gmail account
- Projects data is hardcoded but can be connected to a database later
- Build output goes to `/dist` directory for static hosting