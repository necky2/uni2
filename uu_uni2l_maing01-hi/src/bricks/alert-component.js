//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "AlertComponent",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const AlertComponent = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const _onButtonClick = () => {
      UU5.Environment.getPage().getAlertBus().addAlert({
        header: "Napis",
        content: "Obsah alertu",
        colorSchema: "purple-rich",
        closeTimer: 3000,
      });
    };
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);

    return (
      <div {...attrs}>
        <UU5.Bricks.Button onClick={_onButtonClick}>Zobrazit alert</UU5.Bricks.Button>
      </div>
    );
    //@@viewOff:render
  },
});

export default AlertComponent;
