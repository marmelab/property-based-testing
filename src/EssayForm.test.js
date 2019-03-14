import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import { EssayForm } from './EssayForm';

describe('EssayForm', async () => {
    it('should render an empty PastEvaluationsView when fetching', () => {
        const { getByTestId, queryByText } = render(<EssayForm />);

        const form = getByTestId('essay-form');

    });
});
