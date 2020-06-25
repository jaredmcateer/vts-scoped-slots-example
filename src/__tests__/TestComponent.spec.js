import { mount } from "@vue/test-utils";
import TestComponent from "../TestComponent";

test("mount with default slot", () => {
  const wrapper = mount(TestComponent, {
    scopedSlots: {
      foo: "<div>Hello</div><div>World</div>"
    }
  });
  expect(wrapper.html()).toBe("<div><div>Hello</div><div>World</div></div>");
});
