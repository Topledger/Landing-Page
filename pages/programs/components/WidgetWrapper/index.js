import React from "react";
import cx from "classnames";

import BarGraphWidget from "../BarGraphWidget";
import StatsWidget from "../StatsWidget";

import styles from "./index.module.scss";

const widgetMap = {
  STATS: StatsWidget,
  BAR_GRAPH: BarGraphWidget,
};

function WidgetWrapper({ widget }) {
  const Widget = widgetMap[widget.type];
  const grid = widget.grid;
  return (
    <div
      className={cx(styles.widgerWrapper, `grid-${grid.width}-${grid.height}`)}
    >
      {Widget && <Widget widget={widget} />}
    </div>
  );
}

export default WidgetWrapper;
