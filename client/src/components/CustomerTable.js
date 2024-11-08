import React from "react";
import { TableRow, TableCell } from "@material-ui/core/";

class CustomerTable extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>
          <img src={this.props.image} alt="profile" width="64" height="64" />
        </TableCell>
        <TableCell>{this.props.birthday}</TableCell>
        <TableCell>{this.props.gender}</TableCell>
        <TableCell>{this.props.job}</TableCell>
      </TableRow>
    );
  }
}

export default CustomerTable;
