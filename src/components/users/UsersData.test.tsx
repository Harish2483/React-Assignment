import { render, screen } from "@testing-library/react";

import { UsersData } from "./UsersData";

describe("Users", () => {
  test("Render Users correctly", () => {
    render(<UsersData />);
    const expectedText = screen.getByText("Users");
    expect(expectedText).toBeInTheDocument();
  });

  test("Render a list of Users", async () => {
    render(<UsersData />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
});
