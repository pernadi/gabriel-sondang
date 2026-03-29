import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

  // 🔑 Config Firebase kamu
  const firebaseConfig = {
    apiKey: "AIzaSyATbqVsGH1S11IAkmdGGlcd4JXTkHfOsgE",
    authDomain: "familyproject-3b076.firebaseapp.com",
    projectId: "familyproject-3b076",
    storageBucket: "familyproject-3b076.appspot.com",
    messagingSenderId: "1053768658608",
    appId: "1:1053768658608:web:56cd82bafa556e9c059575"
  };

  // Init Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // 🔹 Simpan data ke Firestore
  document.getElementById("saveBtn").addEventListener("click", async () => {
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const attendance = document.getElementById("attendance").value;

    if (!name || !message) {
      alert("Nama dan Harapan & Doa tidak boleh kosong!");
      return;
    }

    try {
      await addDoc(collection(db, "wedding_wishes"), {
        name: name,
        message: message,
        attendance: attendance,
        timestamp: new Date()
      });
      alert("Doa & Harapan berhasil dikirim!");
      
      // reset form
      document.getElementById("name").value = "";
      document.getElementById("message").value = "";
    } catch (error) {
      console.error("Error menambahkan dokumen: ", error);
      alert("Gagal mengirim, coba lagi!");
    }
  });


  // 🔹 Tampilkan data wishes real-time
  const wishesList = document.getElementById("wishesList");
  const q = query(collection(db, "wishes_2"), orderBy("timestamp", "desc"));

  onSnapshot(q, (snapshot) => {
    wishesList.innerHTML = ""; // reset
    snapshot.forEach((doc) => {
      const data = doc.data();

      // format tanggal
      const date = data.timestamp?.toDate 
        ? data.timestamp.toDate().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
        : "";

      const li = document.createElement("li");
            li.classList.add("wishes-item");

            const initials = data.name
            .split(" ")
            .map(n => n[0])
            .join("")
            .substring(0,2)
            .toUpperCase();

            li.innerHTML = `
            <div class="wishes-card">
                
                <div class="wishes-avatar">
                ${initials}
                </div>

                <div class="wishes-content">
                <div class="wishes-header">
                    <h4 class="congrats-name">
                    ${data.name}
                    </h4>
                    <span class="wishes-time">${data.attendance}</span>
                </div>

                <p class="congrats-desc">
                    ${data.message}
                </p>
                <hr class="hr-full"/>
                </div>

            </div>
            `;

            document.querySelector(".wishes-list").appendChild(li);
    });
  });