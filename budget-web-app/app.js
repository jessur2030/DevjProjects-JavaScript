/*********************************************************
 **--- SEPARATION OF CONSERN MODULES ARCHITECTURE ---****/

//Inmirially invoque function OT IFI
/*******************************budgetController********************************
 **------------------------ BUDGET MODULE CONTROLLER ------------------------***/
const budgetController = (function () {
  //functions constructor object to stores inputs values
  let Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  //**CALCULATES EACH INDIVIDUAL EXPENSES PERCENTAGES **/
  //**------------- calcPercentage------------------- **/
  Expense.prototype.calcPercentage = function (totalIncome) {
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
  };

  //**RETURNS EACH INDIVIDUAL EXPENSES PERCENTAGES ****/
  //**------------- getPercentage------------------- **/
  Expense.prototype.getPercentage = function () {
    return this.percentage;
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

  /********************************************
  ** INPUTS BLOBAL APP DATA STRUCTURE *********
  local data storage   ***********************/
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

    deleteItem: function (type, id) {
      let ids, index;
      //**map() method loops over element of the current array and return a new ARRAY */
      ids = data.allItems[type].map(function (current) {
        return current.id;
      });
      index = ids.indexOf(id);

      if (index !== -1) {
        //**splice() method removes the element from the array */
        data.allItems[type].splice(index, 1);
      }
    },

    //**CALCULATE'S BUDGET FUNCTION */
    //**Calculates the SUM of all INCOME'S AND the SUM of total EXPENSES */
    //**Calculates the budget: The INCOMES - EXPENSES*/
    //**Calculates the persentage: EXPENSES / INCOMES * 100   */
    calculateBudget: function () {
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

    calculatePercentages: function () {
      data.allItems.exp.forEach(function (cur) {
        cur.calcPercentage(data.totals.inc);
      });
    },

    getPercentages: function () {
      let allPerc = data.allItems.exp.map(function (cur) {
        return cur.getPercentage();
      });
      return allPerc;
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

    testing: function () {
      console.log(data);
    },
  };
})();

/*****************************UIController***********************************
 **------------------------ UI MODULE CONTROLLER ------------------------***/
//***PRIVATES FUNCTIONS***//
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
    container: ".container",
    expensesPercentageLabel: ".item__percentage",
    dateLabel: ".budget__title--month",
    // persentageLabel: "budget__expenses--percentage",
  };

  //**Function format numbers */
  let formatNumber = function (num, type) {
    let numSplit, int, dec;
    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split(".");
    int = numSplit[0];
    if (int.length > 3) {
      int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3);
    }

    dec = numSplit[1];

    //***----- Terminary operator ------***/
    // type === 'exp' ? sign = '-' :  sign = '+'

    return (type === "exp" ? "- " : "+ ") + "" + int + "." + dec;
  };

  let nodeListForEach = function (list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
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
          '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === "exp") {
        element = DOMstring.expensesContainer;
        html =
          '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div  class="item__percentage">21%</div> <div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      // replace th eplaceholder rext with the user input data
      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", formatNumber(obj.value, type));

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

    deleteListItem: function (selectorId) {
      let element = document.getElementById(selectorId);
      element.parentNode.removeChild(element);
    },

    crearFiels: function () {
      let fields, fieldsArr;
      fields = document.querySelectorAll(
        DOMstring.inputDescription + ", " + DOMstring.inputValue
      );

      //**slide() method makes a copy of element */
      fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(function (current, indexNum, array) {
        current.value = "";
      });

      fieldsArr[0].focus();
    },

    displayBudget: function (obj) {
      let type;

      obj.budget > 0 ? (type = "inc") : (type = "exp");

      document.querySelector(DOMstring.budgetLabel).textContent = formatNumber(
        obj.budget,
        type
      );
      document.querySelector(
        DOMstring.budgetIncomeLabel
      ).textContent = formatNumber(obj.totalInc, "inc");
      document.querySelector(
        DOMstring.expensesLabel
      ).textContent = formatNumber(obj.totalExp, "exp");

      if (obj.percentage > 0) {
        document.querySelector(".budget__expenses--percentage").textContent =
          obj.percentage + "%";
      } else {
        document.querySelector(".budget__expenses--percentage").textContent =
          "--";
      }
    },

    displayPercentages: function (percentages) {
      var fields = document.querySelectorAll(".item__percentage");

      nodeListForEach(fields, function (current, index) {
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + "%";
        } else {
          current.textContent = "---";
        }
      });
    },

    //**FUNCTION displayMonth Display current Day in UI ***/
    displayMonth: function () {
      let now, year, month, months;
      now = new Date();

      months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      month = now.getMonth();

      year = now.getFullYear();

      document.querySelector(DOMstring.dateLabel).textContent =
        months[month] + " " + year;
    },

    changedType: function () {
      let fields = document.querySelectorAll(
        DOMstring.inputType +
          "," +
          DOMstring.inputDescription +
          "," +
          DOMstring.inputValue
      );

      nodeListForEach(fields, function (cur) {
        cur.classList.toggle("red-focus");
      });

      document.querySelector(DOMstring.inputAddBtn).classList.toggle("red");
    },

    getDOMstrings: function () {
      return DOMstring;
    },
  };
})(); //********************UI CONTROLLER END********************/

/*****************************appController***********************************
 **------------------------ GLOBAL APP CONTROLLER ------------------------***/
//this controller connects 'budgetController and UIController'
// In here we calls methods for the budgetController and UIController
let appController = (function (budgetCtrl, UICtrl) {
  //*** FUNCTION setupEventListerners: handles all event listerner on the page****/
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
    });

    document
      .querySelector(DOM.container)
      .addEventListener("click", ctrlDeleteItem);

    document
      .querySelector(DOM.inputType)
      .addEventListener("change", UICtrl.changedType);
  };

  /**********************************************
   **--- UPDATE BUDGET FUCNTION ---**************
   *********************/
  let updateBudget = function () {
    // // 1. Calculate the budget
    budgetCtrl.calculateBudget();
    // // 2. return the budget
    //return the all items in getBudget() function object and store it in budget variable!!!
    let budget = budgetCtrl.getBudget();

    // // 3. Dsiplay the budget on the UI
    //**--- CALLS THE displayBudget FUNCTION METHOD ---***/
    UICtrl.displayBudget(budget);
  };

  //**--- UPDATES THE PERCENTAGES FUNCTION ---***/
  let updatePercentages = function () {
    // 1. calculate the percentages
    budgetCtrl.calculatePercentages();
    // 2. Read percentages ftom the budget controller
    let percentages = budgetCtrl.getPercentages();

    // 3. update the UI  with the new percentages
    UICtrl.displayPercentages(percentages);
  };

  //**--- ctrlAddItem Function: it's called every time the USER enter's a new ELEMENT ---*/
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

      // // 6. CALCULATES AND UPDATE PERCENTAGES
      updatePercentages();
    }
  };

  let ctrlDeleteItem = function (event) {
    let itemID, splitID, type, ID;

    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {
      //inc-1
      splitID = itemID.split("-");
      type = splitID[0];
      ID = parseInt(splitID[1]);

      // 1. delete the item from the data structure
      budgetCtrl.deleteItem(type, ID);

      // 2. delete the items from the UI
      UICtrl.deleteListItem(itemID);

      // 3. Update and show the new budget
      updateBudget();

      // 4. CALCULATES AND UPDATE PERCENTAGES
      updatePercentages();
    }
  };

  //**--- init FUCNTION: INITIALITES ALL THE Event Listerners ---*/
  return {
    init: function () {
      // console.log("Application has started.");
      UICtrl.displayMonth();
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
