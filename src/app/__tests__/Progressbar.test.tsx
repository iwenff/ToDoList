import React from "react";
import { render, screen } from "@testing-library/react";
import ProgressBar from "../components/Progressbar";

describe("ProgressBar component", () => {
  it("renders the correct percentage", () => {
    const completedPercentage = 75;
    render(<ProgressBar completedPercentage={completedPercentage} />);
    const percentageText = screen.getByText(/Выполнено: 75%/i);
    expect(percentageText).toBeInTheDocument();
  });
});