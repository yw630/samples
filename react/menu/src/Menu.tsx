import React from "react";

interface submenu {
  title: string;
  items: string[];
}

interface MenuState {
  selectedTitle: string | null;
  menu: submenu[];
}

export class Menu extends React.Component<{}, MenuState> {
  state = {
    selectedTitle: null,
    menu: [
      { title: "Menu0", items: ["item00", "item01", "item02"] },
      { title: "Menu1", items: ["item10", "item11", "item12"] },
      { title: "Menu2", items: ["item20", "item21", "item22"] }
    ]
  };

  onMouseOver = (e: React.MouseEvent<HTMLUListElement>) => {
    this.setState({ selectedTitle: e.currentTarget.textContent });
    console.log(e.currentTarget.innerText);
  };

  render() {
    return (
      <div className="menu">
        {this.state.menu.map(submenu => {
          return (
            <ul className="menu__submenu" onMouseOver={this.onMouseOver}>
              {submenu.title}
              {this.state.selectedTitle === submenu.title &&
                submenu.items.map(item => {
                  return <li className="menu__item">{item}</li>;
                })}
            </ul>
          );
        })}
      </div>
    );
  }
}
