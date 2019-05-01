import gql from "graphql-tag";

export const GET_POSTS = gql`
  query posts(
    $country_code: [String]
    $subdivision: String
    $city: String
    $suburb: String
    $location_box: [Float]
    $author: String
    $exclude_authors: [String]
    $feed: String
    $tags: [String]
    $parent_id: Int
    $parent_author: String
    $min_curation_score: Int
    $min_total_votes: Int
    $include_nsfw: Boolean
    $include_hidden: Boolean
    $orderby: String
    $orderdir: String
    $offset: Int
    $limit: Int
  ) {
    posts(
      country_code: $country_code
      subdivision: $subdivision
      city: $city
      suburb: $suburb
      location_box: $location_box
      author: $author
      exclude_authors: $exclude_authors
      feed: $feed
      tags: $tags
      parent_id: $parent_id
      parent_author: $parent_author
      min_curation_score: $min_curation_score
      min_total_votes: $min_total_votes
      include_nsfw: $include_nsfw
      include_hidden: $include_hidden
      orderby: $orderby
      orderdir: $orderdir
      offset: $offset
      limit: $limit
    ) {
      author
      display_name
      permlink
      title
      img_url
      created_at
      body
      votes
      tags
      total_votes
      curation_score
      app
      parent_author
      parent_permlink
      root_title
      depth
    }
  }
`;

export const GET_NOTIFICATIONS = gql`
  query posts($author: String, $min_curation_score: Int, $limit: Int) {
    posts(
      author: $author
      min_curation_score: $min_curation_score
      limit: $limit
    ) {
      author
      permlink
      title
      curation_score
    }
  }
`;

export const GET_BLOG_POSTS = gql`
  query posts($author: String, $limit: Int) {
    posts(author: $author, limit: $limit) {
      author
      permlink
      title
      img_url
      votes
    }
  }
`;
