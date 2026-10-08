# Frontend environment variables (Vercel)

Copy these from the Vercel project: **Settings → Environment Variables**.

Paste the values into `frontend/.env` for local runs. Vite only reads variables that start with `VITE_`.

```
VITE_API_URL=http://localhost:5000/api
```

`VITE_API_URL` must include `/api`. Google sign-in calls `{VITE_API_URL}/auth/google`, which is `http://localhost:5000/api/auth/google` locally. On Vercel, copy the same variable and keep the `/api` suffix, for example `https://testmance.onrender.com/api`.
