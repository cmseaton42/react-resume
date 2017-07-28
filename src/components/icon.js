import React from "react";
import "../../style/components/icon.scss";

export default function Icon(props) {
    return (
        <div className="cmpnt-icon">
            <a className="icon-link" href={props.link}>
                <i className={`fa fa-${props.icon}`} />
            </a>
        </div>
    );
}
