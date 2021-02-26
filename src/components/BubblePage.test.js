import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {getColors as mockGetColors} from './../helpers/getColors'


jest.mock('./../helpers/getColors')


const mockColors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  },
  {
    color: "aquamarine",
    code: {
      hex: "#7fffd4",
    },
    id: 4,
  },
  {
    color: "lilac",
    code: {
      hex: "#9a99dd",
    },
    id: 5,
  },
  {
    color: "softpink",
    code: {
      hex: "#dd99ba",
    },
    id: 6,
  },
]
test("Renders BubblePage without errors", () => {
  // Finish this test
  mockGetColors.mockResolvedValueOnce(mockColors)
  render(<BubblePage />)
});



test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  mockGetColors.mockResolvedValueOnce(mockColors)
  render (<BubblePage />);
  expect(screen.findByText(/softpink/i)).toBeInTheDocument();



});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading



