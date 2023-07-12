import { gql } from '@apollo/client';

export const getBlogHub = gql`
	query AsaPosts {
		posts(first: 10) {
			nodes {
				title
				uri
				template {
					templateName
				}
				postId
				authorDatabaseId
				featuredImage {
					node {
						mediaItemUrl
						altText
						mediaDetails {
							width
							height
						}
					}
				}
				excerpt
				date
				categories {
					nodes {
						name
						uri
					}
				}
			}
		}
	}
`;

export const getSinglePost = gql`
	query GetPost($id: ID!) {
		post(id: $id, idType: URI) {
			content(format: RENDERED)
			uri
			author {
				node {
					nickname
				}
			}
		}
	}
`;
