import React, { Component } from 'react'
import '../../style/components/detail-w-icon.scss'

export default function DetailWIcon(props) {
    const icon = `fa fa-${props.icon}`;

    return (
        <div className="cmpnt-detail-w-icon p-2">
            <i className={icon}></i>
            <p>{props.caption}</p>
        </div>
    )

}