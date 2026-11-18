function StatusBadge({isActive}) {
    return (
        <span
            className={`status-badge ${
                isActive ? "status-badge--active" 
                    : "status-badge--paused"
            }`}
        >
      {isActive ? "Активен" : "Пауза"}
    </span>
    );
}

export default StatusBadge;