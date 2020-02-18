import React from "react";

interface AddItemProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  term: string;
}

export class AddItem extends React.Component<AddItemProps, {}> {
  render() {
    return (
      <div className="memo__add">
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            onChange={this.props.onChange}
            value={this.props.term}
          />
        </form>
      </div>
    );
  }
}
