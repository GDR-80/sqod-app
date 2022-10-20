import { render, screen } from "@testing-library/react";
import BackgroundCard from "./BackgroundCard";

test("background_card has class", () => {
  const { container } = render(<BackgroundCard />);

  expect(container.getElementsByClassName("background_card").length).toBe(1);
});
