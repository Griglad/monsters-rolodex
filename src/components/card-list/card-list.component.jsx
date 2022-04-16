import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component";

class CardList extends Component {
    render() {
        // I should always have one parent level component. Like div and h1
        const { monsters } = this.props;
        console.log(this.props);
        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    return (
                        <Card monster={monster} />
                    );
                })}
            </div>
        );
    }
}
export default CardList;
