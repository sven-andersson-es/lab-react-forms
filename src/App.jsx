import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
	const [students, setStudents] = useState(studentsData);
	const [fullName, setFullName] = useState("");
	const [image, setImage] = useState("https://randomuser.me/api/portraits/lego/7.jpg");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [program, setProgram] = useState("");
	const [graduationYear, setGraduationYear] = useState(2023);
	const [graduated, setGraduated] = useState(false);

	const handleFullName = (e) => setFullName(e.target.value);
	const handleImage = (e) => setImage(e.target.value);
	const handlePhone = (e) => setPhone(e.target.value);
	const handleEmail = (e) => setEmail(e.target.value);
	const handleProgram = (e) => setProgram(e.target.value);
	const handleGraduationYear = (e) => setGraduationYear(e.target.value);
	const handleGraduated = (e) => setGraduated(!graduated);

	const addStudent = (newStudent) => {
		const updatedStudents = [...students, newStudent];
		setStudents(updatedStudents);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newStudent = {
			students,
			fullName,
			image,
			phone,
			email,
			program,
			graduationYear,
			graduated,
		};
		addStudent(newStudent);

		setFullName("");
		setImage("https://randomuser.me/api/portraits/lego/7.jpg");
		setPhone("");
		setEmail("");
		setProgram("");
		setGraduationYear(2023);
		setGraduated(false);
	};

	return (
		<div className="App pt-20">
			<Navbar />

			{/* FORM */}
			<form onSubmit={handleSubmit}>
				<span>Add a Student</span>
				<div>
					<label>
						Full Name
						<input
							value={fullName}
							onChange={handleFullName}
							name="fullName"
							type="text"
							placeholder="Full Name"
						/>
					</label>

					<label>
						Profile Image
						<input
							value={image}
							onChange={handleImage}
							name="image"
							type="url"
							placeholder="Profile Image"
						/>
					</label>

					<label>
						Phone
						<input
							value={phone}
							onChange={handlePhone}
							name="phone"
							type="tel"
							placeholder="Phone"
						/>
					</label>

					<label>
						Email
						<input
							value={email}
							onChange={handleEmail}
							name="email"
							type="email"
							placeholder="Email"
						/>
					</label>
				</div>

				<div>
					<label>
						Program
						<select value={program} onChange={handleProgram} name="program">
							<option value="">-- None --</option>
							<option value="Web Dev">Web Dev</option>
							<option value="UXUI">UXUI</option>
							<option value="Data">Data</option>
						</select>
					</label>

					<label>
						Graduation Year
						<input
							value={graduationYear}
							onChange={handleGraduationYear}
							name="graduationYear"
							type="number"
							placeholder="Graduation Year"
							minLength={4}
							maxLength={4}
							min={2023}
							max={2030}
						/>
					</label>

					<label>
						Graduated
						<input
							checked={graduated}
							onChange={handleGraduated}
							name="graduated"
							type="checkbox"
						/>
					</label>

					<button type="submit">Add Student</button>
				</div>
			</form>
			{/* FORM END */}

			{/* TABLE/LIST HEADER */}
			<TableHeader />

			{/* STUDENT LIST */}
			{students &&
				students.map((student) => {
					return <StudentCard key={student.email} {...student} />;
				})}
		</div>
	);
}

export default App;
