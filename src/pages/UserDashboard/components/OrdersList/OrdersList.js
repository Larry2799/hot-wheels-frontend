import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "./style";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";


const OrdersList = ({ orders }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Номер заказа</TableCell>
            <TableCell align="center">Дата заказа</TableCell>
            <TableCell align="right">Сумма заказа(BYN)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell component="th" scope="row">
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      {order._id}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <List
                      style={{
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      {order.goods.map((good) => {
                        return (
                          <ListItem
                            style={{
                              width: "100%",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <ListItemAvatar>
                                <div
                                  className={classes.goodImage}
                                  style={{
                                    backgroundImage: `url(${good.image})`,
                                  }}
                                />
                              </ListItemAvatar>
                              <ListItemText
                                style={{ maxWidth: 145, width: "100%" }}
                                primary={good.name}
                                secondary={good.description}
                              />
                            </div>

                            <ListItemText
                              style={{ maxWidth: 145, width: "100%" }}
                              primary={`Количество: ${good.quantity}`}
                              secondary={`Стоимость: ${good.price} BYN`}
                            />
                          </ListItem>
                        );
                      })}
                    </List>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </TableCell>
              <TableCell align="center">{order.date.slice(0, 10)}</TableCell>
              <TableCell align="right">{order.totalPrice.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

OrdersList.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object),
};

export default React.memo(OrdersList);
