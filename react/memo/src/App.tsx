import React from "react";
import { AddItem } from "./AddItem";
import { ListItem } from "./ListItem";

interface AppState {
  term: string;
  items: string[];
}

class App extends React.Component<{}, AppState> {
  state = {
    term: "",
    items: []
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ term: e.currentTarget.value });
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.term]
    });
  };

  onDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(this.state.items, e.currentTarget.id);
    this.setState({
      items: [
        ...this.state.items.slice(0, parseInt(e.currentTarget.id)),
        ...this.state.items.slice(parseInt(e.currentTarget.id) + 1)
      ]
    });
  };

  render() {
    return (
      <div className="memo">
        <AddItem
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          term={this.state.term}
        />
        <ListItem items={this.state.items} onClick={this.onDelete} />
      </div>
    );
  }
}

export default App;
