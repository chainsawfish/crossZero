import React from 'react';

type BtnProps = {
    value: string,
    clickHandler: () => any,
}
function Button(props: BtnProps) {
    return (
        <button className="w-10 h-5 bg-emerald-500" value={props.value} onClick={() => props.clickHandler()}/>
    );
}

export default Button;