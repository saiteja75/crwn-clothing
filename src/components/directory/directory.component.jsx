import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSection } from "../../redux/directory/directory.selectors";
import './directory.styles.scss';

class Directory extends React.Component {
    render() {
        return (
            <div className="directory-menu">
                {
                this.props.sections.map(
                    ({id, ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps}/>
                    )
                }
            </div>
        )
    }
}

const mapStateToProp = createStructuredSelector({
  sections:selectSection
});

export default connect(mapStateToProp)(Directory)