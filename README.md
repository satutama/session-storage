# SessionStorage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Overview

The challenge:

The app should contain a form with two fields:

A date input field:

- This field should allow the user to input a date value in day-month-year format.
- The default value should be the current date, and values with past dates should be invalid.
- The submitted field value should follow ISO 8601 formatting.

A currency field:

- This field should allow the user to input a number value (in Euro) that will be formatted and rounded to two decimal places. Ensure that values, errors, labels and instructions are presented in a user-friendly way.

When the form is submitted, the values should be processed by a service that stores values between sessions.
Below the form, the app should display the submitted values, sorted by the date field value (earlier dates on top).
There should also be a button to clear the list.

- Ensure that inputs are validated and that the user is unable to submit invalid or empty values.
- Design is not the focus of the assignment, but the app should look presentable and provide a solid user experience.
- Ensure that the app is displayed properly on common screens sizes and devices.

## My Process:

1. Set up Angular Project using the Angular CLI `ng new session-storage `
2. Create components:
   - Component for the form and for the data-list
   - Decided to create a container component so that connection with the DataService is handled here only. And the Form and the DataList component can be a presentational component. Meaning simply take data as input and display it on the screen.
   - Eventually decided to place the clear data button as part of DataList component
3. Implement the form:
   - Using Angular Material for the input fields for quicker development and consistent design approach.
   - Use reactive form for better data management and validation.
   - I tried with ngx-currency for masking the currency field, but decided to just rely on currencyPipe and input type number. With ngx-currency the user have a proper currency display directly in the input field, but I don't think it's worth an extra library.
   - For the date field, added required validation and minimum date restriction to prevent past dates. For formatting the date, MY_DATE_FORMAT is created. Using `provideMomentDateAdapter` because the native date is unable to set the parse format. (based on Angular Material documentaition).
   - Form component emit a Data event when the submit button is clicked.
4. Create the service:
   - DataService handles the data from session storage with storeValue and clearValues method.
   - Logic to sort the data by date also implemented here and used in the storedData$ stream.
   - Also added unit tests.
5. Display submitted data:
   - Reactive updates: By using the async pipe in the container template, we can pass the data into the DataList component without subscription as it automatically handles subscribing and unsubscribing. So NgOninit is unnecessary.
   - With the new conditional rendering, display a grid table if there are data and display a message when there are no data.
   - No logic is added here, just Input and Output.
6. Added linter (ESlint recommended rules) + Refactors

## What I learned

- Session storage survives over tab restores (CTRL + Shift + T).
- Using the formGroupDirective to reset the form instead of calling this.form.reset. Function become more pure and the validation also being reset.
- I've tried Tailwind in my other projects and I can definitely say that I was longing to use the tailwind in this project.
- Using BreakpointObserver for different screen view (in form component). Another reason why I think Tailwind is a better way for responsive design.
- Using signal instead of behaviorSubject (available in signal branch). It is clearly cleaner approach.

## Development server

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
