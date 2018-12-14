import "@babel/polyfill";
import React, { Component } from "react";
import Layout from "../components/Layout.js";
import getImage from "../helpers/getImage";
import isBlacklisted from "../helpers/isBlacklisted";
import sanitize from "sanitize-html";
import { getHtml } from "../components/busy/Body";
import { Client } from "dsteem";
import Link from "next/link";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FlightIcon from "@material-ui/icons/FlightTakeoff";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";

const client = new Client("https://api.steemit.com");

const styles = {
  card: {
    maxWidth: 445
  },
  media: {
    height: 180
  }
};

class Blog extends Component {
  state = {
    error: false,
    hasMore: true,
    isLoading: false,
    snackbar: true,
    lastauthor: "",
    lastpermlink: "",
    loadposts: [],
    author: "travelfeed"
  };
  streamBlog = async () => {
    this.setState({
      isLoading: true
    });
    let lastpermlink = this.state.lastpermlink;
    let lastauthor = this.state.lastauthor;
    if (lastpermlink === "") {
      const tagargs = { tag: this.state.author, limit: 51 };
      const tagstream = await client.database.getDiscussions("blog", tagargs);
      try {
        lastpermlink =
          tagstream.length > 0 ? tagstream[tagstream.length - 1].permlink : "";
        lastauthor =
          tagstream.length > 0 ? tagstream[tagstream.length - 1].author : "";
      } catch (err) {
        this.setState({
          error: err.message,
          snackbar: true,
          isLoading: false
        });
      }
    }
    const args = {
      tag: this.state.author,
      limit: 50,
      start_author: lastauthor,
      start_permlink: lastpermlink
    };
    const stream = await client.database.getDiscussions("blog", args);
    lastpermlink = stream.length > 0 ? stream[stream.length - 1].permlink : "";
    try {
      if (stream.length == 0) {
        this.setState({
          hasMore: false,
          isLoading: false
        });
      }
      lastauthor = stream.length > 0 ? stream[stream.length - 1].author : "";
      delete stream[stream.length - 1];
      const loadposts = this.state.loadposts.concat(stream);
      this.setState({
        lastpermlink: lastpermlink,
        lastauthor: lastauthor,
        loadposts: loadposts,
        isLoading: false,
        hasMore: true
      });
    } catch (err) {
      this.setState({
        error: err.message,
        isLoading: false
      });
    }
  };
  componentDidMount() {
    let author = this.props.author; //TODO: how to fetch props
    if (typeof author === "undefined") {
      author = "travelfeed";
    }
    this.setState({
      author: author
    });
    window.onscroll = () => {
      const {
        streamBlog,
        state: { error, isLoading, hasMore }
      } = this;
      if (error || isLoading || !hasMore) return;
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.scrollHeight
      ) {
        streamBlog();
      }
    };
  }
  static async getInitialProps(props) {
    let { author } = props.query;
    if (isBlacklisted(author, "none") === true) {
      const stream = { stream: { blacklisted: true } };
      return stream;
    }
    if (typeof author === "undefined") {
      author = "travelfeed";
    }
    const args = { tag: author, limit: 50 };
    try {
      const stream = await client.database.getDiscussions("blog", args);
      return { stream };
    } catch {
      const stream = { stream: { notfound: true } };
      return stream;
    }
  }
  render() {
    if (typeof this.props.stream.notfound !== "undefined") {
      return (
        <Layout>
          <Grid container spacing={16} alignItems="center" justify="center">
            <Grid item lg={7} md={8} sm={11} xs={12}>
              <Card>
                <CardContent>
                  <Typography>This author is not a valid account.</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Layout>
      );
    } else if (typeof this.props.stream.blacklisted !== "undefined") {
      return (
        <Layout>
          <Grid container spacing={16} alignItems="center" justify="center">
            <Grid item lg={7} md={8} sm={11} xs={12}>
              <Card>
                <CardContent>
                  <Typography>
                    This author is blacklisted from TravelFeed.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Layout>
      );
    } else {
      const stream = this.props.stream.concat(this.state.loadposts);
      const { error, hasMore, isLoading } = this.state;
      let count = 0;
      let processed = [];
      return (
        <Layout>
          <Typography variant="display1" align="center" gutterBottom={true}>
            {this.state.author} Blog
          </Typography>
          <Grid container spacing={16} alignItems="center" justify="center">
            {stream.map(post => {
              const json = JSON.parse(post.json_metadata);
              // Filter out:
              // - Filter out duplicates. This does not work for some reason..
              // - Limit initial fetch to 7 posts
              // - Exclude resteems
              if (
                ((processed.indexOf(post.permlink) > -1 === false &&
                  count < 8) ||
                  stream.length > 50) &&
                post.author === this.state.author
              ) {
                let excerpt = post.body;
                if (json.tags.indexOf("travelfeeddaily") > -1 === true) {
                  const esplit = excerpt.split("<br>");
                  excerpt = esplit.length > 0 ? esplit[1] : excerpt;
                }
                excerpt = getHtml(excerpt, {}, "text");
                const image = getImage(
                  post.json_metadata,
                  post.body,
                  "600x400"
                );
                excerpt = sanitize(excerpt, { allowedTags: [] });
                excerpt = excerpt.substring(0, 250);
                const posttag =
                  typeof json.tags != "undefined" && json.tags.length > 3
                    ? json.tags[4]
                    : "travelfeed";
                //todo: try fetching first image from post if no image is defined in json_metadata
                let totalmiles = 0;
                //Proposal for voting system: Each user can give between 0.1 and 10 "miles", each 0.1 mile equals a 1% upvote.
                for (let vote = 0; vote < post.active_votes.length; vote++) {
                  totalmiles += Math.round(
                    post.active_votes[vote].percent / 1000
                  );
                }
                ++count;
                processed.push(post.permlink);
                return (
                  <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Card key={post.permlink} style={styles.card}>
                      <CardActionArea>
                        <CardMedia
                          className="pt-2 text-right"
                          style={styles.media}
                          image={image}
                        >
                          <Link
                            as={`/created/${posttag}`}
                            href={`/tag?sortby=created&&tag=${posttag}`}
                          >
                            <span className="bg-dark text-white-50 p-1 rounded-left" />
                          </Link>
                        </CardMedia>
                        <Link
                          as={`/@${post.author}/${post.permlink}`}
                          href={`/post?author=${post.author}&permlink=${
                            post.permlink
                          }`}
                        >
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {post.title}
                            </Typography>
                            <Typography component="p">
                              {excerpt} [...]
                            </Typography>
                          </CardContent>
                        </Link>
                      </CardActionArea>
                      <CardActions>
                        <IconButton aria-label="Upvote">
                          <FlightIcon />
                        </IconButton>
                        <Typography noWrap>{totalmiles}</Typography>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              }
            })}
            {!error && <Typography>{error}</Typography>}
            {isLoading && (
              <Grid item xs={1}>
                <CircularProgress />
              </Grid>
            )}
            {!hasMore && <Typography>That is all :)</Typography>}
          </Grid>
        </Layout>
      );
    }
  }
}

Blog.propTypes = {
  stream: PropTypes.array
};

export default Blog;
