export default function Icon({ name, styles }) {
    return (
        <i className={`${styles} material-symbols-outlined`}>{name}</i>
    )
}