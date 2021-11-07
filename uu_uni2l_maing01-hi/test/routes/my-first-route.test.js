import UU5 from "uu5g04";
import MyFirstRoute from "../../src/routes/my-first-route";

const { shallow } = UU5.Test.Tools;

describe(`UuUni2l.Routes.MyFirstRoute`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<MyFirstRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
