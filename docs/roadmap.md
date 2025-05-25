## 📅 **Week 1: Foundations + First API**

**Goal**: Understand the MEN stack and build a basic CRUD API.

| Day     | Focus                                | Deliverables                                                         |
| ------- | ------------------------------------ | -------------------------------------------------------------------- |
| **Mon** | What is MEN? Why it matters? + Setup | Install Node.js, npm, VS Code, Postman; `npm init` + install Express |
| **Tue** | Hello API! Create Express Server     | Basic `GET /hello`, `GET /tracks` from hardcoded array               |
| **Wed** | POST + Body Parsing                  | `POST /tracks` — add track to array; test with Postman               |
| **Thu** | Intro to MongoDB Atlas               | Create MongoDB cluster, connect with Mongoose                        |
| **Fri** | Replace array with DB                | Mongoose schema for Track, `GET` and `POST` using MongoDB            |

---

## 📅 **Week 2: Real CRUD + MVC**

**Goal**: Scale code, structure it right, and go full CRUD.

| Day     | Focus                             | Deliverables                                              |
| ------- | --------------------------------- | --------------------------------------------------------- |
| **Mon** | Folder structure & MVC explained  | Separate models, routes, controllers; organize Track CRUD |
| **Tue** | Update & Delete logic             | `PUT /tracks/:id` + `DELETE /tracks/:id`                  |
| **Wed** | Error handling middleware         | 404s, try/catch, custom error messages                    |
| **Thu** | Intro to Post and Artist models   | Create `Artist` schema, link with Track                   |
| **Fri** | Data relationship: ref & populate | Add artist ID to Track, use `.populate()`                 |

---

## 📅 **Week 3: Auth & Protected Routes**

**Goal**: Secure the app and personalize it with users.

| Day     | Focus                        | Deliverables                                                     |
| ------- | ---------------------------- | ---------------------------------------------------------------- |
| **Mon** | Auth theory + JWT            | `POST /register`, `POST /login`, return JWT                      |
| **Tue** | Auth middleware              | Protect `POST /tracks` and `POST /playlists` routes              |
| **Wed** | User model + Track ownership | Add `userId` to track, filter by user                            |
| **Thu** | Playlist model               | `POST /playlists`, `GET /playlists/my`, link tracks to playlists |
| **Fri** | CRUD for playlists           | Update + Delete playlists (only owner)                           |

---

## 📅 **Week 4: Real-World Thinking + Deployment**

**Goal**: Make the project *real*. Deploy it. Demo it. Polish it.

| Day     | Focus                              | Deliverables                                            |
| ------- | ---------------------------------- | ------------------------------------------------------- |
| **Mon** | Clean code + testing all endpoints | Use Postman collection to test everything               |
| **Tue** | Deploy on Render or Railway        | Full backend live + DB connected                        |
| **Wed** | README + API docs                  | Write clear instructions for using your API             |
| **Thu** | Final review & debugging           | Walk through TrackVault like a user would               |
| **Fri** | Present & record demo              | Explain architecture, how JWT works, MongoDB logic etc. |

---

## 🧠 Weekend Work (Optional but 🔥 for mastery)

* **Week 1**: Review MEN theory, draw data flow maps
* **Week 2**: Build another CRUD (e.g., Genres)
* **Week 3**: Secure a bonus route (`GET /admin/users`)
* **Week 4**: Learn how to add rate limiting or upload album art (Multer)

---

## 🎯 Your Challenge Right Now:

1. **Copy this into Notion or Google Docs.**
2. Add boxes to track completion.
3. Hold your friend accountable DAILY — if they skip, they explain why in writing.