describe('Display homepage', () => {
  it('homepage successfully displayed', () => {
    cy.visit('http://localhost:5000');
  });
});

describe('Add not important task', () => {
  it('not important task successfully added', () => {
    cy.get('#new-card-text').type('test1 - not important');
    cy.get('.btn').click();
  });
});

describe('Add important task', () => {
  it('important task successfully added', () => {
    cy.get('#important').check();
    cy.get('#new-card-text').type('test2 - important');
    cy.get('.btn').click();
  });
});

describe('Add urgent task', () => {
  it('urgent task successfully added', () => {
    cy.get('#urgent').check();
    cy.get('#new-card-text').type('test3 - urgent');
    cy.get('.btn').click();
  });
});

describe('Move test2 to In progress column', () => {
  it('test2 successfully moved to In progress column', () => {
    const dataTransfer = new DataTransfer();
    cy.get('.card').eq(1).trigger('dragstart', { force: true, dataTransfer });
    cy.get('.col-body').eq(2).trigger('drop', { force: true, dataTransfer });
  });
});

describe('Move test3 to Done column', () => {
  it('test3 successfully moved to Done column', () => {
    const dataTransfer = new DataTransfer();
    cy.get('.card').eq(1).trigger('dragstart', { force: true, dataTransfer });
    cy.get('.col-body').eq(3).trigger('drop', { force: true, dataTransfer });
  });
});

describe('Modify task1', () => {
  it('task1 successfully modified', () => {
    cy.get('.card-text').eq(0).type(' modified');
  });
});

describe('Change not important category color', () => {
  it('not important category color successfully changed', () => {
    cy.get('#c-not-important').invoke('val', '#A27AC2').trigger('change');
  });
});

describe('Change important category color', () => {
  it('important category color successfully changed', () => {
    cy.get('#c-important').invoke('val', '#C5D6DD').trigger('change');
  });
});

describe('Change urgent category color', () => {
  it('urgent category color successfully changed', () => {
    cy.get('#c-urgent').invoke('val', '#E4CF62').trigger('change');
  });
});

describe('Restore not important category color', () => {
  it('not important category color successfully restored', () => {
    cy.get('#c-not-important').invoke('val', '#95CE6F').trigger('change');
  });
});

describe('Restore important category color', () => {
  it('important category color successfully restored', () => {
    cy.get('#c-important').invoke('val', '#73B3CE').trigger('change');
  });
});

describe('Restore urgent category color', () => {
  it('urgent category color successfully restored', () => {
    cy.get('#c-urgent').invoke('val', '#DD5F5F').trigger('change');
  });
});

describe('Delete tasks', () => {
  it('tasks successfully deleted', () => {
    cy.get('.remove-task').each(task => {
      cy.get(task).click();
    });
  });
});
