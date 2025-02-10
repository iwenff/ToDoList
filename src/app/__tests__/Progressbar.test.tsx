import React from "react"
import { render, screen } from "@testing-library/react"
import ProgressBar from "../components/Progressbar"

describe("ProgressBar component", () => {
  it("renders the correct percentage", () => {
    const completedPercentage = 75
    render(<ProgressBar completedPercentage={completedPercentage} />)
    const percentageText = screen.getByText(/Выполнено: 75%/i)
    expect(percentageText).toBeInTheDocument()

    it("applies correct width to the progress bar", () => {
      render(<ProgressBar completedPercentage={75} />)
      const progressBar = screen.getByTestId("progress-bar")
      expect(progressBar).toHaveStyle("width: 75%")
    })
  })
})
