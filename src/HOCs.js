import moment from 'moment';

export default function withPrettyDate(Component) {
  return ({ date }, ...args) => {
    date = moment(date).fromNow();
    return <Component date={date} {...args} />;
  };
}
