import React from "react"
import { CustomButton } from './styled'
function Button({ children, type, onClick, disabled }) {

    return (
        <CustomButton disabled={disabled} type={type} onClick={onClick}>{children}</CustomButton>
    );
}
export default Button;
