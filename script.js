var items = [];
/*items.push(
  {
    isChecked: false,
    thingToDo: "hi"
  }
)*/

function deleteItem(button) {
  var parent = button.parentElement;
  var divDelete = parent.parentElement;
  divDelete.remove();
  var target = button.dataset.id;
  items = items.filter((i)=>i.ID != target)
}

function updateItem(input) {
  var target = input.dataset.id;
  var value = input.value;
  items = items.map((i)=>{
    if(i.ID == target) {
      i.thingToDo = value;
    }
    return i;
  })
}

var counter = 1;

var AllItems = document.getElementById("AllItems");
/*AllItems.innerHTML += `    <div class="center">
      <input
        type="checkbox" value="${items[0].isChecked}"/>
      <div class="hovercontainer center">
        <textarea>${items[0].thingToDo}</textarea>
        <div class="hiddencontainer">
        </div>
      </div>
    </div>`*/

var ItemAdd = document.getElementById("ItemAdd");
function newItem() {
  counter += 1;
  items.push(
    {
      isChecked: false,
      thingToDo: "Enter item here", 
      ID: counter
    }
  )
  AllItems.innerHTML += `    <div class="center">
      <input
        type="checkbox" value="${items[items.length-1].isChecked}"/>
      <div class="hovercontainer center">
        <textarea data-id = "${counter}" onchange = "updateItem(this)">${items[items.length-1].thingToDo}</textarea>
        <div class="hiddencontainer" data-id = "${counter}" onclick = "deleteItem(this)">
        </div>
      </div>
    </div>`
}
ItemAdd.addEventListener("click", newItem);
