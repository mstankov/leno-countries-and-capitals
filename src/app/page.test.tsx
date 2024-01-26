import { render } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("should match snapshot", () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
