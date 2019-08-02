import React from 'react'

export const Button = (props: any) => {
    return <button style={{backgroundColor: props.color}} onClick={props.func}>{props.label}</button>
}