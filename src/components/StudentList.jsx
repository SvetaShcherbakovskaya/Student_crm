import StudentCard from "./StudentCard.jsx";

function StudentList({students}) {
    return (
        <section>
            <h2>Наши студенты</h2>

            <p className="student-count">
                Всего студентов: {students.length}
            </p>

            {students.length === 0 ? (
                <p className="empty-message">Список студентов пуст.</p>
            ) : (
                <ul className="student-list">
                    {students.map((student) => (
                        <li key={student.id}>
                            <StudentCard student={student}/>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default StudentList;