import { shallowMount } from "@vue/test-utils";
import SmallGraphData from "@/components/SmallGraphData.vue";

describe("SmallGraphData", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SmallGraphData);
  });
  -afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("shows no description initially", () => {
    const description = wrapper.find("#description");
    expect(description.exists()).toBe(false);
  });

  it("selects tab A and displays the correct description", async () => {
    const buttonA = wrapper.find("#button\\ A");
    await buttonA.trigger("click");

    const description = wrapper.find("#description");
    expect(description.exists()).toBe(true);
    expect(wrapper.text()).toContain("This is a description of A");
  });

  it("selects tab B and displays the correct description", async () => {
    const buttonB = wrapper.find("#button\\ B");
    await buttonB.trigger("click");

    const description = wrapper.find("#description");
    expect(description.exists()).toBe(true);
    expect(wrapper.text()).toContain("This is a description of B");
  });

  it("selects tab C and displays the correct description", async () => {
    const buttonB = wrapper.find("#button\\ C");
    await buttonB.trigger("click");

    const description = wrapper.find("#description");
    expect(description.exists()).toBe(true);
    expect(wrapper.text()).toContain("This is a description of C");
  });

  it("selects tab D and displays the correct description", async () => {
    const buttonB = wrapper.find("#button\\ D");
    await buttonB.trigger("click");

    const description = wrapper.find("#description");
    expect(description.exists()).toBe(true);
    expect(wrapper.text()).toContain("This is a description of D");
  });

  it("selects tab B-1 and displays the correct description", async () => {
    const buttonB1 = wrapper.find("#button\\ B-1");
    await buttonB1.trigger("click");

    const description = wrapper.find("#description");
    expect(description.exists()).toBe(true);
    expect(wrapper.text()).toContain("This is a description of B-1");
  });

  it("selects tab B-2 and displays the correct description", async () => {
    const buttonB1 = wrapper.find("#button\\ B-2");
    await buttonB1.trigger("click");

    const description = wrapper.find("#description");
    expect(description.exists()).toBe(true);
    expect(wrapper.text()).toContain("This is a description of B-2");
  });

  it("selects tab B-3 and displays the correct description", async () => {
    const buttonB1 = wrapper.find("#button\\ B-3");
    await buttonB1.trigger("click");

    const description = wrapper.find("#description");
    expect(description.exists()).toBe(true);
    expect(wrapper.text()).toContain("This is a description of B-3");
  });

  it("clears the selection when the clear button is clicked", async () => {
    const buttonA = wrapper.find("#button\\ A");
    await buttonA.trigger("click");

    const clearButton = wrapper.find("#button\\ clear");
    await clearButton.trigger("click");

    const description = wrapper.find("#description");
    expect(description.exists()).toBe(false);
  });
});
