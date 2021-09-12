import PropType from 'prop-types';
import PropTypes from 'prop-types';
import { omit, pick } from 'lodash';

export const filmerTypes = {
  genres: PropType.arrayOf(PropType.string),
  selectGenreIndex: PropType.number,
  selectedGenreIndex: PropType.number,
  arr2d: PropType.array,
  scene: PropTypes.string,
  films: PropTypes.arrayOf(PropTypes.shape({
    genre_ids: PropTypes.arrayOf(PropTypes.string),
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
  }))
};

export const sidebarTypes = omit(filmerTypes, ['films']);

export const contentTypes = pick(filmerTypes, ['films', 'arr2d']);

export const playerTypes = pick(filmerTypes, ['scene']);

