export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _cheked: boolean = false
  ) {} //giving default values to all the instance variables

  get id(): string {
    return this._id;
  }

  get item(): string {
    return this._item;
  }

  get checked(): boolean {
    return this._cheked;
  }

  set id(id: string) {
    this._id = id;
  }

  set item(item: string) {
    this._item = item;
  }

  set checked(checked: boolean) {
    this._cheked = checked;
  }
}
