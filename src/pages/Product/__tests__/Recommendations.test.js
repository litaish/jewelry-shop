/* eslint-env jest */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Recommendations from '../Recommendations';
import { MemoryRouter } from "react-router-dom";

describe("<Recommendations />", () => {
    it('On initial render, show 3 non-empty recommendation items', () => {
        // Rendering inside a router to prevent Link component errors
        render(<MemoryRouter><Recommendations /></MemoryRouter>);
    
        const allCards = screen.getAllByTestId('recommendations-card');
        expect(allCards.length).toBe(3);     
    });
});