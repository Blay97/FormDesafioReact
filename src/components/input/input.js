import React from "react"
import { CustomInput } from './styled'
function Input({register, type, name , required, maxLegth, pattern}) {

    return (
        <CustomInput {...register(name, { required, maxLegth, pattern })}  type={type} name={name} />
    );
}
export default Input;
