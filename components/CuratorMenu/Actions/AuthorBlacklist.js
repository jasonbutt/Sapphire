import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import { withSnackbar } from "notistack";
import PropTypes from "prop-types";
import { Mutation, Query } from "react-apollo";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {
  BLACKLIST_AUTHOR,
  UNBLACKLIST_AUTHOR,
  IS_BLACKLISTED_AUTHOR
} from "../../../helpers/graphql/blacklist";

class AlertDialog extends React.Component {
  state = {
    reason: "",
    open: false,
    isOnlyCommentBlacklisted: false
  };
  handleCheckboxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleTextFieldChange(content) {
    this.setState({ reason: content.target.value });
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  newNotification(notification) {
    if (notification != undefined) {
      let variant = "success";
      if (notification.success === false) {
        variant = "error";
      }
      this.props.enqueueSnackbar(notification.message, { variant });
      if (notification.success === true) {
        this.setState({ success: true });
      }
    }
  }
  render() {
    return (
      <div>
        <Query
          query={IS_BLACKLISTED_AUTHOR}
          variables={{
            author: this.props.author
          }}
        >
          {({ data, loading, error }) => {
            if (loading || error) {
              return <Fragment />;
            }
            if (
              data.isBlacklistedAuthor.isBlacklisted ||
              data.isBlacklistedAuthor.isOnlyCommentBlacklisted
            ) {
              const reason = data.isBlacklistedAuthor.reason;
              const isOnlyCommentBlacklisted =
                data.isBlacklistedAuthor.isOnlyCommentBlacklisted;
              return (
                <Mutation
                  mutation={UNBLACKLIST_AUTHOR}
                  variables={{
                    author: this.props.author
                  }}
                >
                  {(unblacklistAuthor, data) => {
                    if (
                      data &&
                      data.data &&
                      data.data.unblacklistAuthor &&
                      this.state.open === true
                    ) {
                      this.newNotification({
                        success: data.data.unblacklistAuthor.success,
                        message: data.data.unblacklistAuthor.message
                      });
                      this.setState({ open: false });
                    }
                    return (
                      <Fragment>
                        <MenuItem onClick={this.handleClickOpen}>
                          Remove author from blacklist
                        </MenuItem>
                        <Dialog
                          open={this.state.open}
                          onClose={this.handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title">
                            Remove author from blacklist?
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              This author has been blacklisted for the following
                              reason:
                              <em>{` ${reason} `}</em>
                              {isOnlyCommentBlacklisted && (
                                <p>
                                  This author is currently only blacklisted for
                                  comments. To also blacklist this author for
                                  posts, remove the author from the blacklist
                                  and add him again.
                                </p>
                              )}
                            </DialogContentText>
                            <DialogContentText id="alert-dialog-description">
                              Are you sure that you want to remove this author
                              from the blacklist?
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                              Cancel
                            </Button>
                            <Button
                              onClick={unblacklistAuthor}
                              color="primary"
                              variant="contained"
                              autoFocus
                            >
                              Remove from blacklist
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </Fragment>
                    );
                  }}
                </Mutation>
              );
            } else if (data.isBlacklistedAuthor.isBlacklisted === false) {
              return (
                <Mutation
                  mutation={BLACKLIST_AUTHOR}
                  variables={{
                    author: this.props.author,
                    reason: `Author blacklist: ${this.state.reason}`,
                    isOnlyCommentBlacklisted: this.state
                      .isOnlyCommentBlacklisted
                  }}
                >
                  {(blacklistAuthor, data) => {
                    if (
                      data &&
                      data.data &&
                      data.data.blacklistAuthor &&
                      this.state.open === true
                    ) {
                      this.newNotification({
                        success: data.data.blacklistAuthor.success,
                        message: data.data.blacklistAuthor.message
                      });
                      this.setState({ open: false });
                    }
                    return (
                      <Fragment>
                        <MenuItem onClick={this.handleClickOpen}>
                          Blacklist author
                        </MenuItem>
                        <Dialog
                          open={this.state.open}
                          onClose={this.handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title">
                            Blacklist author?
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              Are you sure that you want to blacklist the author
                              @{this.props.author}? Posts/comment from this
                              author will no longer be visible on TravelFeed.
                              Please enter a reason for blacklisting this
                              author.
                            </DialogContentText>
                            <TextField
                              autoFocus
                              margin="dense"
                              value={this.state.reason}
                              onChange={this.handleTextFieldChange.bind(this)}
                              label="Reason"
                              fullWidth
                            />
                            <FormControlLabel
                              labelPlacement="end"
                              control={
                                <Switch
                                  checked={this.state.isOnlyCommentBlacklisted}
                                  onChange={this.handleCheckboxChange(
                                    "isOnlyCommentBlacklisted"
                                  )}
                                  color="primary"
                                />
                              }
                              label="Blacklist only for comments"
                            />
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                              Cancel
                            </Button>
                            <Button
                              onClick={blacklistAuthor}
                              color="primary"
                              variant="contained"
                              autoFocus
                            >
                              Blacklist author
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </Fragment>
                    );
                  }}
                </Mutation>
              );
            }
          }}
        </Query>
      </div>
    );
  }
}

AlertDialog.propTypes = {
  author: PropTypes.string,
  enqueueSnackbar: PropTypes.func
};

export default withSnackbar(AlertDialog);