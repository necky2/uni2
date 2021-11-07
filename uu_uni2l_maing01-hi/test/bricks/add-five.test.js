import UU5 from "uu5g04";
import AddFive from "../../src/bricks/add-five";

const { shallow } = UU5.Test.Tools;

describe(`UuUni2l.Bricks.AddFive`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<AddFive />);
    expect(wrapper).toMatchSnapshot();
  });
  it(`number prop`, () => {
    const wrapper = shallow(<AddFive number={3} />);

    const renderedText = wrapper.text();
    expect(renderedText).toBe("3+5=8");

    wrapper.setProps({ number: 300 });

    const newRenderedText = wrapper.text();
    expect(newRenderedText).toBe("300+5=305");
  });
});
