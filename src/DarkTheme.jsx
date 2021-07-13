import React from "react";

export class DarkTheme extends React.Component {
  constructor(props) {
    super(props);
    this.enabled = props.enabled;
    this.myRef = React.createRef();
  }

  shouldComponentUpdate(props) {
    console.log("componentDidUpdate", props.enabled);
    this.enabled = props.enabled ? true : false;
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.enabled);
    if (this.enabled) {
      let children = this.myRef.current.childNodes;
      while (children.length) {
        children[0]?.parentNode.removeChild(children[0]);
        children = this.myRef.current.childNodes
      }
    } else {
      this.myRef.current.append(
        document.createTextNode(`
        body,
            .simple-html-grid-menu,
            .simple-html-grid {
                --simple-html-grid-main-bg-color: #374151;
                --simple-html-grid-sec-bg-color: #4b5563;
                --simple-html-grid-alt-bg-color: #4b5563;
                --simple-html-grid-main-bg-border: #1f2937;
                --simple-html-grid-sec-bg-border: #1f2937;
                --simple-html-grid-main-bg-selected: #234882;
                --simple-html-grid-main-font-color: #f9f7f7;
                --simple-html-grid-sec-font-color: #979494;
                --simple-html-grid-dropzone-color: #979494;
                --simple-html-grid-grouping-border: #1f2937;
                --simple-html-grid-boxshadow: #4b5563;
                --simple-html-grid-main-hr-border: #4b5563;
            }
           /*  .simple-html-grid-menu {
                box-shadow: 1px 1px 3px 0 #bcbec1;
            } */
            .simple-html-grid ul.dialog-row {
                box-shadow: none;
                border-top: 1px solid #3b3b3c;
            }
            .simple-html-grid li.dialog-row {
                border-color: #374151;
                border-left: 1px dotted rgb(100, 100, 100);
            }
            .simple-html-grid .grid-edit-button {
                border-color: #374151;
            }
        
        `)
      );
    }
  }

  componentDidMount() {}

  render() {
    return <style ref={this.myRef}></style>;
  }
}
