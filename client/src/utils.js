export const getColor = (checked, isHover, isPressed) => {
    if (checked) return "#e3e3e3";
    if (isPressed) return "#878787";
    if (isHover) return "#e3e3e3";
    return "#FFFFFF";
}

export const getBgColor = (checked, isHover, isPressed) => {
    if (checked) {
        if (isPressed || isHover) return "#2469F6";
        return "#5087F8";
    }
}
