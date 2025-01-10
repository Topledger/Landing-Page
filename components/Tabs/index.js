import { createContext, useContext } from "react";
import cx from "classnames";

import styles from "./tabs.module.scss";

const TabContext = createContext({});
const Tabs = ({ children, onChange, activeKey }) => {
    return (
        <TabContext.Provider value={{ activeKey, onChange }}>
            <div>
                <div className={styles.tabsContainer}>
                    {children.map((child) => (
                        <button
                            onClick={() => onChange(child.props.tab)}
                            className={cx(styles.tabBtn, {
                                [styles.tabBtnSelected]:
                                    activeKey == child.props.tab,
                            })}
                        >
                            {child.props.title}
                        </button>
                    ))}
                </div>
                {children}
            </div>
        </TabContext.Provider>
    );
};

Tabs.TabPane = ({ children, tab }) => {
    const { activeKey, onChange } = useContext(TabContext);
    return activeKey === tab && <div>{children}</div>;
};

export default Tabs;
