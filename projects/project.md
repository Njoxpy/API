# 🎧 Final Project: **"TrackVault" – A Personal Music Library API**

**Theme**: Let your friend build their own backend for managing favorite tracks, artists, playlists, and genres. Think of it as the *backend engine of Spotify, simplified.*

---

### 🔩 Core Features (to cover MEN in action):

#### 📁 **Entities / MongoDB Schemas**

* **User** (auth, role, etc.)
* **Track** (title, artist, genre, year, duration)
* **Artist** (name, country, genre)
* **Playlist** (title, createdBy, list of Track references)

#### 🔐 **Auth & Access**

* Register/Login (with JWT)
* Only allow logged-in users to:

  * Add tracks to their own playlist
  * CRUD their own playlists

#### 📈 **Routes**

```http
GET     /api/tracks            → public
POST    /api/tracks            → protected
GET     /api/artists           → public
POST    /api/playlists         → protected
PUT     /api/playlists/:id     → protected
GET     /api/playlists/my      → protected
```

#### 🧠 Stretch Goals (Optional)

* Search by artist or genre: `GET /api/tracks?genre=rap`
* Favorite a track (Boolean flag)
* Add album cover (store image URLs)
* Play count tracker: simulate track plays and show most played

---

### 💡 Teaching Opportunities Inside the Project:

| Concept                 | How It Shows Up in TrackVault                      |
| ----------------------- | -------------------------------------------------- |
| Schemas & Relationships | Track references Artist & Genre                    |
| RESTful API             | Separate endpoints for each resource               |
| JWT Auth                | Playlists and tracks protected by user token       |
| Middleware              | Auth middleware, error handlers                    |
| CRUD Mastery            | Add/edit/delete songs, playlists, artists          |
| Clean Code & Structure  | Full MVC separation with routes/controllers/models |
| Deployments             | Host it on Render or Railway with MongoDB Atlas    |

---

### 🧪 Deliverables (by Week 4)

* 🧠 Clean GitHub repo
* 🌍 Live deployed API
* 📽 5-minute recorded walkthrough (bonus: talk like a dev)
* 📜 README file explaining the API, how to test, and how it works

---

## 🎯 Your Assignment, Njox:

1. **Lock in this project idea.**
2. Build a simple mockup (use Notion, Figma, even hand-drawn) of what the data will look like and what the API will expose.
3. Kick off **Week 1 with purpose** — tell your friend:

   > *"You’re not just learning MEN, you’re building your own Spotify backend."*
