/* eslint-disable no-new */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-resto-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-resto-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-resto-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
    async render() {
        return `
        <section class="content">
            <div class="explore">
                <div class="searchInputWrapper">
                    <input id="query" type="text" class="searchInput" placeholder="Search favorite restaurant..">
                </div>
                <h1 class="explore__label"> Your Favorite Restaurant</h1>
                <div id="loading"></div>
                <div id="restaurants" class="posts"></div>
            </div>
        </section>
      `;
    },

    async afterRender() {
        new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
        new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    },
};

export default Favorite;