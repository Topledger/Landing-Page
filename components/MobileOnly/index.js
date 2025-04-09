import React from "react";
import cx from "classnames";

import styles from "./index.module.scss";

const MobileOnly = ({ children, visibilityType = "block" }) =>
    React.Children.map(children, (child) =>
        React.cloneElement(child, {
            className: cx(
                child.props.className,
                styles.mobileOnly,
                styles[`visibility-${visibilityType}`]
            ),
        })
    );

export default MobileOnly;
