# SessionStorage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

Challenge:

The app should contain a form with two fields:

    A date input field:

This field should allow the user to input a date value in day-month-year format. The default value should be the current date, and values with past dates should be invalid. The submitted field value should follow ISO 8601 formatting.

    A currency field:

This field should allow the user to input a number value (in Euro) that will be formatted and rounded to two decimal places. Ensure that values, errors, labels and instructions are presented in a user-friendly way.

When the form is submitted, the values should be processed by a service that stores values between sessions.
Below the form, the app should display the submitted values, sorted by the date field value (earlier dates on top).
There should also be a button to clear the list.

- Ensure that inputs are validated and that the user is unable to submit invalid or empty values.
- Design is not the focus of the assignment, but the app should look presentable and provide a solid user experience.
- Ensure that the app is displayed properly on common screens sizes and devices.

Solution:

Container component handle data communication from the DataService.

Form and DataList components are presentational components. Simply take data as input and know how to display it on the screen. The Form component also emit an event.

Data Service can retrieve, store and clear the stored data in the session storage.

in the Container component, I assign the storedData$ in the property because of:

- Direct injection: directly injecting the storedData$ observable from the DataService, so no additional setup or logic is needed before using it.
- Reactive updates: The async pipe in the template automatically handles subscribing and unsubscribing to the observable, so the Data List component always displays the latest data without manual subscription management. So ngOnInit is unnecessary.
- Readability: I makes it clear where the data is coming from and simplifies the component's code structure

The Form component is using reactive forms for easier validation and data handling.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Things I learn

- Session storage will survives over tab restore (CTRL + Shift + T).
