import Modal from 'react-modal'

Modal.setAppElement("#body"); // binding to body

// Overriding Modal's default styles
// overlay
Modal.defaultStyles.overlay.backgroundColor = "#00000088";
Modal.defaultStyles.overlay.backdropFilter = "blur(10px)";
Modal.defaultStyles.overlay.bottom = "0";
Modal.defaultStyles.overlay.top = "0";
Modal.defaultStyles.overlay.left = "0";
Modal.defaultStyles.overlay.right = "0";
Modal.defaultStyles.overlay.position = "fixed";
// content
Modal.defaultStyles.content.overflow = "auto";
Modal.defaultStyles.content.padding = "0";
Modal.defaultStyles.content.background = "#fff";
Modal.defaultStyles.content.border = "none";
Modal.defaultStyles.content.outline = "none";
Modal.defaultStyles.content.position = "absolute";
Modal.defaultStyles.content.bottom = "unset";
Modal.defaultStyles.content.left = "50%";
Modal.defaultStyles.content.right = "unset";
Modal.defaultStyles.content.top = "50%";
Modal.defaultStyles.content.transform = "translate(-50%, -50%)";
Modal.defaultStyles.content.display = "flex";