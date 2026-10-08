# Backend environment variables (Render)

Copy these from the Render service: **Environment**.

Paste the values into `backend/.env` for local runs. Do not commit that file.

```
PORT=
NODE_ENV=
FRONTEND_URL=
BACKEND_URL=
MONGODB_URI=
JWT_SECRET=
JWT_EXPIRE=
SESSION_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=
GEMINI_API_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

| Variable | What to put |
| --- | --- |
| `PORT` | Render sets this itself. Locally, `5000`. |
| `NODE_ENV` | `production` on Render, `development` locally. |
| `FRONTEND_URL` | The Vercel site URL. Locally, `http://localhost:5173`. |
| `BACKEND_URL` | The Render service URL. Locally, `http://localhost:5000`. |
| `MONGODB_URI` | MongoDB connection string. |
| `JWT_SECRET` | Secret used to sign login tokens. |
| `JWT_EXPIRE` | Token lifetime, for example `7d`. |
| `SESSION_SECRET` | Secret for the session cookie. |
| `GOOGLE_CLIENT_ID` | Google OAuth client id. |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret. |
| `GOOGLE_CALLBACK_URL` | Google OAuth callback. Defaults to `{BACKEND_URL}/api/auth/google/callback`. |
| `GEMINI_API_KEY` | Google Gemini API key. |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name. |
| `CLOUDINARY_API_KEY` | Cloudinary API key. |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret. |
