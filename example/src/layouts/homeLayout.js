import React, {Fragment, PureComponent} from "react";
import styles from './homeLayout.less'
export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <Fragment>
        <div className={styles.header}>
          头部
        </div>
        <div>{this.props.children}</div>
      </Fragment>
      
    )
  }
  
}
