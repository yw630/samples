import React from "react";

interface AddItemProps {
  items: string[];
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export class ListItem extends React.Component<AddItemProps, {}> {
  render() {
    return (
      <div className="memo__items">
        {this.props.items.map((item, i: number) => {
          return (
            <React.Fragment>
              <p className="memo__item" key={i}>
                {item}
              </p>
              <button
                className="memo__del"
                id={i.toString()}
                onClick={this.props.onClick}
              >
                削除
              </button>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}
