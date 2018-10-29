import React, {Component} from 'react';

const defaultProviderValue = {
    onItemClick: () => null,
    selectedItems: []
}

const MenuContext = React.createContext(defaultProviderValue);

class MenuProvider extends Component {

    state = {
        selectedMenuItems: []
    }

    onMenuItemClick = (index, event) => {
        this.setState({selectedMenuItems: index});
        event.stopPropagation();
    };

    render() {
        const {props} = this;

        const { selectedMenuItems } = this.state;

        const contextValue = {
            onItemClick: this.onMenuItemClick,
            selectedMenuItems: selectedMenuItems
        }

        return (
            <MenuContext.Provider value={contextValue}>
                {props.children}
            </MenuContext.Provider>
        )
  }
}

const MenuConsumer = MenuContext.Consumer;

export { MenuProvider, MenuConsumer };