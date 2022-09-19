import React from "react";

const initialState = {
  apartment: null,
  apartments: [],
};

const contextWrapper = (component?: React.Component) => ({
  ...initialState,
  setApartments: (data) => {
    initialState.apartments = data;
    component?.setState({ context: contextWrapper(component) });
  },
  setApartment: (data) => {
    initialState.apartment = data;
    component?.setState({ context: contextWrapper(component) });
  },
});

type Context = ReturnType<typeof contextWrapper>;

export const ApartmentContext = React.createContext<Context>(contextWrapper());

interface State {
  context: Context;
}

export class ApartmentContextProvider extends React.Component {
  state: State = {
    context: contextWrapper(this),
  };

  render() {
    return (
      <ApartmentContext.Provider value={this.state.context}>
        {this.props.children}
      </ApartmentContext.Provider>
    );
  }
}
