//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "AddFive",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

const FIVE = 5;

export const AddFive = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    number: UU5.PropTypes.number,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    number: 0,
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);

    const sum = props.number + FIVE;
    return (
      <div {...attrs}>
        {props.number.toString()}+{FIVE.toString()}={sum.toString()}
      </div>
    );
    //@@viewOff:render
  },
});

export default AddFive;
