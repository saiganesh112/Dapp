📘 Student Report Card DApp

A decentralized web application (DApp) built using the Internet Computer Protocol (ICP), designed to manage student performance records. Users can add, update, and delete student information, calculate average scores and grades, and generate clean, downloadable PDF report cards.

🔐 Powered by Internet Computer (DFINITY), secured and hosted on the blockchain.
🧠 About the Project

This project aims to provide a simple yet powerful decentralized system to track student academic performance in real-time. By leveraging Rust and React, the app integrates a robust backend with an interactive frontend. The PDF generation allows for offline portability and professional documentation of performance.

Key Features :
✅ Add or update student data (Name, Marks, Subjects)
❌ Delete individual student records
📊 Automatic grade calculation based on average score
🔠 Alphabetically sorted student list for better readability
📄 Auto-generated PDF report cards, one per student
📷 Includes screenshot and screen recording of the DApp
🎨 Simple, responsive, and accessible UI
🖼 Preview

📷 Screenshot
🎥 Screen Recording
Watch Demo

🧰 Tech Stack

Layer	Tech
Frontend	React.js, JavaScript, jsPDF
Backend	Rust, Candid, ic-cdk, Wasm
Deployment	DFX CLI, Internet Computer Canisters
Tools	Visual Studio Code, Git, npm

🏁 Getting Started

📦 Prerequisites
Make sure you have the following installed:

Node.js & npm
DFX SDK
Rust & Cargo
# Install WebAssembly target
rustup target add wasm32-unknown-unknown

# Optionally install cargo-audit (for security auditing)
cargo install cargo-audit
🚀 Setup & Run
# Clone the repo
git clone https://github.com/your-username/student-report-card-dapp.git
cd student-report-card-dapp

# Install frontend dependencies
npm install

# Start local replica
dfx start --background

# Deploy canisters
dfx deploy
Open the app at: http://localhost:4943

🖨 PDF Report Generation

Each student gets a clean, styled PDF report card including:

📌 Name
✍️ Total Marks
📚 Subjects
📈 Average Marks
🏅 Grade (A–D based on performance)
Use the Download PDF Report Cards button to export all student reports.

🗃 Backend Logic

The backend is implemented in Rust and handles:

add_student: Insert/update student entry
list_students: Retrieve all student data
delete_student: Remove a student
Data is stored in memory (non-persistent hash map)
💡 Future Improvements

🔒 Persistent storage using stable memory
🧠 Smart grading logic with feedback
📬 Emailing PDF reports
👥 Authentication using Internet Identity
🙋‍♂️ Author

Built with ❤️ by Sai Ganesh
Contributions, stars, and feedback are welcome!

📜 License

This project is open-source and available under the MIT License.
