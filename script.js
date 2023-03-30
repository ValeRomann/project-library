let myLibrary = [];

const OUTPUT_TABLE = document.querySelector('#table-output tbody');
const INPUT_FORM = document.getElementById('input-form');

const INPUT_BUTTON = document.getElementById('input-button');
INPUT_BUTTON.onclick = function (e) {
  e.preventDefault();
  switchForm();
};

const SUBMIT_BUTTON = document.getElementById('submit-button');
SUBMIT_BUTTON.onclick = function (e) {
  e.preventDefault();
  addBookToLibrary();
  switchForm();
};

function Book(author, title, pagesNum) {
  this.author = author;
  this.title = title;
  this.pagesNum = pagesNum;
}

function addBookToLibrary() {
  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let pagesNum = document.getElementById('pagesNum').value;
  let newBook = new Book(author, title, pagesNum);
  myLibrary.push(newBook);
  showBooksTable(myLibrary);
}

function showBooksTable(myLibrary) {
  OUTPUT_TABLE.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    const ROW = document.createElement('tr');
    for (let item in myLibrary[i]) {
      const CELL = document.createElement('td');
      CELL.textContent = myLibrary[i][item];
      ROW.appendChild(CELL);
    }

    const DELETE_BUTTON = document.createElement('button');
    DELETE_BUTTON.setAttribute('id', 'delete-button');
    DELETE_BUTTON.innerText = 'Delete Book';
    DELETE_BUTTON.onclick = (e) => {
      myLibrary.splice(i, 1);
      showBooksTable(myLibrary);
    }
    ROW.appendChild(DELETE_BUTTON);

    const READ_BUTTON = document.createElement('button');
    READ_BUTTON.setAttribute('id', 'read-button');
    READ_BUTTON.innerText = 'Read';
    READ_BUTTON.onclick = (e) => {
      
      showBooksTable(myLibrary);
    }
    ROW.appendChild(READ_BUTTON);
    OUTPUT_TABLE.appendChild(ROW);
  }
}

function switchForm() {
  if (INPUT_FORM.className === 'input-form hidden'){
    INPUT_FORM.className = 'input-form';
    INPUT_BUTTON.innerText = 'BACK';
  } else {
    INPUT_FORM.className = 'input-form hidden';
    INPUT_BUTTON.innerText = 'NEW BOOK';
  }
}