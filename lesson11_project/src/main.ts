import "./css/style.css";
import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  const itemEntryForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;

  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();

    // create handler to submit that new event
    const input = document.getElementById("newItem") as HTMLInputElement;
    const newEntryText: string = input.value.trim();

    if (!newEntryText) return; // not adding empty items to our list

    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;

    const newItem = new ListItem(itemId.toString(), newEntryText); // we also have default values there in our list item constructor

    fullList.addItem(newItem);
    template.render(fullList);
  });

  const clearItems = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;

  clearItems.addEventListener("click", (): void => {
    fullList.clearList(); // cleared data
    template.clear(); // cleared display
  }); // these are both listeners so they do not happen right away

  fullList.load(); // it does happen right away
  template.render(fullList);
};

// this essentially says we are not going to run our javascript until this dom content is loaded
document.addEventListener("DOMContentLoaded", initApp);
