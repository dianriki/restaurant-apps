/* eslint-disable no-return-assign */
/* eslint-disable eqeqeq */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteRestaurant = [];

const FavoriteRestoArray = {

    getRestaurant(id) {
        if (!id) {
            return;
        }

        return favoriteRestaurant.find((restaurant) => restaurant.id == id);
    },

    getAllRestaurants() {
        return favoriteRestaurant;
    },

    putRestaurant(restaurant) {
        if (!restaurant.hasOwnProperty('id')) {
            return;
        }

        // pastikan id ini belum ada dalam daftar favoriteRestaurant
        if (this.getRestaurant(restaurant.id)) {
            return;
        }

        favoriteRestaurant.push(restaurant);
    },

    deleteRestaurant(id) {
        // cara boros menghapus film dengan meng-copy film yang ada
        // kecuali film dengan id == id
        favoriteRestaurant = favoriteRestaurant.filter((restaurant) => restaurant.id != id);
    },

    searchRestaurants(query) {
        return this.getAllRestaurants()
            .filter((restaurant) => {
                const loweredCaseRestaurantTitle = (restaurant.name || '-').toLowerCase();
                const jammedRestaurantTitle = loweredCaseRestaurantTitle.replace(/\s/g, '');

                const loweredCaseQuery = query.toLowerCase();
                const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

                return jammedRestaurantTitle.indexOf(jammedQuery) !== -1;
            });
    },

};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
    afterEach(() => favoriteRestaurant = []);

    itActsAsFavoriteRestoModel(FavoriteRestoArray);
});