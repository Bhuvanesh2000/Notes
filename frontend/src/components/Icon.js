export default function Icon({ name, styles }) {
    return (
        <i className={`material-symbols-outlined ${styles ?? ""}`}>{name}</i>
    )
}