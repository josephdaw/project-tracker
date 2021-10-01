// Variables for DOM elements
const projectFormEl = $('#project-form');
const projectFormNameEl = $('#project-name-input');
const projectFormTypeEl = $('#project-type-input');
const projectFormRateEl = $('#project-rate-input');
const projectFormDueDateEl = $('#project-due-date-input');
const projectFormBtn = $('#project-form-btn')

let projects = [];

// eventlistener for submit on modal form
projectFormEl.on("click", '#project-form-btn', createNewProject);

function createNewProject(){
    // add new project to projects array
    projects.push({
        name: projectFormNameEl.val(),
        type: $('#project-type-input option:selected').text(),
        rate: projectFormRateEl.val(),
        dueDate: projectFormDueDateEl.val()
    });

    // clear the form
    clearProjectForm();

    // close the modal window
    $('#project-form-modal').modal('hide');
};

function clearProjectForm(){
    projectFormNameEl.val('');
    projectFormTypeEl.prop('selectedIndex', 0);
    projectFormRateEl.val('');
    projectFormDueDateEl.val('');
};