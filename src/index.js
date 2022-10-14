import './style.css';
import {
  addTask, displayTasks, optionsButton, removeButtonClicked,
} from './modules/Crud.js';
import { checkBoxClicked, clearCompletedClicked } from './modules/taskStatusUpdate.js';



const main = () => {
  let taskLists = [];
const taskInput = document.querySelector('.add-task-input');
  if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', JSON.stringify([]));
    taskLists = [];
  } else {
    taskLists = JSON.parse(localStorage.getItem('tasks'));
  }
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && taskInput.value) {
      e.preventDefault();
      addTask(taskInput.value, taskLists);
      taskInput.value = null;
    }
  });
  displayTasks(taskLists);
  optionsButton(taskLists);
  checkBoxClicked(taskLists);
  clearCompletedClicked(taskLists);
  removeButtonClicked(taskLists);
};

main();
