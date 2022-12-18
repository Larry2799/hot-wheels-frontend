import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { useStyles } from "./style";

const AllOrdersList = ({ orders }) => {
  const classes = useStyles();

  console.log(orders[0]);

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
                        flexDirection: "column",
                      }}
                    >
                      <ListItemText
                        style={{ maxWidth: 145, width: "100%" }}
                        primary={`Компания:`}
                        secondary={order.customer.companyName}
                      />
                      <ListItemText
                        style={{ maxWidth: 145, width: "100%" }}
                        primary={`Email:`}
                        secondary={order.customer.email}
                      />
                      <ListItemText
                        style={{ maxWidth: 145, width: "100%" }}
                        primary={`Адрес доставки:`}
                        secondary={order.customer.address}
                      />

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

export default AllOrdersList;
