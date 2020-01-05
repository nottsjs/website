const transformPresenter = ({ presenter, presenter_img, presenter_url, github_url, twitter_url }, presenter_bio_html) => ({
  name: presenter,
  bio: presenter_bio_html,
  img: presenter_img,
  url: presenter_url,
  githubUrl: github_url,
  twitterUrl: twitter_url
})

export const transformEvent = ({
  html,
  frontmatter: {
    date, path, title, start, meetup_url,
    startTime, endTime,
    ...otherFields
  },
  fields
}) => ({
  html,
  date,
  path,
  title,
  start,
  startTime,
  endTime,
  meetupUrl: meetup_url,
  presenter: transformPresenter(otherFields, (fields || {}).presenter_bio_html)
})