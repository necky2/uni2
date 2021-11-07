//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import AddFive from "../bricks/add-five";
import ResponsiveComponent from "../bricks/responsive-component";
import MyContext from "../core/contexts/my-context";
import ContextAddFive from "../bricks/context-add-five";
import AlertComponent from "../bricks/alert-component";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "MyFirstRoute",
  nestingLevel: "bigBoxCollection",
  //@@viewOff:statics
};

export const MyFirstRoute = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const className = Config.Css.css``;
    const attrs = UU5.Common.VisualComponent.getAttrs(props, className);

    return (
      <div {...attrs}>
        <AddFive />
        <AddFive number={3} />
        <AddFive number={300} />

        <ResponsiveComponent />

        <ContextAddFive />
        <MyContext.Provider value={{ number: 3 }}>
          <ContextAddFive />
        </MyContext.Provider>
        <MyContext.Provider value={{ number: 300 }}>
          <ContextAddFive />
        </MyContext.Provider>

        <AlertComponent />
      </div>
    );
    //@@viewOff:render
  },
});

export default MyFirstRoute;
