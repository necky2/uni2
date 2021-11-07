//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useContext } from "uu5g04-hooks";
import Config from "./config/config";
import MyContext from "../core/contexts/my-context";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ContextAddFive",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

const FIVE = 5;

export const ContextAddFive = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const myContext = useContext(MyContext);
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);

    const sum = myContext.number + FIVE;
    return (
      <div {...attrs}>
        {myContext.number.toString()}+{FIVE.toString()}={sum.toString()}
      </div>
    );
  },
});

export default ContextAddFive;
