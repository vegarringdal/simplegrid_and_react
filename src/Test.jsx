import { GridInterface } from "@simple-html/grid";
import { personInterface } from "./person";
import React from "react";

export class Test extends React.Component {
  constructor(props) {
    super(props);
    this.props = this.props;
    console.log(props);

    this.myRef = React.createRef();
  }

  shouldComponentUpdate() {
    console.log("update");
    return true;
  }

  componentDidMount() {
    this.myRef.current.interface = personInterface;
    personInterface.loadSettings(null);
    const data = [];
    for (let i = 0; i < 300; i++) {
      data.push({ name: "person" + i });
    }
    personInterface.getDatasource().setData(data);
  }

  render() {
    return (
      <simple-html-grid
        ref={this.myRef}
        style={{
          width: this.props.width + "px",
          height: this.props.height + "px",
        }}
        class="simple-html-grid"
      ></simple-html-grid>
    );
  }
}
