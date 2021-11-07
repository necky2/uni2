import UU5 from "uu5g04";
import UuUni2l from "uu_uni2l_maing01-hi";

const { shallow } = UU5.Test.Tools;

describe(`UuUni2l.Bricks.ContextAddFive`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuUni2l.Bricks.ContextAddFive />);
    expect(wrapper).toMatchSnapshot();
  });
});
