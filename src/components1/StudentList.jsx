import { useState } from "react";

function StudentList() {
    const [students, setStudents] = useState([
        { id: 1, name: "Anna" },
        { id: 2, name: "David" }
    ]);

    function addStudent() {
        const newStudent = {
            id: crypto.randomUUID(),
            name: "Sarah"
        };

        setStudents((prevStudents) => [...prevStudents, newStudent]);
    }

    function deleteStudent(id) {
        setStudents((prevStudents) =>
            prevStudents.filter((student) => student.id !== id)
        );
    }

    return (
        <div>
            <button onClick={addStudent}>Добавить Sarah</button>

            {students.map((student) => (
                <div key={student.id}>
                    <p>{student.name}</p>
                    <button onClick={() => deleteStudent(student.id)}>
                        Удалить
                    </button>
                </div>
            ))}

            {students.length === 0 && <p>Список студентов пуст.</p>}
        </div>
    );
}

export default StudentList;
