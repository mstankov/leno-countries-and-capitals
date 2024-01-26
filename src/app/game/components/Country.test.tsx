import { render, screen } from "@testing-library/react";
import Country from "./Country";
import userEvent from "@testing-library/user-event";

describe(Country.name, () => {
  it("should render", () => {
    const { container } = render(
      <Country country="Belgium" onClick={() => {}} />
    );

    expect(container).toMatchSnapshot();
  });

  it("should call callback on click with country name", async () => {
    userEvent.setup();

    const onClick = jest.fn();
    render(<Country country="Bulgaria" onClick={onClick} />);

    await userEvent.click(await screen.findByTestId("country-Bulgaria"));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith("Bulgaria");
  });
});
