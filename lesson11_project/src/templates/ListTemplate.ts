import FullList from "../model/FullList";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
  ul: HTMLUListElement;

  static instance: ListTemplate = new ListTemplate();

  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(fullList: FullList): void {
    this.clear();
    fullList.list.forEach((item) => {
      const li = document.createElement("li") as HTMLLIElement;
      li.className = "item";

      const check = document.createElement("input") as HTMLInputElement;
      check.type = "checkbox";
      check.id = item.id; // so that each check id is unique
      check.tabIndex = 0; // Setting tabIndex here is not required. As an input element, the checkbox recieves a default tabindex for page navigation
      check.checked = item.checked;
      li.append(check);

      // using getters here not _id and _ checked instance variables

      check.addEventListener("change", (): void => {
        item.checked = !item.checked;
        fullList.save();
      });

      const label = document.createElement("label") as HTMLLabelElement;
      label.htmlFor = item.id;
      label.textContent = item.item;
      li.append(label);

      const button = document.createElement("button") as HTMLButtonElement;
      button.className = "button";
      button.textContent = "X";
      li.append(button);

      button.addEventListener("click", (): void => {
        fullList.removeItem(item.id);
        this.render(fullList); // it does not create endless loop though
      });

      this.ul.append(li);
    });
  }
}
