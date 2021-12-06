/* eslint-disable class-methods-use-this */
import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
    getTemplate() {
        return `
            <section class="content">
                <div class="explore">
                    <div class="searchInputWrapper">
                        <input id="query" class="searchInput" type="text" placeholder="Search favorite restaurant..">
                    </div>
                        <h1 class="explore__label"> Your Favorite Restaurant</h1>
                    <div id="loading"></div>
                    <div id="restaurants" class="posts"> </div>
                </div>
            </section>
          `;
    }

    runWhenUserIsSearching(callback) {
        document.getElementById('query').addEventListener('change', (event) => {
            callback(event.target.value);
        });
    }

    showRestaurants(restaurants) {
        this.showFavoriteRestaurants(restaurants);
    }

    showFavoriteRestaurants(restaurants = []) {
        let html;
        if (restaurants.length) {
            html = restaurants.reduce((carry, restaurant) => carry.concat(createRestoItemTemplate(restaurant)), '');
        } else {
            html = this._getEmptyRestaurantTemplate();
        }

        document.getElementById('restaurants').innerHTML = html;

        document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
    }

    _getEmptyRestaurantTemplate() {
        return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada restaurant untuk ditampilkan</div>';
    }
}

export default FavoriteRestaurantSearchView;