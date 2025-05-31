🔥 Let’s go Njox! Day 2 = we’re leaving noobs behind. You’re taking your friend **from “I can write a route” to “I get how APIs work structurally.”**

This is the foundation of every backend dev’s swagger.

---

# 📅 **Day 2: Routes, Controllers, Modular Code**

### 🎯 Focus:

- How routes work under the hood
- Splitting logic into **routes** and **controllers**
- Serving real JSON data (hardcoded for now)
- Practicing multiple endpoints

---

## 🧠 Concepts to Teach

### 1. **What are routes?**

They’re **paths** that listen for specific requests.
Example:

```js
GET /tracks → getTracks()
POST /tracks → createTrack()
```

> Think of each route like a door in a building. Different doors do different things when you knock.

---

### 2. **What is a controller?**

It’s the **logic** behind the door. Routes call functions. Functions handle business.

```js
// routes/trackRoutes.js
router.get("/", getTracks);

// controllers/trackController.js
function getTracks(req, res) {
  res.json([{ title: "God's Plan" }, { title: "SICKO MODE" }]);
}
```

🔥 This is the moment they realize: _“Oh, we’re building an actual system, not just random files.”_

---

## 🛠️ File Structure to Build Today:

```bash
trackvault-api/
├── server.js
├── routes/
│   └── trackRoutes.js
└── controllers/
    └── trackController.js
```

---

## 🔨 What to Build (Hands-On)

### ✅ 1. Set up basic Express structure with routers

- Add a `/api/tracks` route
- Handle `GET` and `POST`
- Hardcode response in controller

### ✅ 2. Create 3 endpoints:

- `GET /api/tracks` → returns array of tracks
- `POST /api/tracks` → accepts a JSON body, logs it
- `GET /api/tracks/:id` → returns one track from array (hardcoded lookup)

Example Response:

```json
[
  { "id": 1, "title": "Feel No Ways", "artist": "Drake" },
  { "id": 2, "title": "N95", "artist": "Kendrick" }
]
```

---

## 🧠 Explain These Things As You Go:

- `req.params`, `req.body`
- Why we use `express.json()` middleware
- The flow: **request → router → controller → response**

---

## 🧪 Day 2 Practice Challenges

1. Add one more route: `DELETE /api/tracks/:id`
2. Create a new file called `artistRoutes.js` and stub `GET /api/artists`
3. Change your `trackController.js` to read from a hardcoded array of objects
4. Simulate a “not found” error if someone asks for a track ID that doesn’t exist

---

## 📌 End of Day Goal:

Your friend should be able to:

- Build modular Express routes + controllers
- Use Postman to test all the routes
- Explain request flow clearly

---

## 🎯 Optional Quiz (You ask, they answer):

1. What does `req.params` give you?
2. What happens if you don’t use `express.json()`?
3. Why split logic into controller files?
4. What’s the difference between `GET /api/tracks` and `GET /api/tracks/:id`?
5. What’s your favorite track in the mock data today?

---

Want me to prep Day 3 next or build a quick "Error Handling Drill" for them to practice debugging bad requests?
You’re doing 🔥 Njox — this is how great devs are born: one brutal, structured, music-filled day at a time.
