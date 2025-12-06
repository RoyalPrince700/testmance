# Deployment Guide

This guide explains how to deploy the TestMancer application to Vercel (frontend) and Render (backend).

## Frontend Deployment (Vercel)

### Prerequisites
- Vercel account
- Git repository connected to Vercel

### Deployment Steps

1. **Connect your repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your project
   - Select the `frontend` directory as the root directory

2. **Environment Variables**
   Set the following environment variable in Vercel's dashboard:

   ```
   VITE_API_URL=https://your-backend-app-name.onrender.com/api
   ```

   Replace `your-backend-app-name` with your actual Render app name.

3. **Build Settings**
   Vercel should automatically detect the settings from `vercel.json`, but verify:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**
   - Push to your main branch or trigger deployment manually
   - Vercel will build and deploy your React SPA

### Important: SPA Routing Configuration

The `vercel.json` file in the frontend directory ensures that:
- All routes serve `index.html` (enables React Router client-side routing)
- API routes are properly handled
- CORS headers are set for API communication

## Backend Deployment (Render)

### Prerequisites
- Render account
- MongoDB database (MongoDB Atlas recommended)

### Deployment Steps

1. **Connect your repository to Render**
   - Go to [render.com](https://render.com)
   - Create a new Web Service
   - Connect your Git repository
   - Set the root directory to `backend`

2. **Environment Variables**
   Set the following environment variables in Render:

   ```
   NODE_ENV=production
   PORT=10000
   MONGODB_URI=your-mongodb-connection-string
   FRONTEND_URL=https://your-frontend-app-name.vercel.app
   SESSION_SECRET=your-secure-random-string
   JWT_SECRET=your-jwt-secret-key

   # Google OAuth (if using)
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

   # Cloudinary (if using file uploads)
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   ```

3. **Build & Start Settings**
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

4. **Deploy**
   - Render will build and deploy your Express API
   - Note the URL provided by Render (e.g., `https://your-app-name.onrender.com`)

## Post-Deployment Configuration

1. **Update Frontend Environment Variable**
   - In Vercel, update `VITE_API_URL` with your Render backend URL:
   ```
   VITE_API_URL=https://your-backend-app-name.onrender.com/api
   ```
   - Redeploy the frontend

2. **Update Backend CORS**
   - In Render, update `FRONTEND_URL` with your Vercel frontend URL:
   ```
   FRONTEND_URL=https://your-frontend-app-name.vercel.app
   ```
   - Redeploy the backend

## Troubleshooting

### Common Vercel Issues

1. **404 Errors on Direct Links**
   - This is fixed by the `vercel.json` rewrites configuration
   - All routes now serve `index.html` for React Router to handle

2. **API Communication Issues**
   - Ensure `VITE_API_URL` is set correctly in Vercel
   - Check that the backend allows CORS from your Vercel domain

3. **Build Failures**
   - Verify all dependencies are in `package.json`
   - Check build logs for specific errors

### Common Render Issues

1. **Port Issues**
   - Render assigns a dynamic port via `PORT` environment variable
   - The server.js file correctly uses `process.env.PORT || 5000`

2. **Database Connection**
   - Ensure `MONGODB_URI` is correct
   - Check MongoDB Atlas network access settings

3. **CORS Issues**
   - Update `FRONTEND_URL` in Render environment variables
   - Ensure it matches your Vercel domain exactly

## Environment Variables Summary

### Frontend (Vercel)
- `VITE_API_URL`: Full URL to your Render backend API (including `/api`)

### Backend (Render)
- `NODE_ENV`: `production`
- `PORT`: `10000` (set by Render)
- `MONGODB_URI`: MongoDB connection string
- `FRONTEND_URL`: Your Vercel frontend URL (without trailing slash)
- `SESSION_SECRET`: Random secure string for sessions
- `JWT_SECRET`: Random secure string for JWT tokens

## Testing Deployment

1. **Frontend**: Visit your Vercel URL
2. **API Health Check**: Visit `https://your-backend.onrender.com/api/health`
3. **Full Integration**: Test login, navigation, and API calls

## Security Notes

- Never commit `.env` files to version control
- Use strong, unique secrets for `SESSION_SECRET` and `JWT_SECRET`
- Regularly rotate API keys and secrets
- Enable HTTPS-only traffic in production
