//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useScreenSize } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ResponsiveComponent",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const ResponsiveComponent = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const screenSize = useScreenSize();

    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const width = screenSize === "xs" || screenSize === "s" ? "100%" : "400px";

    const className = Config.Css.css`
      padding: 16px;
      width: ${width};
    `;

    return <UU5.Bricks.Card className={className}>obsah karty</UU5.Bricks.Card>;
    //@@viewOff:render
  },
});

export default ResponsiveComponent;
