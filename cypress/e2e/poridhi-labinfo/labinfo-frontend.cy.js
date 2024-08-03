describe('LabInfo Frontend', function () {
    const LOGIN_URL = 'http://localhost:3000';
    const SUCCESSFUL_LOGIN_TEXT = 'Poridhi Lab Information Panel';
    const NEW_LAB_GROUP_TEXT = 'Create new lab group';
    const SUCCESS_MESSAGE = 'New Lab Group Info has been created successfully';

    const labGroupData = {
        tag: 'test Lab Tag',
        name: 'test Lab Name',
        lecturePlan: 'test Lecture Plan',
        price: 10000,
        labPlan: 'test Lab Plan',
        range: 'Beginner'
    };

    function login() {
        cy.visit(LOGIN_URL);
        cy.contains('Welcome to Admin Panel');
        cy.contains('Sign In');

        cy.get('#email').type(Cypress.env('USER_NAME'));
        cy.get('#password').type(Cypress.env('PASSWORD'));
        cy.get('form').submit();
        cy.contains(SUCCESSFUL_LOGIN_TEXT, { timeout: 10000 });
    };

    function fillLabGroupForm() {
        cy.get('#tag').type(labGroupData.tag);
        cy.get('#name').type(labGroupData.name);
        cy.get('#lab_group_lecture_plan').type(labGroupData.lecturePlan);
        cy.get('#price').type(labGroupData.price);
        cy.get('#lab_plan').type(labGroupData.labPlan);

        cy.get('input#contained-file').selectFile('cypress/fixtures/test.riv', { force: true });
        cy.get('input#overview-image-0').selectFile('cypress/fixtures/test.png', { force: true });

        cy.get('#range').click();
        cy.get('li').contains(labGroupData.range).click();
    };

    beforeEach(login);

    it('creates a new lab group', function () {
        cy.contains(NEW_LAB_GROUP_TEXT).click();
        cy.get('button[type=submit]').should('be.disabled');

        fillLabGroupForm();

        cy.get('button[type=submit]').should('not.be.disabled').click();

        cy.contains(SUCCESS_MESSAGE);
        cy.contains('Got It').click();

        cy.visit(LOGIN_URL);
        cy.contains(labGroupData.name);
    });
});