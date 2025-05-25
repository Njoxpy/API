# 📅 **Day 1: Practice Checklist — “MEN Setup + Hello API”**

### ✅ **1. Terminal Warmup (Daily Driver Skills)**

> Goal: Get your friend comfy with using the terminal like a real dev.

**Practice:**

* Open terminal
* `mkdir trackvault-api && cd trackvault-api`
* Run `npm init -y`
* Install Express: `npm install express`
* Open in VS Code: `code .`

---

### ✅ **2. Write a Simple Server from Scratch**

> Goal: Burn it into their head that Express is just a smart wrapper around Node’s HTTP.

**Task:**

* Create a file `server.js`
* Write a working server that responds to:

  ```js
  GET /hello → “Yo, welcome to TrackVault”
  ```

**Stretch:**

* Add a second route: `GET /tracks` → return an array of 3 hardcoded tracks

---

### ✅ **3. Postman Reps**

> Goal: Understand how to *talk to a backend*. Let them *feel it*.

**Practice:**

* Open Postman
* Test `GET http://localhost:5000/hello`
* Test `GET /tracks`
* See what happens when they type a wrong URL (`/trackss`) → talk about 404

---

### ✅ **4. Debugging Muscle**

> Goal: Get comfy with reading console logs + errors.

**Practice:**

* Add `console.log(“Server is running”)` when it starts
* Misspell `res.send` → fix it together
* Forget a `res.send()` → explain how the server hangs

---

### ✅ **5. Talk It Out**

> Goal: Make them explain what they did. Teaching = remembering.

**Challenge:**
Ask your friend to explain:

* What does Express do?
* What happens when you open Postman and send `GET /tracks`?
* What’s the structure of a request again?

---

### 🎯 End-of-Day 1 Mini Assignment

Have your friend recreate this server *on their own*:

* New folder: `practice-api`
* Create `server.js`
* `GET /hi` → “It’s working”
* `GET /songs` → Return 3 JSON tracks

