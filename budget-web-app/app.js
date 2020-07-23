/***************************************
 ** separation of consern modules architecture
 */

//Inmirially invoque function OT IFI
/********************************************
 ** BUDGET MODULE CONTROLLER*/
const budgetController = (function () {
  //functions constructor object to stores inputs values
  let Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  //calculates inputs
  let calculateTotal = function (type) {
    let sum = 0;
    data.allItems[type].forEach(function (currentElement) {
      //   sum = sum + currentElement.value;
      sum += currentElement.value;
    });
    data.totals[type] = sum;
  };

  /*************************************
  ** INPUTS BLOBAL APP DATA STRUCTURE *********
  local database*******/
  const data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
    budget: 0,
    percentage: -1,
  };

  return {
    addItem: function (type, des, val) {
      let newItem, ID;

      // Creates new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      //Creates new Item based on 'inc' or 'exp' type
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      // puesh it into our data structure
      data.allItems[type].push(newItem);

      //return new elements
      return newItem;
    },

    //**CALCULATE'S BUDGET FUNCTION */
    //**Calculates the SUM of all INCOME'S AND the SUM of total EXPENSES */
    //**Calculates the budget: The INCOMES - EXPENSES*/
    //**Calculates the persentage: EXPENSES / INCOMES * 100   */
    calculateBudge: function () {
      // calculate total income and expenses
      calculateTotal("exp");
      calculateTotal("inc");
      // calculate the budgets: income - expeses
      data.budget = data.totals.inc - data.totals.exp;
      if (data.totals.inc > 0) {
        // calculate the percentage of income that we spend
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1; // -1: trasnlate to non existens
      }
    },

    //function method to return total budgets and its values
    getBudget: function () {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage,
      };
    },

    // testing: function () {
    //   console.log(data);
    // },
  };
})();

/********************************************
 ** UI MODULE CONTROLLER   // Also, cumplirlly independent module*/
//Isolated function (inmiriarlly invoque function espression) from outside of uiController
const UIController = (function () {
  //*privite variable to store App's DOM strings****/
  let DOMstring = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputAddBtn: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list",
    budgetLabel: ".budget__value",
    budgetIncomeLabel: ".budget__income--value",
    expensesLabel: ".budget__expenses--value",
    // persentageLabel: "budget__expenses--percentage",
  };

  //public function: in object
  return {
    getInput: function () {
      //Return object: to return all values at trhe same time
      return {
        type: document.querySelector(DOMstring.inputType).value, // either inc or exp
        description: document.querySelector(DOMstring.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstring.inputValue).value),
      };

      // let type = document.querySelector('.add__type').value; // either inc or exp
      // let description  = document.querySelector('add__description').value;
      // let value = document.querySelector('add__value').value;
    },

    //**Add new Items to the HTML table list*/
    addListItem: function (obj, type) {
      let html, newHtml, element;
      // Creste a html string
      if (type === "inc") {
        element = DOMstring.incomeContainer;
        html =
          '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">$%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === "exp") {
        element = DOMstring.expensesContainer;
        html =
          '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">$%value%</div><div  class="item__percentage">%percentage%%"</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      // replace th eplaceholder rext with the user input data
      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", obj.value);
      newHtml = newHtml.replace("%percentage%", obj.percentage);

      // Insert the HTML into the DOM

      document
        .querySelector(element)
        .insertAdjacentHTML("beforebegin", newHtml);
    },

    //**FUNCTION Object addAvailableBudget */
    //**Adds Available BUDGE to the user IU*/
    addAvailableBudget: function (obj, type) {
      let html, newHtml;
    },

    crearFiels: function () {
      let fields, fieldsArr;
      fields = document.querySelectorAll(
        DOMstring.inputDescription + ", " + DOMstring.inputValue
      );

      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function (current, indexNum, array) {
        current.value = "";
      });

      fieldsArr[0].focus();
    },

    getDOMstrings: function () {
      return DOMstring;
    },

    displayBudget: function (obj) {
      document.querySelector(DOMstring.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMstring.budgetIncomeLabel).textContent =
        obj.totalInc;
      document.querySelector(DOMstring.expensesLabel).textContent =
        obj.totalExp;

      if (obj.percentage > 0) {
        document.querySelector(".budget__expenses--percentage").textContent =
          obj.percentage + "%";
      } else {
        document.querySelector(".budget__expenses--percentage").textContent =
          "--";
      }
    },
  };
})();

/********************************************
 ** GLOBAL APP CONTROLLER*/
//this controller connects 'budgetController and UIController'
// In here we calls methods for the budgetController and UIController
let appController = (function (budgetCtrl, UICtrl) {
  let setupEventListerners = function () {
    // DOM variable to get the UIController.getDOMstrings()
    let DOM = UIController.getDOMstrings();
    //EVENT handler: click : button click    //fucntion that gets execured as soon as the user clicks on the button
    document.querySelector(DOM.inputAddBtn).addEventListener(
      "click",
      ctrlAddItem
      // //console.log to test if the btn click works!!!
      // // console.log("the button was click");
    );

    //or  'e'
    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }

      //READ data from html input types
    });
  };

  /*************************************
   **UPDATE BUDGET FUCNTION**************
   *********************/
  let updateBudget = function () {
    // // 1. Calculate the budget
    budgetCtrl.calculateBudge();
    // // 2. return the budget
    //return the all items in getBudget() function object and store it in budget variable!!!
    let budget = budgetCtrl.getBudget();

    // // 3. Dsiplay the budget on the UI
    //**CALLS THE displayBudget FUNCTION METHOD ***/
    UICtrl.displayBudget(budget);
  };

  //**ctrlAddItem Function: it's called every time the USER enter's a new ELEMENT */
  let ctrlAddItem = function () {
    let input, newItem;
    // //TO DO LIST, as soon as the user clicks the button
    // // 1. get the field input data
    input = UICtrl.getInput();

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // // 2. add the item to the budget controller
      //use 3 parameters from the input data structure
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // // 3. add the item to the UI
      UICtrl.addListItem(newItem, input.type);

      // // 4. clear the fiels
      UICtrl.crearFiels();

      // // 5. calculate and update budget
      updateBudget();
    }
  };

  //**init FUCNTION: INITIALITES ALL THE Event Listerners*/
  return {
    init: function () {
      // console.log("Application has started.");
      //**SETS EVRYTHING BACK TO 0 */
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1,
      });
      setupEventListerners();
    },
  };
})(budgetController, UIController); //THIS argument gets assing to 'budgetCtrl and UICtrl' parameters

//calls 'init' public object function
appController.init();
