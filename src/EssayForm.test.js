import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
//import 'jest-dom/extend-expect';

import { EssayForm } from './EssayForm';

describe('EssayForm', async () => {
    it('should render an empty PastEvaluationsView when fetching', () => {
        const { getByTestId, queryByText } = render(<EssayForm />);

        const form = getByTestId('essay-form');
        /*
        const textarea = form.querySelector('[name="last_name"]');
        fireEvent.change(textarea, {
            target: { value: 'foo' },
        });
*/
        //fireEvent.click(form.querySelector('[type="submit"]'));

        //await wait(() => {
        //    expect(onSubmit).toHaveBeenCalledTimes(1);
        //});
    });
});
