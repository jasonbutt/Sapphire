import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Router from 'next/router';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Head from '../Header/Head';
import Header from '../Header/Header';

const InvalidPost = props => {
  return (
    <Fragment>
      <Head title="External Link | TravelFeed" />
      <Header />
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
        className="pt-4 pb-4"
      >
        <Grid item lg={7} md={8} sm={11} xs={12}>
          <Card className="text-center">
            <CardContent>
              <h1>Not a TravelFeed Post</h1>
              <p>
                This is not a valid TravelFeed post, but it does exist on the
                Steem blockchain. Proceed to Steempeak to view the post anyway?
              </p>
              <p>{props.url}</p>
              <Button
                onClick={() => Router.back()}
                color="primary"
                variant="outlined"
                className="m-1"
              >
                Go back
              </Button>
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                href={props.url}
              >
                <Button color="primary" variant="contained" className="m-1">
                  View on Steempeak
                </Button>
              </a>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

InvalidPost.defaultProps = {
  url: undefined,
};

InvalidPost.propTypes = {
  url: PropTypes.string,
};

export default InvalidPost;
