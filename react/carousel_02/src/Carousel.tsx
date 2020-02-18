import React from "react";

interface CarouselState {
  selectedId: string;
  urls: string[];
}

export class Carousel extends React.Component<{}, CarouselState> {
  state = {
    selectedId: "0",
    urls: [
      "https://images.unsplash.com/photo-1558980394-dbb977039a2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80", // "0"
      "https://images.unsplash.com/photo-1581840130788-0c20b3d547c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80", // "1"
      "https://images.unsplash.com/photo-1581554848473-3fdb164156a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80", // "2"
      "https://images.unsplash.com/photo-1581832097738-9810da6766c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" // "3"
    ]
  };

  onClick(e: React.MouseEvent<HTMLDivElement>) {
    this.setState({ selectedId: e.currentTarget.id });
  }

  render() {
    return (
      <div className="carousel">
        {this.state.urls.map((url, i) => {
          return (
            <img
              className="carousel__item"
              src={url}
              key={i.toString()}
              id={i.toString()}
              style={
                i.toString() === this.state.selectedId
                  ? { zIndex: 100 }
                  : { zIndex: 0 }
              }
            />
          );
        })}
        <div className="carousel__thumb-control">
          {this.state.urls.map((url, i) => {
            return (
              <div
                className="carousel__thumb"
                key={i.toString()}
                id={i.toString()}
                onClick={e => this.onClick(e)}
                style={
                  i.toString() === this.state.selectedId
                    ? { opacity: 0.8, border: "solid 0.1rem red" }
                    : undefined
                }
              >
                <img src={url} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
