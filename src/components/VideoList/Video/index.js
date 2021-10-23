/* eslint-disable jsx-a11y/iframe-has-title */
import withPrettyDate from '../../../HOCs';
import DateTime from './DateTime';

const VideowithPrettyDate = withPrettyDate(DateTime);

export default function Video(props) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <VideowithPrettyDate date={props.date} />
    </div>
  );
}
