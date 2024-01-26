import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Capital from "./Capital";

describe(Capital.name, () => {
  it("should render", () => {
    const { container } = render(
      <Capital capital="Amsterdam" onClick={() => {}} />
    );

    expect(container).toMatchSnapshot();
  });

  it("should call callback on click with capital name", async () => {
    userEvent.setup();

    const onClick = jest.fn();
    render(<Capital capital="Amsterdam" onClick={onClick} />);

    await userEvent.click(await screen.findByTestId("capital-Amsterdam"));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith("Amsterdam");
  });
});
