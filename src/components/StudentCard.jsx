import StatusBadge from "./StatusBadge.jsx";

function StudentCard({student}) {
    const {id, name, age, group, isActive} = student;

    const isMinor = age < 18;

    return (
        <article
            className={`student-card ${
                isActive ? "student-card--active" : "student-card--paused"
            }`}
        >
            <div className="student-card-heading">
                <h3>{name}</h3>

                <StatusBadge isActive={isActive}/>
            </div>

            <p className="student-id">ID: {id}</p>
            <p>Возраст: {age}</p>
            <p>Группа: {group}</p>

            {isMinor && (
                <p className="minor-notice">
                    Несовершеннолетний студент
                </p>
            )}
        </article>
    );
}

export default StudentCard;