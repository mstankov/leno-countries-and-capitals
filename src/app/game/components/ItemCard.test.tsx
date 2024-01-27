import { render, screen } from "@testing-library/react";
import ItemCard from "./ItemCard";
import userEvent from "@testing-library/user-event";

describe(ItemCard.name, () => {
  it("should render", () => {
    const { container } = render(
      <ItemCard value="Belgium" onClick={jest.fn()} />
    );

    expect(container).toMatchSnapshot();
  });

  it("should call callback on click with country name", async () => {
    userEvent.setup();

    const onClick = jest.fn();
    render(<ItemCard value="Bulgaria" onClick={onClick} />);

    await userEvent.click(await screen.findByTestId("card-Bulgaria"));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith("Bulgaria");
  });

  it("should not call callback on click if component is disabled", async () => {
    userEvent.setup();

    const onClick = jest.fn();
    render(<ItemCard value="Bulgaria" onClick={onClick} disabled />);

    await userEvent.click(await screen.findByTestId("card-Bulgaria"));

    expect(onClick).not.toHaveBeenCalled();
  });
});
